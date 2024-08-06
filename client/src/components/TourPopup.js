export const TourPopup = ({index, travelFunc, tourLength, positioning, isActive, closeTour}) => {
    return(
        <>
            <div className={`tour-popup bg-white z-[9999] ${positioning} p-2 flex flex-col gap-1 w-[350px] border border-black shadow-lg ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <span className="title font-bold text-xl">Toolbar</span>
                <span className="des text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur dignissimos dolores iure voluptatum? Dolorum eaque expedita laudantium omnis voluptate!</span>
                <div className="next-button flex items-center gap-1 justify-between">
                    <span>{index + 1}/{tourLength}</span>
                    <div className="forward-backward flex items-center gap-2">
                        {
                            index > 0 &&
                            <button type="button" onClick={()=>{travelFunc(false)}} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Prev</button>
                        }
                        {
                            index === tourLength - 1 &&
                            <button type="button" onClick={closeTour} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Close</button>
                        }
                        {
                            index < tourLength - 1 &&
                            <button type="button" onClick={()=>{travelFunc(true)}} className="border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient">Next</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}