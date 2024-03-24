import axios from "axios";
import {useEffect, useRef, useState} from "react";

export const Editor = () => {

    //Refs
    const first = useRef(true);

    //States
    const [fonts, setFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState({});

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
            const fontName = selectedFont.family.replace(/\s+/g, '');
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

    return (
        <>
            <header className="bg-dark p-3 flex gap-x-5 items-center justify-between">
                <div className="left flex items-center gap-x-5">
                    <span className="brand user-select-none cursor-pointer text-white font-bold text-2xl">GracePDF</span>
                    <div className="tools flex items-center gap-x-5 flex-wrap">
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
                        <select name="fonts" id="fonts" className="bg-black text-white p-3"
                                onChange={(e) => {
                                    setSelectedFont(JSON.parse(e.target.value))
                                }}
                        >
                            {
                                fonts.map((value, index) => {
                                    return (
                                        <option key={index} value={JSON.stringify(value)} className="flex flex-col gap-2">
                                            {value.family}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="operations">
                        <div className="style flex flex-col">
                            <label htmlFor="style" className="text-white">Choose Style</label>
                            <select name="style" id="style" className="bg-black text-white p-3">

                            </select>
                        </div>
                    </div>
                </div>
            </header>
            {/*  Editor  */}
            {/*  Editor End  */}
            {/*  Preview  */}
            <span style={{fontFamily: selectedFont.family}}>Hello</span>
            {/*  Preview End  */}
        </>
    )
}