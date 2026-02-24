import { useRef } from "react";
import "../styles/KeyPoint.css";

export const KeyPoint = ({ data }) => {

    //Full Description Loader (I am making this pointless shit at 2am, what am I doing with my life?)
    function fullDescLoader() {
        let fullDesc = document.getElementById(`full-desc-${data.serial}`)
        fullDesc.classList.add("active");
    }

    function closefullDesc() {
        let fullDesc = document.getElementById(`full-desc-${data.serial}`)
        fullDesc.classList.remove("active");
    }

    return (
        <div className="key-point-item overflow-hidden relative h-[250px] w-[100%] sm:min-w-[250px] sm:max-w-[50%] xl:max-w-[25%] border-x sm:first:border-x sm:border-r sm:border-x-0  border-versa-lightBorder">
            <div className="key-point-wrapper flex flex-col items-start h-full justify-between gap-5 py-2 px-5">
                <span className="serial text-14-grad text-2xl w-max">0{data.serial}</span>
                <div className="key-bottom-content flex flex-col gap-2">
                    <span className="title text-2xl">{data.title}</span>
                    <span className="description text-gray-600 text-sm">{data.desc}</span>
                    <button type="button" onClick={fullDescLoader} className="w-max load-big">Know More</button>
                </div>
                <div id={`full-desc-${data.serial}`} onMouseLeave={closefullDesc} className="full-desc py-2 px-5 absolute h-full w-full top-0 left-0 flex flex-col gap-5">
                    <span>{data.bigDesc}</span>
                    <span className="sm:hidden block underline underline-offset-2" onClick={closefullDesc}>Close</span>
                </div>
            </div>
        </div>
    )
}