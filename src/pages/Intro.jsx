import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import introVideo from "../assets/video/intro.mp4";

const Intro = () => {
    const navigate = useNavigate();
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // start fade out slightly before redirect
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 5500);

        // navigate to home
        const navTimer = setTimeout(() => {
            navigate("/home");
        }, 6000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(navTimer);
        };
    }, [navigate]);

    return (
        <div className={`intro ${fade ? "fade-out" : ""}`}>
            <video
                className="intro-video"
                src={introVideo}
                autoPlay
                muted
                playsInline
                preload="auto"
            />

            {/* Optional Skip Button */}
            <button
                onClick={() => navigate("/home")}
                style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "30px",
                    padding: "8px 16px",
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                }}
            >
                Skip Intro
            </button>
        </div>
    );
};

export default Intro;
