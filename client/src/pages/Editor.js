import axios from "axios";
import { useEffect, useRef, useState } from "react";
import '../styles/Editor.css';
import { Select } from "../components/Select";
import { versaParser } from "../utils/versaParser";
import { themeColors, themes } from "../utils/themes";
import { tools } from "../utils/tools";
import { Toolbar } from "../components/Toolbar";

export const Editor = () => {

    //Refs
    const first = useRef(true);
    const ham = useRef(null);
    const mobileMenu = useRef(null);
    const previewSpan = useRef(null);
    const editorArea = useRef(null);
    const previewPanel = useRef(null);
    const editorPanel = useRef(null);

    //States
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");
    const [fonts, setFonts] = useState([]);
    const [activePanel, setActivePanel] = useState("edit");
    const [selectedFont, setSelectedFont] = useState({});
    const [selectedTheme, setSelectedTheme] = useState("Classic");
    const [saveLoader, setSaveLoader] = useState(false);
    const [unsaved, setUnsaved] = useState(false);
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);
    const [prevSaved, setPrevSaved] = useState("");

    //Fetch Google Fonts
    function fetchGoogleFonts() {
        axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONT_API}`)
            .then((res) => {
                setFonts(res.data.items);
            })
            .catch(err => {
                console.log("The following error occurred while fetching fonts: " + err);
            })
    }

    //Setup Font Face
    function setupFontFace() {
        try {
            const fontUrl = selectedFont.files?.regular;
            const fontFaceRule = `@font-face {
          font-family: '${selectedFont.family}';
          src: url('${fontUrl}') format('truetype');
          font-style: 'normal';
          font-weight: 'normal';`;

            const style = document.createElement('style');
            style.appendChild(document.createTextNode(fontFaceRule));
            document.head.appendChild(style);
        } catch (err) {
            console.log("This error occurred while changing the font: " + err);
        }
    }

    //Toggle Mobile Menu
    function toggleMobileMenu() {
        if (ham.current.classList.contains("active")) {
            ham.current.classList.remove("active");
            mobileMenu.current.classList.remove("active");
        } else {
            ham.current.classList.add("active");
            mobileMenu.current.classList.add("active");
        }
    }

    //Close Mobile Menu on Resize
    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth > 1425) {
                ham.current.classList.remove("active");
                mobileMenu.current.classList.remove("active");
            }
        }

        window.addEventListener("resize", closeOnResize);

        return () => window.removeEventListener("resize", closeOnResize);
    }, [])

    //Close Mobile Menu on Click Away
    useEffect(() => {
        const closeOnClickAway = (e) => {
            if (mobileMenu.current.classList.contains("active")) {
                if (!mobileMenu.current.contains(e.target) && !ham.current.contains(e.target)) {
                    ham.current.classList.remove("active");
                    mobileMenu.current.classList.remove("active");
                }
            }
        }

        window.addEventListener("click", closeOnClickAway);

        return () => window.removeEventListener("click", closeOnClickAway);
    }, [])

    //Handle Tab Press in TextArea
    const handleTab = (event) => {
        if (event.keyCode === 9) {
            event.preventDefault();
            const start = event.target.selectionStart;
            const end = event.target.selectionEnd;
            const text = event.target.value;
            event.target.value = text.substring(0, start) + '    ' + text.substring(end);
            event.target.selectionStart = event.target.selectionEnd = start + 4;
        }
    };

    //Download pdf
    function downloadPdf() {
        window.print();
    }

    //Call Fetch Google Fonts
    useEffect(() => {
        fetchGoogleFonts()
    }, [])

    //Call Font Face Setup on Change & Fetch Local Storage content & Set Active Panel at startup
    useEffect(() => {
        if (first.current) {
            activePanelStartup();
            let temp = localStorage.getItem('editorContent') || '';
            setPrevSaved(temp);
            if (!text) setText(temp);
            first.current = false;
        } else {
            setupFontFace()
        }
    }, [selectedFont])

    //Call Versa Parser
    useEffect(() => {
        setPreview(versaParser(text, selectedTheme));
        verifySaveStatus();
        setWordCharCount();
    }, [text, selectedTheme])

    //Store editor content in localstorage before unload
    useEffect(() => {
        const unloadMethod = () => {
            activateSaveLoader();
            localStorage.setItem('editorContent', editorArea.current.value);
        }
        const unloadInterval = setInterval(() => {
            unloadMethod();
            setPrevSaved(editorArea.current.value);
            verifySaveStatus();
        }, 60000);
        window.addEventListener("beforeunload", unloadMethod, { capture: true });
        return () => {
            window.removeEventListener("beforeunload", unloadMethod);
            clearInterval(unloadInterval);
        };
    }, [])

    //Handle Preview Scroll Top
    function previewScrollTop() {
        document.getElementById("preview").scrollTop = 0;
        document.getElementById("editor").scrollTop = 0;
    }

    //Insert Stuff into Textarea
    function insertText(type) {
        const position = editorArea.current.selectionStart;

        const before = editorArea.current.value.substring(0, position);
        const after = editorArea.current.value.substring(position, editorArea.current.value.length);

        editorArea.current.value = before + tools[type] + after;
        setText(editorArea.current.value);
        editorArea.current.selectionStart = editorArea.current.selectionEnd = position + text.length;
    }

    //Active Panel Switcher
    function activePanelSwitcher() {
        if (window.innerWidth < 991) {
            if (activePanel === "edit") {
                setActivePanel("view");
                editorPanel.current.classList.remove("active");
                setTimeout(() => {
                    editorPanel.current.style.display = "none";
                    previewPanel.current.style.display = "initial";
                    setTimeout(() => {
                        previewPanel.current.classList.add("active");
                    }, 50)
                }, 900)
            } else {
                setActivePanel("edit");
                previewPanel.current.classList.remove("active");
                setTimeout(() => {
                    previewPanel.current.style.display = "none";
                    editorPanel.current.style.display = "initial";
                    setTimeout(() => {
                        editorPanel.current.classList.add("active");
                    }, 50)
                }, 900)
            }
        }
    }

    //Reset Panels on Resize
    useEffect(() => {
        const resetPanel = () => {
            if (window.innerWidth > 991) {
                setActivePanel("edit");
                editorPanel.current.style.display = "initial";
                previewPanel.current.style.display = "initial";
            } else {
                activePanelStartup();
            }
        }

        window.addEventListener("resize", resetPanel);
        return () => window.removeEventListener("resize", resetPanel);
    }, [])

    //Active Panel Startup Setter
    function activePanelStartup() {
        if (window.innerWidth < 991) {
            if (activePanel === "edit") {
                editorPanel.current.classList.add("active");
                previewPanel.current.classList.remove("active");
                editorPanel.current.style.display = "initial";
                previewPanel.current.style.display = "none";
            } else {
                editorPanel.current.classList.remove("active");
                previewPanel.current.classList.add("active");
                editorPanel.current.style.display = "none";
                previewPanel.current.style.display = "initial";

            }
        }
    }

    //Activate Save Loader
    function activateSaveLoader() {
        setSaveLoader(true);
        setTimeout(() => {
            setSaveLoader(false);
        }, 1000)
    }

    //Editor Functionality
    useEffect(() => {
        const initializeFunctionality = (e) => {
            if (e.ctrlKey && e.key === "s") {
                e.preventDefault();
                save();
            }
            if (e.ctrlKey && e.key === 'd') {
                e.preventDefault();
                duplicateCurrentLine();
            }
        }

        const save = () => {
            activateSaveLoader();
            let currentContent = editorArea.current.value;
            setPrevSaved(currentContent);
            verifySaveStatus();
            localStorage.setItem('editorContent', currentContent);
        }

        const duplicateCurrentLine = () => {
            let startPos = editorArea.current.selectionStart;
            let endPos = editorArea.current.selectionEnd;
            let text = editorArea.current.value;

            let lineStart = text.lastIndexOf('\n', startPos - 1) + 1;
            let lineEnd = text.indexOf('\n', endPos);

            let currentLine = text.substring(lineStart, lineEnd !== -1 ? lineEnd : undefined);

            editorArea.current.value = text.substring(0, lineEnd) + '\n' + currentLine + text.substring(lineEnd);

            editorArea.current.selectionStart = startPos + currentLine.length + 1;
            editorArea.current.selectionEnd = startPos + currentLine.length + 1;

            setText(editorArea.current.value);
        }

        window.addEventListener("keydown", initializeFunctionality);

        return () => window.removeEventListener("keydown", initializeFunctionality);
    }, [])

    //Verify Save Status
    function verifySaveStatus() {
        if (prevSaved !== text) {
            setUnsaved(true);
        } else {
            setUnsaved(false);
        }
    }

    //Set Word and Char Count
    function setWordCharCount() {
        let charLength = editorArea.current.value.length;
        setChars(charLength);

        let wordCount = editorArea.current.value.trim().split(/\s+/).filter(word => /\w+/.test(word)).length;
        setWords(wordCount);
    }

    return (
        <>
            <section className="editor flex flex-col">
                {/* Upload Popup */}
                {/* <div className="upload-popup-overlay fixed top-0 left-0 h-screen w-screen bg-black opacity-40" />
                <div className="upload-popup-container fixed p-2 rounded bg-white">
                    <div className="upload-popup">
                        <div className="input-wrapper w-full text-center">
                            <div className="label-wrapper w-max rounded p-1">
                                <label htmlFor="file-upload" className="font-bold rounded text-white cursor-pointer">Upload File Here</label>
                            </div>
                            <input type="file" id="file-upload" className="hidden" required />
                        </div>
                    </div>
                </div> */}
                {/* Upload Popup End */}
                {/* Header */}
                <nav className="no-print relative">
                    <header className="bg-dark relative p-3 flex gap-x-5 items-center justify-between z-50 no-print">
                        <div className="left flex items-center gap-x-5">
                            <span className="brand user-select-none cursor-pointer text-white font-bold text-4xl">Versa</span>
                            <div className="tools flex items-center gap-x-1 flex-wrap">
                                <Toolbar insertText={insertText}/>
                            </div>
                        </div>
                        <div className="right flex items-center gap-x-5">
                            <div className="font-options flex flex-col">
                                <label htmlFor="fonts" className="text-white">Choose Font</label>
                                <Select name="fonts" setState={setSelectedFont}>
                                    {
                                        fonts.map((value, index) => {
                                            return (
                                                <option key={index} value={JSON.stringify(value)}>
                                                    {value.family}
                                                </option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>
                            <div className="operations flex gap-x-5 items-end">
                                <div className="style flex flex-col">
                                    <label htmlFor="theme" className="text-white">Choose Theme</label>
                                    <Select name="theme" setState={setSelectedTheme}>
                                        {
                                            Object.keys(themes).map((theme, index) => {
                                                return (
                                                    <option value={theme} key={index}>{theme}</option>
                                                )
                                            })
                                        }
                                    </Select>
                                </div>
                                <div className="options">
                                    <button type="button" className="text-white rounded px-5 py-3  click active:text-black" onClick={downloadPdf}>Download <i className="fa-solid fa-download" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-options flex items-center gap-x-5">
                            <div className="view-edit rounded">
                                <button type="button" className="text-white bg-black px-3 py-2 rounded" onClick={activePanelSwitcher} dangerouslySetInnerHTML={{ __html: activePanel === "view" ? "Edit&nbsp;&nbsp;<i class=\"fa-solid fa-pen-to-square\"/>" : "View&nbsp;&nbsp;<i class=\"fa-solid fa-eye\"/>" }} />
                            </div>
                            <div className="ham" ref={ham} onClick={toggleMobileMenu}>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </header>
                    <div className="mobile-menu absolute bg-dark top-full w-screen left-0 z-40 flex flex-col gap-5" ref={mobileMenu}>
                        <span className="head text-3xl text-white">Tools</span>
                        <div className="tools flex flex-wrap gap-x-1">
                            <Toolbar insertText={insertText} />
                        </div>
                        <span className="options text-3xl text-white">Options</span>
                        <div className="options flex flex-wrap gap-5 items-end">
                            <div className="style flex flex-col">
                                <label htmlFor="style" className="text-white">Choose Style</label>
                                <Select name="style" setState={setSelectedTheme}>
                                    {
                                        Object.keys(themes).map((theme, index) => {
                                            return (
                                                <option value={theme} key={index}>{theme}</option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>
                            <div className="font-options flex flex-col">
                                <label htmlFor="fonts" className="text-white">Choose Font</label>
                                <Select name="fonts" setState={setSelectedFont}>
                                    {
                                        fonts.map((value, index) => {
                                            return (
                                                <option key={index} value={JSON.stringify(value)}>
                                                    {value.family}
                                                </option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>
                            <div className="view-edit rounded">
                                <button type="button" className="text-white bg-black px-3 py-2 rounded" onClick={activePanelSwitcher} dangerouslySetInnerHTML={{ __html: activePanel === "view" ? "Edit&nbsp;&nbsp;<i class=\"fa-solid fa-pen-to-square\"/>" : "View&nbsp;&nbsp;<i class=\"fa-solid fa-eye\"/>" }} />
                            </div>
                            <div className="download">
                                {
                                    activePanel === "view" &&
                                    <button type="button" className="text-white rounded px-5 py-3  click active:text-black" onClick={downloadPdf}>Download <i className="fa-solid fa-download" /></button>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Header End*/}
                {/* Main Section */}
                <main className="w-screen flex items-start relative">
                    {/*  Editor  */}
                    <section ref={editorPanel} className={`editor-area w-1/2 h-full no-print overflow-y-scroll relative`} id="editor">
                        <textarea name="editor" id="editor" ref={editorArea} className="w-full h-full overflow-y-scroll outline-0 p-5 resize-none" defaultValue={text} onKeyDown={handleTab} onChange={(e) => {
                            setText(e.target.value)
                        }} />
                    </section>
                    {/*  Editor End  */}
                    {/*  Preview  */}
                    <section ref={previewPanel} style={{ backgroundColor: themeColors[selectedTheme] }} className={`preview w-1/2 h-full overflow-scroll relative`} id="preview">
                        <div style={{ fontFamily: selectedFont.family }} className="preview-span h-max" id="previewSpan" ref={previewSpan} dangerouslySetInnerHTML={{ __html: preview }} />
                    </section>
                    {/*  Preview End  */}
                    {
                        activePanel === "edit" &&
                        <div className="content-details no-print fixed bottom-0 left-0 py-1 px-2 bg-black text-white flex items-center justify-between">
                            <div className="left flex items-center gap-x-5">
                                <div className="word-count">
                                    <span className="title">Words: </span>
                                    <span className="value">{words}</span>
                                </div>
                                <div className="char-count">
                                    <span className="title">Characters: </span>
                                    <span className="value">{chars}</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="save-details">
                                    {
                                        saveLoader &&
                                        <>
                                            <div className="save-loader flex items-center gap-x-2">
                                                <span>Saving</span>
                                                <img src="/assets/editor/vrs_loader.svg" className="h-5" alt="Loading..." />
                                            </div>
                                        </>
                                    }
                                    {
                                        unsaved && !saveLoader &&
                                        <>
                                            <div className="unsaved-content flex items-center gap-x-2">
                                                <span className="blob h-2 aspect-square rounded-full bg-amber-300" />
                                                <span className="title">Unsaved Changes</span>
                                            </div>
                                        </>
                                    }
                                    {
                                        !unsaved && !saveLoader &&
                                        <>
                                            <div className="saved-content flex items-center gap-x-2">
                                                <span className="blob h-2 aspect-square rounded-full bg-green-400" />
                                                <span className="title">All Changes Saved</span>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    <span title="Back to the Top!" onClick={previewScrollTop} className="fixed right-5 aspect-square text-white bottom-14 px-5 py-3 grid place-items-center rounded bg-black cursor-pointer no-print"><i className="fa-solid fa-arrow-up" /></span>
                </main>
                {/* Main Section End*/}
            </section>
        </>
    )
}