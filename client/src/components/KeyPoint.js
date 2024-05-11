import { useRef } from "react";
import "../styles/KeyPoint.css";

export const KeyPoint = ({data, key}) => {

    //refs
    const fullDesc = useRef(null);

    //Full Description Loader (I am making this pointless shit at 2am, what am I doing with my life?)
    function fullDescLoader() {
        if(fullDesc.current.classList.contains("active")) {
            fullDesc.current.classList.remove("active");
        }
        else {
            fullDesc.current.classList.add("active");
        }
    }

    return (
        <div key={key} className="key-point-item overflow-hidden relative flex flex-col items-start justify-between gap-5 h-[250px] w-[100%] sm:min-w-[250px] sm:max-w-[25%] py-2 px-5 first:border-x border-r  border-versa-lightBorder">
            <span className="serial text-14-grad text-2xl w-max">0{data.serial}</span>
            <div className="key-bottom-content flex flex-col gap-2">
                <span className="title text-2xl">{data.title}</span>
                <span className="description text-gray-600 text-sm">{data.desc}</span>
                <button type="button" onClick={fullDescLoader} className="w-max load-big">Know More</button>
            </div>
            <div ref={fullDesc} onMouseLeave={fullDescLoader} className="full-desc py-2 px-5 absolute h-full w-full top-0 left-0">
                <span>{data.bigDesc}</span>
            </div>
        </div>
    )
}