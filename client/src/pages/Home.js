import {Navbar} from "../components/Navbar";
import {Link} from "react-router-dom";
import {keypoints} from "../data/keypoints";
import {KeyPoint} from "../components/KeyPoint";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect, useRef, useState} from "react";
import "../styles/Home.css";

export const Home = () => {

    //refs
    const newDesImg = useRef(null);
    const ftImgSrc = useRef(null);

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
        if (counter >= 5) {
            setCounter(1);
        } else {
            setCounter(prevState => prevState + 1);
        }
    }

    //Feature Image Routes
    const imgPath = {
        "fonts": "/assets/home/features/vs_ft_fonts.png",
        "auto-save": "/assets/home/features/vs_ft_save.png",
        "themes": "/assets/home/features/vs_ft_themes.png"
    }

    //Feature Accordion Switcher
    function featureAccordionSwitcher(e, ft) {
        try {
            let target = e.target;
            target.classList.add("item-open");
            ftImgSrc.current.src = imgPath[ft];
            let allAccordionItems = document.querySelectorAll(".feature-accordion-item");
            for (const item of allAccordionItems) {
                if (item !== target) {
                    item.classList.remove("item-open");
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="home relative lg:px-0 px-5" id="home">
                {/* Hero Section */}
                <div className="hero h-screen flex items-center flex-col-reverse md:flex-row" id="hero">
                    <div className="text-content h-[30%] md:h-auto md:w-[50%] flex flex-col gap-5 relative z-50">
                        <span className="mini-title border border-versa-two text-14-grad w-max py-2 px-4 rounded-[20px] logo-font">Versa</span>
                        <span className="title text-2xl lg:text-6xl md:text-3xl font-semibold">The Ultimate Markdown to PDF Generator</span>
                        <span className="subtitle lg:text-xl text-gray-600">Transform your ideas into Stunning Document with Ease...</span>
                        <div className="cta-wrapper py-3 px-1 bg-normal-gradient w-max rounded-xl">
                            <Link to="/editor" className="py-2 px-4 w-max rounded-lg bg-white">Start Creating</Link>
                        </div>
                    </div>
                    <div className="featured-image-section relative md:w-[50%] w-full grid place-items-center h-[60%] md:h-full z-40">
                        <div className="edge-overlay absolute h-full w-full"/>
                        <div className="gradient-bubble absolute inset-0 m-auto"/>
                        <div className="old-design-ew absolute inset-0 m-auto -translate-x-[30%] translate-y-[15%] p-1 -rotate-2 h-[300px] w-[215px] md:h-[428px] md:w-[300px]">
                            <img src="/assets/home/vs_old_1.png" alt="Old Design Yuck" className="h-full w-full rounded-lg overflow-hidden shadow-lg border border-gray-200"/>
                        </div>
                        <div className="new-design-oh-yeah absolute inset-0 m-auto translate-x-[30%] -translate-y-[15%] rotate-3 h-[300px] w-[215px] md:h-[428px] md:w-[300px] cursor-pointer transition active:scale-95" onClick={imageChanger}>
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
                                <KeyPoint data={value} key={index}/>
                            )
                        })
                    }
                </div>
                {/* Key Points End */}
                {/* features */}
                <div className="features-section mt-20">
                    <div className="features-header flex flex-col gap-3 ">
                        <span className="smol-title border border-versa-two text-14-grad w-max py-2 px-4 rounded-[20px] logo-font">What Versa Offers</span>
                    </div>
                    <div className="features-content-flex md:h-[80vh] flex items-center gap-4 md:flex-row flex-col-reverse mt-5">
                        <div className="feature-image-switcher h-[100%] flex-1 relative grid place-items-center">
                            <div className="edge-overlay absolute h-full w-full"/>
                            <div className="gradient-bubble absolute inset-0 m-auto"/>
                            <img ref={ftImgSrc} src="/assets/home/features/vs_ft_fonts.png" className="relative z-50 aspect-square" alt="Features"/>
                        </div>
                        <div className="feature-accordion flex-1 flex flex-col gap-4">
                            <span className="subtitle text-xl font-semibold text-versa-one">Features</span>
                            <span className="title text-2xl md:text-4xl font-semibold">Focus on the Content.</span>
                            <span className="title text-2xl md:text-4xl font-semibold">Let Versa Take Care of the Rest.</span>
                            <div className="feature-accordion-list flex flex-col gap-4 mt-5">
                                <div className="feature-accordion-item cursor-pointer item-open" onClick={(e) => {
                                    featureAccordionSwitcher(e, "fonts")
                                }}>
                                    <div className="accordion-header flex items-center gap-4 pointer-events-none">
                                        <i className="fa-solid fa-play"/>
                                        <span className="header-text text-2xl font-semibold">Endless Font Choices</span>
                                    </div>
                                    <div className="accordion-content py-5 pointer-events-none">
                                        <span className="text-lg">Explore a vast library of 1600+ fonts, regularly updated to keep your designs fresh and unique.</span>
                                    </div>
                                </div>
                                <div className="feature-accordion-item cursor-pointer" onClick={(e) => {
                                    featureAccordionSwitcher(e, "themes")
                                }}>
                                    <div className="accordion-header flex items-center gap-4 pointer-events-none">
                                        <i className="fa-solid fa-play"/>
                                        <span className="header-text text-2xl font-semibold">Versatile Themes</span>
                                    </div>
                                    <div className="accordion-content py-5 pointer-events-none">
                                        <span className="text-lg">Choose from 20+ themes to instantly style your documents, with new themes added frequently.</span>
                                    </div>
                                </div>
                                <div className="feature-accordion-item cursor-pointer" onClick={(e) => {
                                    featureAccordionSwitcher(e, "auto-save")
                                }}>
                                    <div className="accordion-header flex items-center gap-4 pointer-events-none">
                                        <i className="fa-solid fa-play"/>
                                        <span className="header-text text-2xl font-semibold">Auto-Save</span>
                                    </div>
                                    <div className="accordion-content py-5 pointer-events-none">
                                        <span className="text-lg">Never lose your work again. Your content is automatically saved in your browser's local storage, no login required.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* features End */}
                {/* Footer */}
                <footer className="mt-36 mb-5">
                    <div className="footer-container">
                        <div className="footer-top flex items-center justify-between gap-5 flex-wrap">
                            <div className="footer-links">
                                <div className="contact-link flex items-center gap-5">
                                    <span className="text-lg font-semibold">Contact Me</span>
                                    <a href="https://www.linkedin.com/in/hemantduttahd" rel="noreferrer" target="_blank" className="hover:text-gray-500">LinkedIn</a>
                                    <a href="https://github.com/HemantDutta" rel="noreferrer" target="_blank" className="hover:text-gray-500">Github</a>
                                    <a href="https://twitter.com/hemantduttahd" rel="noreferrer" target="_blank" className="hover:text-gray-500">Twitter</a>
                                </div>
                            </div>
                            <div className="footer-brand">
                                <span>&copy; Versa by Hemant Dutta</span>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer End */}
            </div>
        </>
    )
}