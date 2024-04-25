import { useEffect, useRef } from 'react';
import '../styles/PreLoader.css';
import gsap from 'gsap';

export const PreLoader = () => {

    //Refs
    const overlayLayer = useRef(null);

    //Animations

    //Overlay Animation
    useEffect(() => {
        gsap.from(overlayLayer.current, {
            height: 0,
            duration: 4,
        })
    }, [])

    return (
        <>
            <div className="preloader relative">
                <div className="bg-layer w-screen h-screen absolute top-0 left-0"></div>
                <div ref={overlayLayer} className="overlay-layer w-screen h-screen absolute grid place-items-center overflow-hidden">
                    <span className="main-text text-white text-4xl">Versa</span>
                </div>
            </div>
        </>
    )
}