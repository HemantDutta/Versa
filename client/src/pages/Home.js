import {Navbar} from "../components/Navbar";
import {versaParser} from "../utils/versaParser";
import {IFrame} from "../components/IFrame";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {useRef} from "react";

export const Home = () => {

    const text = versaParser("");

    const htmlRef = useRef(null);

    async function tempGen() {
        const canvas = await html2canvas(htmlRef.current);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4"
        });

        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("gracePDF.pdf");
    }

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="home" id="home">
                <IFrame>
                    <div ref={htmlRef} dangerouslySetInnerHTML={{__html: text}}/>
                </IFrame>
                <button type="button" onClick={tempGen}>Save PDF</button>
                <button type="button" onClick={window.print}>print</button>
            </div>
        </>
    )
}