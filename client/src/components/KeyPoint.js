import "../styles/KeyPoint.css";

export const KeyPoint = ({serial, title, desc, bigDesc}) => {
    return (
        <div className="key-point-item flex flex-col items-start justify-between gap-5 h-[250px] w-[350px] py-2 px-5 border-x border-versa-lightBorder">
            <span className="serial text-14-grad text-2xl w-max">0{serial}</span>
            <div className="key-bottom-content flex flex-col gap-2">
                <span className="title text-2xl">{title}</span>
                <span className="description text-gray-600 text-sm">{desc}</span>
                <button type="button" className="w-max">Know More</button>
            </div>
        </div>
    )
}