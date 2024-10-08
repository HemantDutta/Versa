import axios from "axios";
import {useEffect, useRef, useState} from "react";
import '../styles/Editor.css';
import {Select} from "../components/Select";
import {versaParser} from "../utils/versaParser";
import {themeColors, themes} from "../utils/themes";
import {tools} from "../utils/tools";
import {Toolbar} from "../components/Toolbar";
import {generateHTML} from "../utils/generateHTML";
import {useNavigate} from "react-router-dom";
import {TourPopup} from "../components/TourPopup";

export const Editor = () => {

    //Navigator
    const navigator = useNavigate();

    //Refs
    const first = useRef(true);
    const firstUpload = useRef(true);
    const ham = useRef(null);
    const mobileMenu = useRef(null);
    const previewSpan = useRef(null);
    const editorArea = useRef(null);
    const previewPanel = useRef(null);
    const editorPanel = useRef(null);
    const drageArea = useRef(null);
    const uploadCont = useRef(null);
    const uploadOverlay = useRef(null);
    const downloadDropDown = useRef(null);
    const downloadDropDownMobile = useRef(null);
    const htmlDownloadButton = useRef(null);
    const htmlDownloadButtonMobile = useRef(null);

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
    const [isDragging, setIsDragging] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);
    const [fileLoading, setFileLoading] = useState(false);
    const [fileStatus, setFileStatus] = useState("init");
    const [tempContent, setTempContent] = useState("");
    const [helpOpen, setHelpOpen] = useState(false);

    //Tour States
    const [toolbarPopup1, setToolBarPopup1] = useState(false);
    const [fontPopup2, setFontPopup2] = useState(false);
    const [themePopup3, setThemePopup3] = useState(false);
    const [downloadPopup4, setDownloadPopup4] = useState(false);
    const [statsPopup5, setStatsPopup5] = useState(false);
    const [statusPopup6, setStatusPopup6] = useState(false);
    const tourSetter = [setToolBarPopup1, setFontPopup2, setThemePopup3, setDownloadPopup4, setStatsPopup5, setStatusPopup6];
    const [index, setIndex] = useState(-1);
    const [tourOverlay, setTourOverlay] = useState(false);
    const [tourAvailable, setTourAvailable] = useState(true);

    // Tour Traveller
    function tourTraveller(next) {
        try {
            setTourAvailable(false);
            let currIndex = index;
            if (next) {
                currIndex++;
                if (currIndex === 0) {
                    setTourOverlay(true);
                    tourSetter[currIndex](true);
                    setIndex(currIndex);
                } else if (currIndex === tourSetter.length) {
                    setTourOverlay(false);
                    tourSetter[currIndex](false);
                    setIndex(-1);
                } else {
                    tourSetter[currIndex - 1](false);
                    tourSetter[currIndex](true);
                    setIndex(currIndex);
                }
            } else {
                tourSetter[currIndex - 1](true);
                tourSetter[currIndex](false);
                currIndex -= 1;
                setIndex(currIndex);
            }
        } catch (e) {
            console.log(e);
        }
    }

    //Close Tour
    function closeTour() {
        try {
            tourSetter.map(stateSetter => stateSetter(false));
            setIndex(-1);
            setTourOverlay(false);
            setTourAvailable(true);
        } catch (e) {
            console.log(e)
        }
    }

    //Fetch Google Fonts
    function fetchGoogleFonts() {
        try {
            axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONT_API}`)
                .then((res) => {
                    setFonts(res.data.items);
                })
                .catch(err => {
                    console.log("The following error occurred while fetching fonts: " + err);
                })
        } catch (err) {
            console.log("The following error occured while fetching fonts from Google Fonts API: " + err);
        }
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
            console.log("The following error occured while creating a new font face: " + err);
        }
    }

    //Toggle Mobile Menu
    function toggleMobileMenu() {
        try {
            if (ham.current.classList.contains("active")) {
                ham.current.classList.remove("active");
                mobileMenu.current.classList.remove("active");
            } else {
                ham.current.classList.add("active");
                mobileMenu.current.classList.add("active");
            }
        } catch (err) {
            console.log("The following error occurred while toggling mobile menu: " + err);
        }
    }

    //Close Mobile Menu on Resize
    useEffect(() => {
        const closeOnResize = () => {
            try {
                if (window.innerWidth > 1425) {
                    ham.current.classList.remove("active");
                    mobileMenu.current.classList.remove("active");
                }
            } catch (err) {
                console.log("The following error occurred while closing mobile menu on resize: " + err);
            }
        }

        window.addEventListener("resize", closeOnResize);

        return () => window.removeEventListener("resize", closeOnResize);
    }, [])

    //Close Mobile Menu on Click Away
    useEffect(() => {
        const closeOnClickAway = (e) => {
            try {
                if (mobileMenu.current.classList.contains("active")) {
                    if (!mobileMenu.current.contains(e.target) && !ham.current.contains(e.target)) {
                        ham.current.classList.remove("active");
                        mobileMenu.current.classList.remove("active");
                    }
                }
            } catch (err) {
                console.log("The following error occurred while closing mobile menu: " + err);
            }
        }

        window.addEventListener("click", closeOnClickAway);

        return () => window.removeEventListener("click", closeOnClickAway);
    }, [])

    //Handle Tab Press in TextArea
    const handleTab = (event) => {
        try {
            if (event.keyCode === 9) {
                event.preventDefault();
                const start = event.target.selectionStart;
                const end = event.target.selectionEnd;
                const text = event.target.value;
                event.target.value = text.substring(0, start) + '    ' + text.substring(end);
                event.target.selectionStart = event.target.selectionEnd = start + 4;
            }
        } catch (err) {
            console.log("The following error occured while handling tab press: " + err);
        }
    };

    //Download pdf
    function downloadPdf() {
        try {
            window.print();
        } catch (err) {
            console.log("The following error occured while printing PDF: " + err);
        }
    }

    //Call Fetch Google Fonts
    useEffect(() => {
        fetchGoogleFonts()
    }, [])

    //Call Font Face Setup on Change & Fetch Local Storage content & Set Active Panel at startup
    useEffect(() => {
        try {
            if (first.current) {
                activePanelStartup();
                let temp = localStorage.getItem('editorContent') || '\n' +
                    '# Elegant, Captivating, and Fun\n' +
                    '\n' +
                    '> Design Excellence at Your Fingertips\n' +
                    '\n' +
                    'Say goodbye to dull and lifeless PDFs. With Versa, transform your documents into beautiful, engaging pieces of art. Choose from a wide range of fonts and themes to match your style.\n' +
                    '\n' +
                    '| Features | Description | \n' +
                    '| Customizable Themes | Choose from 25+ beautiful themes to match your style. | \n' +
                    '| Rich Font Library | Access 1600+ fonts to ensure your document looks unique. | \n' +
                    '| Easy-to-Use | Intuitive interface that requires no design expertise |\n' +
                    '\n' +
                    '```` \n' +
                    '// Want to write code? No Problem\n' +
                    'function generateCodeSnippet(code) {\n' +
                    '    return awesomeCodeSnippet;\n' +
                    '}\n' +
                    ' ````\n' +
                    '\n' +
                    'Versa makes it easy to create stunning PDFs without any design experience. Focus on your content, and let Versa handle the design, ensuring your documents always make a lasting impression.';
                let tempTheme = localStorage.getItem('theme') || 'Classic';
                setPrevSaved(temp);
                setSelectedTheme(tempTheme);
                if (!text) setText(temp);
                first.current = false;
            } else {
                setupFontFace()
            }
        } catch (err) {
            console.log("The following error occured while performing startup activities: " + err);
        }
    }, [selectedFont])

    //Call Versa Parser
    useEffect(() => {
        try {
            setPreview(versaParser(text, selectedTheme));
            localStorage.setItem('theme', selectedTheme);
            verifySaveStatus();
            setWordCharCount();
        } catch (err) {
            console.log("The following error occured while updating preview: " + err);
        }
    }, [text, selectedTheme])

    //Store editor content in localstorage before unload
    useEffect(() => {
        const unloadMethod = () => {
            try {
                activateSaveLoader();
                localStorage.setItem('editorContent', editorArea.current.value);
                localStorage.setItem('theme', selectedTheme);
            } catch (err) {
                console.log("The following error occured while unloading data: " + err);
            }
        }
        const unloadInterval = setInterval(() => {
            try {
                unloadMethod();
                setPrevSaved(editorArea.current.value);
                verifySaveStatus();
            } catch (err) {
                console.log("The following error occured while unloading data: " + err);
            }
        }, 60000);
        window.addEventListener("beforeunload", unloadMethod, {capture: true});

        return () => {
            try {
                unloadMethod();
                window.removeEventListener("beforeunload", unloadMethod);
                clearInterval(unloadInterval);
            } catch (err) {
                console.log("The following error occured while unloading data: " + err);
            }
        };
    }, [])

    //Handle Preview Scroll Top
    function previewScrollTop() {
        document.getElementById("preview").scrollTop = 0;
        document.getElementById("editor").scrollTop = 0;
    }

    //Insert Stuff into Textarea
    function insertText(type) {
        try {
            const position = editorArea.current.selectionStart;

            const before = editorArea.current.value.substring(0, position);
            const after = editorArea.current.value.substring(position, editorArea.current.value.length);

            editorArea.current.value = before + tools[type] + after;
            setText(editorArea.current.value);
            editorArea.current.selectionStart = editorArea.current.selectionEnd = position + text.length;
        } catch (err) {
            console.log("The following error occured while inserting text through the toolbar: " + err);
        }
    }

    //Active Panel Switcher
    function activePanelSwitcher() {
        try {
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
        } catch (err) {
            console.log("The following error occurred while switching panels: " + err);
        }
    }

    //Reset Panels on Resize and Close Tour
    useEffect(() => {
        const resetPanel = () => {
            try {
                if (window.innerWidth > 991) {
                    setActivePanel("edit");
                    editorPanel.current.style.display = "initial";
                    previewPanel.current.style.display = "initial";
                } else {
                    activePanelStartup();
                }

                if (window.innerWidth <= 1425) {
                    closeTour();
                    setTourAvailable(false);
                } else {
                    setTourAvailable(true);
                }
            } catch (err) {
                console.log("The following error occurred while resetting panels: " + err);
            }
        }

        if (window.innerWidth <= 1425) {
            closeTour();
            setTourAvailable(false);
        } else {
            setTourAvailable(true);
        }

        window.addEventListener("resize", resetPanel);

        return () => window.removeEventListener("resize", resetPanel);
    }, [])

    //Active Panel Startup Setter
    function activePanelStartup() {
        try {
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
        } catch (err) {
            console.log("The following error occurred while setting up panels during Startup: " + err);
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
            if (e.ctrlKey && e.key === "d") {
                e.preventDefault();
                duplicateCurrentLine();
            }
        }

        const save = () => {
            try {
                activateSaveLoader();
                let currentContent = editorArea.current.value;
                setPrevSaved(currentContent);
                verifySaveStatus();
                localStorage.setItem('editorContent', currentContent);
            } catch (err) {
                console.log("The following error occurred while saving content: " + err);
            }
        }

        const duplicateCurrentLine = () => {
            try {
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
            } catch (err) {
                console.log("The following error occurred while duplicating current line: " + err);
            }
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
        try {
            let charLength = editorArea.current.value.length;
            setChars(charLength);

            let wordCount = editorArea.current.value.trim().split(/\s+/).filter(word => /\w+/.test(word)).length;
            setWords(wordCount);
        } catch (err) {
            console.log("The following error occurred while setting word and Character count: " + err);
        }
    }

    //Upload Section
    //Upload Pop-up toggle
    function uploadPopupToggle() {
        try {
            if (uploadCont.current.classList.contains("active") && fileStatus !== "process") {
                uploadCont.current.classList.remove("active");
                uploadOverlay.current.classList.remove("active");
                setTimeout(() => {
                    uploadCont.current.style.display = "none";
                    uploadOverlay.current.style.display = "none";
                }, 400)
            } else {
                uploadCont.current.style.display = "initial";
                uploadOverlay.current.style.display = "initial";
                setTimeout(() => {
                    uploadCont.current.classList.add("active");
                    uploadOverlay.current.classList.add("active");
                }, 0)
            }
        } catch (err) {
            console.log("The following error occurred while toggling popup window:" + err);
        }
    }

    //Upload Drag Enter Handler
    function uploadDragEnterHandle() {
        if (fileStatus !== "ready") {
            setIsDragging(true);
        }
    }

    //Upload Drag Leave Handler
    function uploadDragLeaveHandle() {
        if (fileStatus !== "ready") {
            setIsDragging(false);
        }
    }

    //Upload Drag Over Handler
    function uploadDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    //Upload Drop Handler
    function uploadDropHandle(e) {
        e.preventDefault();
        setIsDragging(false);
        if (fileStatus !== "ready") {
            setFileUpload(e.dataTransfer.files[0]);
        }
    }

    //Upload Input Handler
    function uploadInputHandler(e) {
        setFileUpload(e.target.files[0]);
    }

    //File Processor
    function fileProcessor() {
        try {
            if (fileUpload !== null) {
                setFileLoading(true);
                let nameCheck = fileUpload.name.slice(-3);
                let typeCheck = fileUpload.type;
                if (!nameCheck) {
                    setFileLoading(false);
                    return null;
                }
                ;
                if (nameCheck === ".md" || typeCheck === "text/plain") {
                    setFileStatus("process");
                    const fileReader = new FileReader();
                    fileReader.readAsText(fileUpload);
                    fileReader.addEventListener("load", () => {
                        if (!fileReader.result) {
                            setFileStatus("no_data");
                            setFileLoading(false);
                        } else {
                            setFileStatus("ready");
                            setFileLoading(false);
                            let tempFileContent = "\n\n" + fileReader.result;
                            setTempContent(tempFileContent);
                        }
                    })
                } else {
                    setFileLoading(false);
                    setFileStatus("wrong_format");
                }
            }
        } catch (err) {
            console.log("The following error occurred while processing the uploaded file: " + err);
        }
    }

    //Call File Processor
    useEffect(() => {
        if (firstUpload.current) {
            firstUpload.current = false;
        } else {
            fileProcessor();
        }
    }, [fileUpload])

    //On Upload Cancel
    function uploadCancel() {
        setFileLoading(false);
        setFileStatus("init");
        setFileUpload(null);
        setIsDragging(false);
        uploadPopupToggle();
    }

    //On Upload Submit
    function uploadSubmit() {
        setText(prev => prev + tempContent);
        setFileLoading(false);
        setFileStatus("init");
        setFileUpload(null);
        setIsDragging(false);
        uploadPopupToggle();
    }

    //Download as HTML function
    function downloadAsHTML() {
        let htmlContent = generateHTML(versaParser(text, selectedTheme));
        const blob = new Blob([htmlContent], {type: 'text/html'});
        const url = URL.createObjectURL(blob);
        htmlDownloadButton.current.href = url;
        htmlDownloadButton.current.click();
    }

    //I Know this is a lot of Redundant code, but I want to be done with this project and move ahead, so bare with me please....
    function downloadAsHTMLMobile() {
        let htmlContent = generateHTML(versaParser(text, selectedTheme));
        const blob = new Blob([htmlContent], {type: 'text/html'});
        const url = URL.createObjectURL(blob);
        htmlDownloadButtonMobile.current.href = url;
        htmlDownloadButtonMobile.current.click();
    }

    //Download Drop Down Toggle
    function openDownloadDropDown() {
        downloadDropDown.current.style.display = "flex";
        setTimeout(() => {
            downloadDropDown.current.classList.add("active");
        }, 0)
    }

    function closeDownloadDropDown() {
        downloadDropDown.current.classList.remove("active");
        setTimeout(() => {
            downloadDropDown.current.style.display = "none";
        }, 200)
    }

    function openDownloadMobile() {
        downloadDropDownMobile.current.style.display = "flex";
        setTimeout(() => {
            downloadDropDownMobile.current.classList.add("active");
        }, 0)
    }

    function closeDownloadMobile() {
        downloadDropDownMobile.current.classList.remove("active");
        setTimeout(() => {
            downloadDropDownMobile.current.style.display = "none";
        }, 200)
    }

    //Accordion Controls
    function accordionControls(e) {
        try {
            const header = e.target;
            const content = header.nextElementSibling;
            const icon = header.childNodes[1];

            if (content.classList.contains("max-h-0")) {
                content.classList.remove("max-h-0")
                content.classList.add("max-h-screen")
                icon.classList.add("rotate-180");
                header.classList.add("bg-gray-200");

                document.querySelectorAll(".faq-item-content").forEach(item => {
                    if (item !== content) {
                        item.classList.remove("max-h-screen");
                        item.classList.add("max-h-0");
                    }
                })
            } else {
                content.classList.remove("max-h-screen")
                content.classList.add("max-h-0")
                icon.classList.remove("rotate-180");
                header.classList.remove("bg-gray-200");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <section className="editor flex flex-col">
                {/* Tour Popup */}
                <TourPopup closeTour={closeTour} index={index} isActive={toolbarPopup1} travelFunc={tourTraveller} positioning={"fixed top-[11%] left-[9%]"} tourLength={tourSetter.length}/>
                {/*<div className="fixed inset-0 w-max h-max z-[99999999] m-auto bg-white p-1 flex flex-col gap-2 border border-black shadow-lg">*/}
                {/*    <button onClick={tourTraveller}>Start Tour</button>*/}
                {/*    /!*<div>Tour Overlay: {tourOverlay.toString()}</div>*!/*/}
                {/*    <div>Toolbar Popup 1: {toolbarPopup1.toString()}</div>*/}
                {/*    <div>Font Popup 2: {fontPopup2.toString()}</div>*/}
                {/*    <div>Theme Popup 3: {themePopup3.toString()}</div>*/}
                {/*    <div>Download Popup 4: {downloadPopup4.toString()}</div>*/}
                {/*    <div>Stats Popup 5: {statsPopup5.toString()}</div>*/}
                {/*    <div>Status Popup 6: {statusPopup6.toString()}</div>*/}
                {/*</div>*/}
                {/* Tour Popup End */}
                {/* FAQs Accordion */}
                {/* <div className="fixed top-0 left-0 h-screen w-screen bg-black z-[9999] opacity-45"/>
                <div className="accordion-popup bg-white fixed inset-0 m-auto max-w-[650px] max-h-[650px] overflow-y-scroll min-h-[100px] z-[10000] rounded p-5">
                    <div className="popup-title text-2xl font-semibold">Frequently Asked Questions</div>
                    <div className="faq-list mt-5">
                        <div className="faq-item flex flex-col">
                            <div className="faq-item-title border-b border-gray-100 p-2 text-md flex items-center justify-between cursor-pointer transition-all" onClick={accordionControls}>
                                <span className="text pointer-events-none">Why is my content overflowing while downloading as pdf?</span>
                                <i className="fa-solid fa-chevron-down transition-all duration-[600ms] pointer-events-none"/>
                            </div>
                            <div className="faq-item-content transition-all ease-in-out duration-[600ms] max-h-0 overflow-hidden">
                                <div className="content-inner-container p-2 flex flex-col gap-2 border">
                                    <span>lol</span>
                                    <span>lol</span>
                                    <span>lol</span>
                                    <span>lol</span>
                                    <span>lol</span>
                                    <span>lol</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* FAQs Accordion End */}
                {/* Upload Popup */}
                <div onClick={uploadPopupToggle} ref={uploadOverlay} className="upload-popup-overlay fixed top-0 left-0 h-screen w-screen bg-black"/>
                <div ref={uploadCont} className="upload-popup-container fixed p-2 rounded bg-white">
                    <div className="upload-popup">
                        <div className={`upload-content flex flex-col items-center py-5 gap-5 rounded ${isDragging ? "dragged" : ""}`} ref={drageArea} onDragOver={uploadDragOver} onDragEnter={uploadDragEnterHandle} onDragLeave={uploadDragLeaveHandle} onDrop={uploadDropHandle}>
                            {
                                fileStatus !== "process" && fileStatus !== "ready" &&
                                <>
                                    <span className="drag-text pointer-events-none text-center font-bold text-gray-400">Drag & Drop your file here...</span>
                                    <span className="or text-xl pointer-events-none text-gray-400">or</span>
                                    <div className="input-wrapper pointer-events-none w-max text-center">
                                        <div className="label-wrapper bg-gradient w-max rounded p-1">
                                            <label htmlFor="file-upload" className="rounded text-white cursor-pointer px-2 pointer-events-auto">Upload File Here</label>
                                        </div>
                                        <input type="file" id="file-upload" name="file-upload" className="hidden" onInput={uploadInputHandler} required/>
                                    </div>
                                </>
                            }
                            {
                                !fileLoading && fileStatus !== "ready" &&
                                <span className="file-msg text-sm pointer-events-none text-gray-400 text-center">Please upload a file in Markdown(.md) or Text(.txt) format.</span>
                            }
                            {
                                !fileLoading && fileStatus === "wrong_format" &&
                                <span className="file-msg text-sm pointer-events-none text-gray-400 text-center"><span className="text-red-500">Invalid File Uploaded: {fileUpload.name}.</span> <br/> Please upload a file in Markdown(.md) or Text(.txt) format.</span>
                            }
                            {
                                fileLoading && fileStatus === "process" &&
                                <div className="flex gap-2 flex-wrap">
                                    <img src="/assets/editor/vrs_loader.svg" className="h-5 bg-gradient rounded-full" alt="Loading..."/>
                                    <span className="file-msg text-sm pointer-events-none text-gray-400 text-center">Processing File: {fileUpload.name}</span>
                                </div>
                            }
                            {
                                !fileLoading && fileStatus === "no_data" &&
                                <span className="file-msg text-sm pointer-events-none text-gray-400 text-center">No data found in the file: {fileUpload.name}</span>
                            }
                            {
                                !fileLoading && fileStatus === "ready" &&
                                <div className="flex flex-col gap-4 items-center">
                                    <span className="file-msg text-sm pointer-events-none text-gray-400 text-center">File Ready for Upload: <span className="text-gradient font-bold">{fileUpload.name}</span></span>
                                    <div className="file-details flex flex-wrap gap-3">
                                        <span className="text-sm text-gray-400">Type: {fileUpload.type === "" ? "MarkDown" : "Text"}</span>
                                        <span className="text-sm text-gray-400">Size: {Math.round(fileUpload.size / 1024)} KB</span>
                                    </div>
                                    <div className="button-div flex gap-2 flex-wrap">
                                        <button type="button" onClick={uploadSubmit} className="bg-gradient px-4 py-1 rounded text-white">Submit</button>
                                        <button onClick={uploadCancel} type="button" className="bg-black px-4 py-1 rounded text-white">Cancel</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* Upload Popup End */}
                {/* Header */}
                <nav className="no-print relative">
                    <header className="relative p-3 flex gap-x-5 items-center justify-between no-print">
                        <div className="left flex items-center gap-x-5">
                            <span className="brand user-select-none cursor-pointer text-white font-bold text-4xl" onClick={() => {
                                navigator("/")
                            }}>Versa</span>
                            <div className="tools flex items-center gap-x-1 flex-wrap">
                                <Toolbar insertText={insertText} uploadPopupToggle={uploadPopupToggle}/>
                            </div>
                        </div>
                        <div className="right flex items-center gap-x-5">
                            <div className="font-options flex flex-col relative">
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
                                <TourPopup closeTour={closeTour} index={index} isActive={fontPopup2} travelFunc={tourTraveller} positioning={"absolute top-[130%] right-[0%]"} tourLength={tourSetter.length}/>
                            </div>
                            <div className="operations flex gap-x-5 items-end">
                                <div className="style flex flex-col relative">
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
                                    <TourPopup closeTour={closeTour} index={index} isActive={themePopup3} travelFunc={tourTraveller} positioning={"absolute top-[130%] right-[0%]"} tourLength={tourSetter.length}/>

                                </div>
                                <div className="options relative">
                                    <button type="button" onClick={openDownloadDropDown} className="text-black rounded px-5 py-3 bg-gradient click active:text-black">Download <i className="fa-solid fa-download"/></button>
                                    <div ref={downloadDropDown} onMouseLeave={closeDownloadDropDown} className="download-menu rounded shadow-sm shadow-gray-800 absolute top-[100%] right-0 p-5 w-max flex flex-col gap-5 bg-black items-end">
                                        <button type="button" className="py-2 px-2 text-14-grad font-semibold" onClick={downloadPdf}>Download as PDF</button>
                                        <button type="button" className="py-2 px-2 text-14-grad font-semibold" onClick={downloadAsHTML}>Download as HTML</button>
                                        <a href="#" ref={htmlDownloadButton} download="versa.html" className="py-2 px-2 text-14-grad font-semibold hidden"></a>
                                    </div>
                                    <TourPopup closeTour={closeTour} index={index} isActive={downloadPopup4} travelFunc={tourTraveller} positioning={"absolute top-[145%] right-[0%]"} tourLength={tourSetter.length}/>
                                </div>
                            </div>
                            <div className="mobile-options flex items-center gap-x-5">
                                <div className="view-edit bg-gradient rounded">
                                    <button type="button" className="text-white bg-black px-3 py-2 rounded" onClick={activePanelSwitcher} dangerouslySetInnerHTML={{__html: activePanel === "view" ? "Edit&nbsp;&nbsp;<i class=\"fa-solid fa-pen-to-square\"/>" : "View&nbsp;&nbsp;<i class=\"fa-solid fa-eye\"/>"}}/>
                                </div>
                                <div className="ham" ref={ham} onClick={toggleMobileMenu}>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="mobile-menu absolute bg-dark top-full w-screen left-0 z-40 flex flex-col gap-5" ref={mobileMenu}>
                        <span className="head text-3xl text-white">Tools</span>
                        <div className="tools flex flex-wrap gap-x-1">
                            <Toolbar insertText={insertText} uploadPopupToggle={uploadPopupToggle}/>
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
                            <div className="view-edit bg-gradient rounded">
                                <button type="button" className="text-white bg-black px-3 py-2 rounded" onClick={activePanelSwitcher} dangerouslySetInnerHTML={{__html: activePanel === "view" ? "Edit&nbsp;&nbsp;<i class=\"fa-solid fa-pen-to-square\"/>" : "View&nbsp;&nbsp;<i class=\"fa-solid fa-eye\"/>"}}/>
                            </div>
                            <div className="download relative">
                                {
                                    activePanel === "view" &&
                                    <button type="button" className="text-black rounded px-5 py-3  click active:text-black bg-gradient" onClick={openDownloadMobile}>Download <i className="fa-solid fa-download"/></button>
                                }
                                <div ref={downloadDropDownMobile} onMouseLeave={closeDownloadMobile} className="download-menu rounded shadow-sm shadow-gray-800 absolute bottom-[100%] left-0 editorDownload:-left-[50%] editorDownload:items-end p-5 w-max flex flex-col gap-5 bg-black items-start">
                                    <button type="button" className="py-2 px-2 text-14-grad font-semibold" onClick={downloadPdf}>Download as PDF</button>
                                    <button type="button" className="py-2 px-2 text-14-grad font-semibold" onClick={downloadAsHTMLMobile}>Download as HTML</button>
                                    <a href="#" ref={htmlDownloadButtonMobile} download="versa.html" className="py-2 px-2 text-14-grad font-semibold hidden"></a>
                                </div>
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
                        }}/>
                    </section>
                    {/*  Editor End  */}
                    {/*  Preview  */}
                    <section ref={previewPanel} style={{backgroundColor: themeColors[selectedTheme]}} className={`preview w-1/2 h-full overflow-y-scroll overflow-x-hidden relative`} id="preview">
                        <div style={{fontFamily: selectedFont.family}} className="preview-span h-max break-all" id="previewSpan" ref={previewSpan} dangerouslySetInnerHTML={{__html: preview}}/>
                    </section>
                    {/*  Preview End  */}
                    {
                        activePanel === "edit" &&
                        <div className="content-details no-print fixed bottom-0 left-0 py-1 px-2 bg-black flex items-center justify-between">
                            <div className="left flex items-center gap-x-5 relative">
                                <div className="word-count text-white">
                                    <span className="title">Words: </span>
                                    <span className="value">{words}</span>
                                </div>
                                <div className="char-count text-white">
                                    <span className="title">Characters: </span>
                                    <span className="value">{chars}</span>
                                </div>
                                <TourPopup closeTour={closeTour} index={index} isActive={statsPopup5} travelFunc={tourTraveller} positioning={"absolute bottom-[150%] left-[0%]"} tourLength={tourSetter.length}/>
                            </div>
                            <div className="right relative">
                                <TourPopup closeTour={closeTour} index={index} isActive={statusPopup6} travelFunc={tourTraveller} positioning={"absolute bottom-[150%] right-[0%]"} tourLength={tourSetter.length}/>
                                <div className="save-details text-white">
                                    {
                                        saveLoader &&
                                        <>
                                            <div className="save-loader flex items-center gap-x-2">
                                                <span>Saving</span>
                                                <img src="/assets/editor/vrs_loader.svg" className="h-5" alt="Loading..."/>
                                            </div>
                                        </>
                                    }
                                    {
                                        unsaved && !saveLoader &&
                                        <>
                                            <div className="unsaved-content flex items-center gap-x-2">
                                                <span className="blob h-2 aspect-square rounded-full bg-amber-300"/>
                                                <span className="title">Unsaved Changes</span>
                                            </div>
                                        </>
                                    }
                                    {
                                        !unsaved && !saveLoader &&
                                        <>
                                            <div className="saved-content flex items-center gap-x-2">
                                                <span className="blob h-2 aspect-square rounded-full bg-green-400"/>
                                                <span className="title">All Changes Saved</span>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    <div className="floating-options fixed right-5 bottom-14 z-50 no-print flex flex-col gap-6 items-center">
                        <div className={`relative px-5 py-3 rounded-full bg-white z-[100] cursor-pointer aspect-square grid place-items-center font-bold shadow-lg ${helpOpen ? "bg-normal-gradient" : ""}`} onClick={() => {
                            setHelpOpen(!helpOpen)
                        }}>
                            <span>{helpOpen ? <i className="fa-solid fa-xmark"/> : <i className="fa-solid fa-question"/>}</span>
                            <div className={`absolute top-0 left-0 bg-white rounded-full p-1 transition-smooth -z-10 shadow-lg grayscale ${helpOpen ? "pointer-events-auto opacity-100 -translate-y-[150%] rotate-0 group" : "-rotate-180 pointer-events-none opacity-0 -translate-y-[0%]"}`}>
                                <img src="/assets/editor/vs_faq.png" alt="FAQs"/>
                                <span className="absolute bg-normal-gradient p-2 font-normal w-max top-[50%] -translate-y-[50%] right-[110%] pr-7 right-message-box opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">View FAQs (Coming Soon)</span>
                            </div>
                            {
                                tourAvailable &&
                                <div onClick={tourTraveller} className={`absolute top-0 left-0 bg-white rounded-full p-2 transition-smooth -z-10 shadow-lg ${helpOpen ? "pointer-events-auto opacity-100 -translate-y-[300%] rotate-0 group" : "rotate-180 pointer-events-none opacity-0 -translate-y-[0%]"}`}>
                                    <img src="/assets/editor/vs_tour.png" alt="Take a tour"/>
                                    <span className="absolute bg-normal-gradient p-2 font-normal w-max top-[50%] -translate-y-[50%] right-[110%] pr-7 right-message-box opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">Take a tour of Versa</span>
                                </div>
                            }
                        </div>
                        <span title="Back to the Top!" onClick={previewScrollTop} className="aspect-square text-white border border-white px-5 py-3 grid place-items-center rounded bg-black cursor-pointer"><i className="fa-solid fa-arrow-up"/></span>
                    </div>
                </main>
                {/* Main Section End*/}
            </section>
        </>
    )
}