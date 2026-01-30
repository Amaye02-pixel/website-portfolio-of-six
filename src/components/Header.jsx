import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <header className="header">
            <h2>Six Portfolio</h2>

            {/* Hamburger Icon */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation */}
            <nav className={menuOpen ? "open" : ""}>
                <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/digital-security" onClick={() => setMenuOpen(false)}>Security</Link>
                <Link to="/blockchain" onClick={() => setMenuOpen(false)}>Blockchain</Link>
                <Link to="/ai" onClick={() => setMenuOpen(false)}>AI</Link>
                <Link to="/analytics" onClick={() => setMenuOpen(false)}>Analytics</Link>

                <button
                    className="theme-toggle"
                    onClick={() => setDark(!dark)}
                >
                    {dark ? "☀️" : "🌙"}
                </button>
            </nav>
        </header>
    );
};

export default Header;
