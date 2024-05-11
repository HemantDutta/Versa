import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <>
            {/*Header*/}
            <Navbar />
            {/*Header End*/}
            <div className="home relative" id="home">
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
                <div className="key-points">
                    <div className="key-point-item flex flex-col items-start justify-between gap-5 h-[250px] w-[350px] py-2 px-5 border-x border-versa-lightBorder">
                        <span className="serial text-14-grad text-2xl w-max">01</span>
                        <div className="key-bottom-content flex flex-col gap-2">
                            <span className="title text-2xl">0 Design Effort</span>
                            <span className="description text-gray-600 text-sm">Focus on your content! Let Versa take care of your designing needs!</span>
                            <button type="button" className="w-max load-big">Know More</button>
                        </div>
                    </div>
                </div>
                {/* Key Points End */}
            </div>
        </>
    )
}