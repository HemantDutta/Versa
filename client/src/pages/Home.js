import { Navbar } from "../components/Navbar";
import { PreLoader } from "../components/PreLoader";

export const Home = () => {

    return (
        <>
            {/* PreLoader */}
            <PreLoader/>
            {/* PreLoader End */}
            {/*Header*/}
            <Navbar />
            {/*Header End*/}
            <div className="home" id="home">

            </div>
        </>
    )
}