import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { keypoints } from "../data/keypoints";
import { KeyPoint } from "../components/KeyPoint";

export const Home = () => {

    return (
        <>
            {/*Header*/}
            <Navbar />
            {/*Header End*/}
            <div className="home relative lg:px-0 px-5" id="home">
                {/* Hero Section */}
                <div className="hero h-screen flex items-center" id="hero">
                    <div className="text-content md:w-[50%] flex flex-col gap-5">
                        <span className="mini-title border border-versa-two text-14-grad w-max py-2 px-4 rounded-[20px] logo-font">Versa</span>
                        <span className="title text-5xl font-semibold">The Ultimate Markdown to PDF Generator</span>
                        <span className="subtitle text-gray-600">Transform your ideas into Stunning Document with Ease...</span>
                        <div className="cta-wrapper py-3 px-1 bg-normal-gradient w-max rounded-xl">
                            <Link to="/editor" className="py-2 px-4 w-max rounded-lg bg-white">Start Creating</Link>
                        </div>
                    </div>
                </div>
                {/* Hero Section End */}
                {/* Key Points */}
                <div className="key-points flex items-center justify-center gap-y-10 flex-wrap">
                    {
                        keypoints.map((value, index) => {
                            return (
                                <KeyPoint data={value} key={index}/>
                            )
                        })
                    }
                </div>
                {/* Key Points End */}
            </div>
        </>
    )
}