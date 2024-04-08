import { useRef } from "react";

export const Toolbar = ({ insertText, uploadPopupToggle }) => {

    //Refs
    const moreDropDown = useRef(null);

    //More Tools Drop Down Toggle
    function openDropDown() {
        moreDropDown.current.style.display = "initial";
        setTimeout(() => {
            moreDropDown.current.classList.add("active");
        }, 0)
    }

    function closeDropDown() {
        moreDropDown.current.classList.remove("active");
        setTimeout(() => {
            moreDropDown.current.style.display = "none";
        }, 400)
    }

    return (
        <>
            <span title="Upload Markdown File" onClick={uploadPopupToggle} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-upload" /></span>
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
            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">&gt;_</span>
            <span title="Insert Unordered List" onClick={() => {
                insertText("ul")
            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-list-ul" /></span>
            <span title="Insert Code Block" onClick={() => {
                insertText("code")
            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"> {"</>"} </span>
            <span title="Insert Highlight Text" onClick={() => {
                insertText("highlight")
            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">HL</span>
            <div className="more-tools-wrapper relative" onMouseLeave={closeDropDown}>
                <span title="More" onMouseEnter={openDropDown} className="p-2 aspect-square user-select-none text-white font-bold text-xl cursor-pointer hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-chevron-down" /></span>
                <div ref={moreDropDown} className="tool-drop-down-container bg-gradient absolute top-full rounded p-1">
                    <div className="tool-drop-down flex flex-col p-2 rounded gap-2">
                        <span title="Insert Table" onClick={() => {
                            insertText("table")
                        }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-table" /></span>
                        <span title="Insert Image" onClick={() => {
                            insertText("img")
                        }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-image" /></span>
                        <span title="Insert Link" onClick={() => {
                            insertText("link")
                        }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-link"></i></span>
                        <span title="Insert Line Break" onClick={() => {
                            insertText("br")
                        }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">BR</span>
                    </div>
                </div>
            </div>
            <div className="tools-expanded flex items-center gap-x-1 flex-wrap">
                <span title="Insert Table" onClick={() => {
                    insertText("table")
                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-table" /></span>
                <span title="Insert Image" onClick={() => {
                    insertText("img")
                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-image" /></span>
                <span title="Insert Link" onClick={() => {
                    insertText("link")
                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-link"></i></span>
                <span title="Insert Line Break" onClick={() => {
                    insertText("br")
                }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black">BR</span>
            </div>
        </>
    )
}