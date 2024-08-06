import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { keypoints } from "../data/keypoints";
import { KeyPoint } from "../components/KeyPoint";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect, useRef, useState} from "react";
import "../styles/Home.css";

export const Home = () => {

    //refs
    const newDesImg = useRef(null);

    //states
    const [counter, setCounter] = useState(1);

    //Register Plugin
    gsap.registerPlugin(ScrollTrigger);

    //Key Points Animation
    useEffect(() => {
        gsap.from(".key-point-wrapper", {
            yPercent: 100,
            stagger: 0.2,
            duration: 0.6,
            scrollTrigger: {
                trigger: ".key-points"
            }
        })
    }, [])

    //Image Changer for New Design Image
    function imageChanger() {
        if(counter >= 5) {
            setCounter(1);
        }
        else {
            setCounter(prevState => prevState + 1);
        }
    }

    return (
        <>
            {/*Header*/}
            <Navbar />
            {/*Header End*/}
            <div className="home relative lg:px-0 px-5" id="home">
                {/* Hero Section */}
                <div className="hero h-screen flex items-center flex-col-reverse md:flex-row" id="hero">
                    <div className="text-content md:w-[50%] flex flex-col gap-5 relative z-50">
                        <span className="mini-title border border-versa-two text-14-grad w-max py-2 px-4 rounded-[20px] logo-font">Versa</span>
                        <span className="title lg:text-7xl md:text-3xl font-semibold">The Ultimate Markdown to PDF Generator</span>
                        <span className="subtitle lg:text-xl text-gray-600">Transform your ideas into Stunning Document with Ease...</span>
                        <div className="cta-wrapper py-3 px-1 bg-normal-gradient w-max rounded-xl">
                            <Link to="/editor" className="py-2 px-4 w-max rounded-lg bg-white">Start Creating</Link>
                        </div>
                    </div>
                    <div className="featured-image-section relative md:w-[50%] w-full grid place-items-center h-full z-40">
                        <div className="edge-overlay absolute h-full w-full"/>
                        <div className="gradient-bubble absolute inset-0 m-auto"/>
                        <div className="old-design-ew absolute inset-0 m-auto -translate-x-[30%] translate-y-[15%] p-1 -rotate-2 h-[500px] w-[350px]">
                            <img src="/assets/home/vs_old_1.png" alt="Old Design Yuck" className="h-full w-full rounded-lg overflow-hidden shadow-lg border border-gray-200"/>
                        </div>
                        <div className="new-design-oh-yeah absolute inset-0 m-auto translate-x-[30%] -translate-y-[15%] rotate-3 h-[500px] w-[350px] cursor-pointer transition active:scale-95" onClick={imageChanger}>
                            <img ref={newDesImg} src={`/assets/home/vs_new_${counter}.png`} alt="New Design Oh Yeah" className="h-full w-full rounded-lg overflow-hidden shadow-lg border border-gray-200"/>
                        </div>
                    </div>
                </div>
                {/* Hero Section End */}
                {/* Key Points */}
                <div className="key-points mt-10 flex items-center justify-center gap-y-10 flex-wrap">
                    {
                        keypoints.map((value, index) => {
                            return (
                                <KeyPoint data={value} key={index} />
                            )
                        })
                    }
                </div>
                {/* Key Points End */}
                {/* Features */}
                <div className="features-section mt-20">
                    <div className="features-header flex flex-col gap-3 ">
                        <span className="smol-title border border-versa-two text-14-grad w-max py-2 px-4 rounded-[20px] logo-font">What Versa Offers</span>
                    </div>
                    <div className="features-flex">
                        
                    </div>
                </div>
                {/* Features End */}
            </div>
        </>
    )
}