import {Navbar} from "../components/Navbar";
import {graceParser} from "../utils/graceParser";
import {IFrame} from "../components/IFrame";

export const Home = () => {

    const text = graceParser("");

    return(
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="home" id="home">
                <IFrame>
                    <div dangerouslySetInnerHTML={{__html: text}}/>
                </IFrame>
            </div>
        </>
    )
}