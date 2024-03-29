import axios from "axios";
import {useEffect, useRef, useState} from "react";
import '../styles/Editor.css';
import {Select} from "../components/Select";
import {versaParser} from "../utils/versaParser";
import {themes} from "../utils/themes";

export const Editor = () => {

    //Refs
    const first = useRef(true);
    const ham = useRef(null);
    const mobileMenu = useRef(null);
    const previewSpan = useRef(null);

    //States
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");
    const [fonts, setFonts] = useState([]);
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
    useEffect(()=>{
        const closeOnResize = () => {
            if(window.innerWidth > 1280) {
                ham.current.classList.remove("active");
                mobileMenu.current.classList.remove("active");
            }
        }

        window.addEventListener("resize", closeOnResize);

        return ()=> window.removeEventListener("resize", closeOnResize);
    },[])

    //Close Mobile Menu on Click Away
    useEffect(()=>{
        const closeOnClickAway = (e) => {
            if(mobileMenu.current.classList.contains("active")) {
                if(!mobileMenu.current.contains(e.target) && !ham.current.contains(e.target)) {
                    ham.current.classList.remove("active");
                    mobileMenu.current.classList.remove("active");
                }
            }
        }

        window.addEventListener("click", closeOnClickAway);

        return ()=> window.removeEventListener("click", closeOnClickAway);
    },[])

    //Handle Tab Press in TextArea
    const handleTab = (event) => {
        if (event.keyCode === 9) {
            event.preventDefault();
            const start = event.target.selectionStart;
            const end = event.target.selectionEnd;
            const text = event.target.value;
            const newText = text.substring(0, start) + '    ' + text.substring(end);
            event.target.value = newText;
            event.target.selectionStart = event.target.selectionEnd = start + 4;
        }
    };

    //Download pdf
    function downloadPdf() {
        console.log("called");
        window.print();
    }

    //Call Fetch Google Fonts
    useEffect(() => {
        fetchGoogleFonts()
    }, [])

    //Call Font Face Setup on Change
    useEffect(() => {
        if (first.current) {
            first.current = false;
        } else {
            setupFontFace()
        }
    }, [selectedFont])

    //Call Versa Parser
    useEffect(()=>{
        setPreview(versaParser(text, selectedTheme));
    },[text])

    return (
        <>
            <section className="editor flex flex-col overflow-y-hidden">
                <nav className="relative no-print">
                    <header className="bg-dark relative p-3 flex gap-x-5 items-center justify-between z-50 no-print">
                        <div className="left flex items-center gap-x-5">
                            <span className="brand user-select-none cursor-pointer text-white font-bold text-4xl">Versa</span>
                            <div className="tools flex items-center gap-x-1 flex-wrap">
                                <span title="Insert Bold Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">B</span>
                                <span title="Insert Italic Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white italic active:text-black">I</span>
                                <del title="Insert Strike Through Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">ST</del>
                                <span title="Insert Blockquote" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">>_</span>
                                <span title="Insert Unordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ul"/></span>
                                <span title="Insert Ordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ol"/></span>
                                <span title="Insert Code Block" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"> {"</>"} </span>
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
                        <div className="ham" ref={ham} onClick={toggleMobileMenu}>
                            <span></span><span></span><span></span>
                        </div>
                    </header>
                    <div className="mobile-menu absolute bg-dark top-full w-screen left-0 z-40 flex flex-col gap-5" ref={mobileMenu}>
                        <span className="head text-3xl text-white">Tools</span>
                        <div className="tools flex flex-wrap gap-x-1">
                            <span title="Insert Bold Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">B</span>
                            <span title="Insert Italic Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white italic active:text-black">I</span>
                            <del title="Insert Strike Through Text" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">ST</del>
                            <span title="Insert Blockquote" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">>_</span>
                            <span title="Insert Unordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ul"/></span>
                            <span title="Insert Ordered List" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ol"/></span>
                            <span title="Insert Code Block" className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"> {"</>"} </span>
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
                <main className="w-screen flex items-start">
                    {/*  Editor  */}
                    <section className="editor-area w-1/2 h-full no-print" id="editor">
                        <textarea name="editor" id="editor" className="w-full h-full outline-0 p-5 resize-none" onKeyDown={handleTab} onChange={(e)=>{setText(e.target.value)}}/>
                    </section>
                    {/*  Editor End  */}
                    {/*  Preview  */}
                    <section className="preview w-1/2 h-full overflow-y-scroll" id="preview">
                        <span style={{fontFamily: selectedFont.family}} className="preview-span" ref={previewSpan} dangerouslySetInnerHTML={{__html: preview}}/>
                    </section>
                    {/*  Preview End  */}
                </main>
            </section>
        </>
    )
}