import { useRef } from "react";
import "../styles/KeyPoint.css";

export const KeyPoint = ({data}) => {

    //Full Description Loader (I am making this pointless shit at 2am, what am I doing with my life?)
    function fullDescLoader() {
        let fullDesc = document.getElementById(`full-desc-${data.serial}`)
        console.log(data.serial)
        if(fullDesc.classList.contains("active")) {
            fullDesc.classList.remove("active");
        }
        else {
            fullDesc.classList.add("active");
        }
    }

    return (
        <div className="key-point-item overflow-hidden relative flex flex-col items-start justify-between gap-5 h-[250px] w-[100%] sm:min-w-[250px] sm:max-w-[25%] py-2 px-5 border-x sm:first:border-x sm:border-r  border-versa-lightBorder">
            <span className="serial text-14-grad text-2xl w-max">0{data.serial}</span>
            <div className="key-bottom-content flex flex-col gap-2">
                <span className="title text-2xl">{data.title}</span>
                <span className="description text-gray-600 text-sm">{data.desc}</span>
                <button type="button" onClick={fullDescLoader} className="w-max load-big">Know More</button>
            </div>
            <div id={`full-desc-${data.serial}`} onMouseLeave={fullDescLoader} className="full-desc py-2 px-5 absolute h-full w-full top-0 left-0 flex flex-col gap-5">
                <span>{data.bigDesc}</span>
                <span className="sm:hidden block underline underline-offset-2" onClick={fullDescLoader}>Close</span>
            </div>
        </div>
    )
}