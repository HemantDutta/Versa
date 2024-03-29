import axios from "axios";
import {useEffect, useRef, useState} from "react";
import '../styles/Editor.css';
import {Select} from "../components/Select";
import {versaParser} from "../utils/versaParser";
import {themes} from "../utils/themes";
import {tools} from "../utils/tools";

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
        setActivePanel("view");
        window.print();
    }

    //Call Download But Check if view is active or not
    useEffect(() => {

    }, [])

    //Call Fetch Google Fonts
    useEffect(() => {
        fetchGoogleFonts()
    }, [])

    //Call Font Face Setup on Change & Fetch Local Storage content
    useEffect(() => {
        if (first.current) {
            let temp = localStorage.getItem('editorContent') || '';
            if (!text) setText(temp);
            first.current = false;
        } else {
            setupFontFace()
        }
    }, [selectedFont])

    //Call Versa Parser
    useEffect(() => {
        setPreview(versaParser(text, selectedTheme));
    }, [text, selectedTheme])

    //Store editor content in localstorage before unload
    useEffect(() => {
        const unloadMethod = () => {
            localStorage.setItem('editorContent', editorArea.current.value);
        }
        const unloadInterval = setInterval(unloadMethod, 60000);
        window.addEventListener("beforeunload", unloadMethod, {capture: true});
        return () => {
            window.removeEventListener("beforeunload", unloadMethod);
            clearInterval(unloadInterval);
        };
    }, [])

    //Handle Preview Scroll Top
    function previewScrollTop() {
        previewSpan.current.scrollTop = 0;
        document.getElementById("preview").scrollTop = 0;
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

    //Reset Panels on Resize
    useEffect(() => {
        const resetPanel = () => {
            if(window.innerWidth > 991) {
                editorPanel.current.style.display = "initial";
                previewPanel.current.style.display = "initial";
            }
            else {
                if(activePanel === "edit") {
                    editorPanel.current.style.display = "initial";
                    previewPanel.current.style.display = "none";
                }
                else {
                    editorPanel.current.style.display = "none";
                    previewPanel.current.style.display = "initial";
                }
            }
        }

        window.addEventListener("resize", resetPanel);

        return ()=> window.removeEventListener("resize", resetPanel);
    }, [])

    return (
        <>
            <section className="editor flex flex-col">
                <nav className="no-print relative">
                    <header className="bg-dark relative p-3 flex gap-x-5 items-center justify-between z-50 no-print">
                        <div className="left flex items-center gap-x-5">
                            <span className="brand user-select-none cursor-pointer text-white font-bold text-4xl">Versa</span>
                            <div className="tools flex items-center gap-x-1 flex-wrap">
                                <span title="Insert Bold Text" onClick={() => {
                                    insertText("bold")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">B</span>
                                <span title="Insert Italic Text" onClick={() => {
                                    insertText("italic")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white italic active:text-black">I</span>
                                <del title="Insert Strike Through Text" onClick={() => {
                                    insertText("strike")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">ST
                                </del>
                                <span title="Insert Blockquote" onClick={() => {
                                    insertText("block")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">>_</span>
                                <span title="Insert Unordered List" onClick={() => {
                                    insertText("ul")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ul"/></span>
                                {/*<span title="Insert Ordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ol"/></span>*/}
                                <span title="Insert Code Block" onClick={() => {
                                    insertText("code")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"> {"</>"} </span>
                                <span title="Insert Highlight Text" onClick={() => {
                                    insertText("highlight")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">HL</span>
                                <span title="Insert Table" onClick={() => {
                                    insertText("table")
                                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-table"/></span>
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
                                    <button type="button" className="text-white rounded px-5 py-3  click active:text-black" onClick={downloadPdf}>Download <i className="fa-solid fa-download"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-options flex items-center gap-x-5">
                            <div className="view-edit rounded">
                                <button type="button" className="text-white bg-black px-3 py-2 rounded" onClick={activePanelSwitcher} dangerouslySetInnerHTML={{__html: activePanel === "view" ? "Edit&nbsp;&nbsp;<i class=\"fa-solid fa-pen-to-square\"/>" : "View&nbsp;&nbsp;<i class=\"fa-solid fa-eye\"/>"}}/>
                            </div>
                            <div className="ham" ref={ham} onClick={toggleMobileMenu}>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </header>
                    <div className="mobile-menu absolute bg-dark top-full w-screen left-0 z-40 flex flex-col gap-5" ref={mobileMenu}>
                        <span className="head text-3xl text-white">Tools</span>
                        <div className="tools flex flex-wrap gap-x-1">
                            <span title="Insert Bold Text" onClick={() => {
                                insertText("bold")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">B</span>
                            <span title="Insert Italic Text" onClick={() => {
                                insertText("italic")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white italic active:text-black">I</span>
                            <del title="Insert Strike Through Text" onClick={() => {
                                insertText("strike")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">ST
                            </del>
                            <span title="Insert Blockquote" onClick={() => {
                                insertText("block")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">>_</span>
                            <span title="Insert Unordered List" onClick={() => {
                                insertText("ul")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ul"/></span>
                            {/*<span title="Insert Ordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ol"/></span>*/}
                            <span title="Insert Code Block" onClick={() => {
                                insertText("code")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"> {"</>"} </span>
                            <span title="Insert Highlight Text" onClick={() => {
                                insertText("highlight")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">HL</span>
                            <span title="Insert Table" onClick={() => {
                                insertText("table")
                            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-table"/></span>
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
                            <div className="download">
                                <button type="button" className="text-white rounded px-5 py-3  click active:text-black" onClick={downloadPdf}>Download <i className="fa-solid fa-download"/></button>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="w-screen flex items-start relative">
                    {/*  Editor  */}
                    <section ref={editorPanel} className={`editor-area ${activePanel === "edit" ? "active" : ""} w-1/2 h-full no-print overflow-y-scroll`} id="editor">
                        <textarea name="editor" id="editor" ref={editorArea} className="w-full h-full overflow-y-scroll outline-0 p-5 resize-none" defaultValue={text} onKeyDown={handleTab} onChange={(e) => {
                            setText(e.target.value)
                        }}/>
                    </section>
                    {/*  Editor End  */}
                    {/*  Preview  */}
                    <section ref={previewPanel} className={`preview ${activePanel === "view" ? "active" : ""} w-1/2 h-full overflow-scroll relative`} id="preview">
                        <div style={{fontFamily: selectedFont.family}} className="preview-span h-max" id="previewSpan" ref={previewSpan} dangerouslySetInnerHTML={{__html: preview}}/>
                    </section>
                    {/*  Preview End  */}
                    <span title="Back to the Top!" onClick={previewScrollTop} className="fixed right-5 aspect-square text-white bottom-5 px-5 py-3 grid place-items-center rounded bg-black cursor-pointer no-print"><i className="fa-solid fa-arrow-up"/></span>
                </main>
            </section>
        </>
    )
}