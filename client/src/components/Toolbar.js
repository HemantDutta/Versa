export const Toolbar = ({insertText}) => {
    return(
        <>
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
            <span title="Insert Image" onClick={() => {
                insertText("img")
            }} className="cursor-pointer user-select-none p-2 aspect-square text-white font-bold text-xl hover:bg-gray-700 rounded active:bg-white active:text-black"><i className="fa-solid fa-image"/></span>
        </>
    )
}