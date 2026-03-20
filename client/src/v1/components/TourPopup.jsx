export const TourPopup = ({index, travelFunc, tourLength, positioning, isActive, closeTour}) => {

    const tourData = [
        {
            title: "Toolbar",
            des: "Easily add tables, images, links, and more with our Toolbar. Perfect for users who aren't familiar with Markdown.",
        },
        {
            title: "Fonts",
            des: "Choose from over 1600 fonts to personalize your document's appearance and match your unique style.",
        },
        {
            title: "Themes",
            des: "Select from 25+ themes to give your document a cohesive and polished look with just one click.",
        },
        {
            title: "Download",
            des: "Download your document as a PDF or HTML/CSS. Get beautifully formatted outputs in seconds.",
        },
        {
            title: "Stats",
            des: "Keep track of your document's word and character count with our convenient Stats bar.",
        },
        {
            title: "Status",
            des: "See whether your changes are saved or not in real-time with the Status indicator.",
        },
    ]

    return (
        <>
            <div className={`tour-popup bg-white z-[9999] ${positioning} p-2 flex flex-col gap-1 w-[350px] border border-black shadow-lg ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <span className="title font-bold text-xl">{tourData[index]?.title}</span>
                <span className="des text-sm">{tourData[index]?.des}</span>
                <div className="next-button flex items-center gap-1 justify-between">
                    <span>{index + 1}/{tourLength}</span>
                    <div className="forward-backward flex items-center gap-2">
                        {
                            index > 0 &&
                            <button type="button" onClick={() => {
                                travelFunc(false)
                            }} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Prev</button>
                        }
                        {
                            index === tourLength - 1 &&
                            <button type="button" onClick={closeTour} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Close</button>
                        }
                        {
                            index < tourLength - 1 &&
                            <button type="button" onClick={() => {
                                travelFunc(true)
                            }} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Next</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}