import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Navbar = () => {

    //Refs
    const bigMenuOverlay = useRef(null);

    //States
    const [bigMenuStatus, setBigMenuStatus] = useState(false);

    //Open Big Menu
    function bigMenuToggle() {
        bigMenuOverlay.current.style.display = "initial";
        setTimeout(() => {
            setBigMenuStatus(true);
        }, 0)
    }

    //Close Big Menu
    function closeBigMenu() {
        setBigMenuStatus(false);
        setTimeout(() => {
            bigMenuOverlay.current.style.display = "none";
        }, 600)
    }

    //Big Menu Animations
    useEffect(() => {
        const tl = gsap.timeline();

        if (bigMenuStatus) {
            tl
                .to(".main-link-anim", {
                    yPercent: -100,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power4.inOut"
                })
                .from(".top-stripe", {
                    width: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power4.inOut"
                }, 0)
                .from(".op-anim", {
                    opacity: 0,
                    stagger: 0.05,
                    ease: "bounce.in",
                })
        }
        else {
            tl
                .to(".main-link-anim", {
                    yPercent: 100,
                    duration: 0.2,
                    ease: "power4.inOut"
                })
        }
    }, [bigMenuStatus])

    return (
        <>
            <nav className="fixed top-0 left-0 w-screen p-5 z-[999]">
                <div className="navbar-container flex items-center justify-between gap-5">
                    <div className="logo-section">
                        <span className="text-4xl logo-font">Versa</span>
                    </div>
                    <div className="links-section flex items-center gap-10">
                        <Link to="/editor" className="hidden md:block">Editor</Link>
                        <Link to="/about" className="hidden md:block">About</Link>
                        <Link to="/contact" className="hidden md:block">Contact</Link>
                        <div className="ham-menu flex items-center gap-x-5 border border-versa-lightBorder px-2 py-1 cursor-pointer" onClick={bigMenuToggle}>
                            <span className="xxs:block hidden">Menu</span>
                            <div className="ham">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div ref={bigMenuOverlay} className={`big-menu-overlay ${bigMenuStatus ? "active" : ""} fixed h-screen w-screen top-0 left-0 z-[1000] bg-black`} onClick={bigMenuStatus ? closeBigMenu : null} />
            <div className={`big-menu ${bigMenuStatus ? "active" : ""} fixed right-0 top-0 h-full w-[85%] sm:w-[450px] z-[1001] bg-white px-5 sm:px-10 pb-10 pt-20`}>
                {/* Rising Bars */}
                <div className="rising-bar-1 absolute top-0 -left-[20px] w-[10px] bg-white"></div>
                <div className="rising-bar-2 absolute top-0 -left-[40px] w-[10px] bg-white"></div>
                {/* Rising Bars End */}
                {/* Background Blobs */}
                <div className="bg-blob absolute inset-0 m-auto w-[40%] h-[60%] rounded-full aspect-square" />
                {/* Background Blobs End */}
                {/* Close Button */}
                <div className="close-btn absolute top-5 right-5 flex items-center gap-x-5 border border-versa-lightBorder px-2 py-1 cursor-pointer bg-hover-gradient" onClick={closeBigMenu}>
                    <span>Close</span>
                    <i className="fa-solid fa-xmark" />
                </div>
                {/* Close Button End */}
                {/* Big Menu Content */}
                <div className="big-menu-content h-full w-full relative z-[1001] flex flex-col gap-5 items-start justify-between">
                    <div className="big-menu-list flex flex-col gap-10">
                        <div className="link-wrapper overflow-hidden">
                            <Link to="/" className="text-5xl main-link-anim block">Home</Link>
                        </div>
                        <div className="link-wrapper overflow-hidden">
                            <Link to="/editor" className="text-5xl main-link-anim block">Editor</Link>
                        </div>
                        <div className="link-wrapper overflow-hidden">
                            <Link to="/about" className="text-5xl main-link-anim block">About</Link>
                        </div>
                        <div className="link-wrapper overflow-hidden">
                            <Link to="/contact" className="text-5xl main-link-anim block">Contact</Link>
                        </div>
                    </div>
                    <div className="big-menu-bottom w-full flex flex-col gap-10">
                        <div className="github-item pt-2 relative flex items-center justify-between gap-2 flex-wrap">
                            <span className="top-stripe absolute top-0 left-0 w-full h-[1px] bg-black" />
                            <span className="text-sm op-anim">Drop a Star on Github</span>
                            <a href="https://github.com/HemantDutta/Versa" rel="noreferrer" target="_blank" className="op-anim flex items-center gap-2 border border-versa-lightBorder px-2 py-1 bg-hover-gradient">
                                <i className="fa-brands fa-github" />
                                <span>Github</span>
                            </a>
                        </div>
                        <div className="contact-item pt-2 relative flex items-center justify-between gap-2 flex-wrap">
                            <span className="top-stripe absolute top-0 left-0 w-full h-[1px] bg-black" />
                            <span className="text-sm op-anim">Developed By Hemant Dutta</span>
                            <div className="social-wrapper flex items-center gap-2 op-anim">
                                <a href="https://github.com/HemantDutta" rel="noreferrer" target="_blank" className="flex items-center gap-2 border border-versa-lightBorder px-2 py-1 bg-hover-gradient">
                                    <i className="fa-brands fa-github" />
                                </a>
                                <a href="https://www.linkedin.com/in/hemantduttahd" rel="noreferrer" target="_blank" className="flex items-center gap-2 border border-versa-lightBorder px-2 py-1 bg-hover-gradient">
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="https://twitter.com/hemantduttahd" rel="noreferrer" target="_blank" className="flex items-center gap-2 border border-versa-lightBorder px-2 py-1 bg-hover-gradient">
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Big Menu Content End */}
            </div>
        </>
    )
}