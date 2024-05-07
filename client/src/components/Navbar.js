import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
    return (
        <>
            <nav className="relative p-5">
                <div className="navbar-container flex items-center justify-between gap-5">
                    <div className="logo-section">
                        <span className="text-4xl logo-font">Versa</span>
                    </div>
                    <div className="links-section">
                        <Link to="/editor">Editor</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}