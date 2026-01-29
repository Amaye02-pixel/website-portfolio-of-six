import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <header className="header">
            <h2>Six Portfolio</h2>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/digital-security">Security</Link>
                <Link to="/blockchain">Blockchain</Link>
                <Link to="/ai">AI</Link>
                <Link to="/applications">Applications</Link>
                <Link to="/analytics">Analytics</Link>

                <button
                    className="theme-toggle"
                    onClick={() => setDark(!dark)}
                    aria-label="Toggle theme"
                >
                    {dark ? "☀️" : "🌙"}
                </button>
            </nav>
        </header>
    );
};

export default Header;
