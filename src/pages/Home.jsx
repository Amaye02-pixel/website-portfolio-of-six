import members from "../data/members";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project1Video from "../assets/projects/project1.mp4";
import project1Img from "../assets/projects/Hawk - 1.png";
import project2Video from "../assets/projects/project2.mp4";
import project2Img from "../assets/projects/project2.png";

const Home = () => {
    return (
        <>
            <Header />

            <section className="home fade-in">
                <h1>Meet Our Team</h1>
                <p className="subtitle">
                    A multidisciplinary team focused on Security, Blockchain & AI
                </p>

                <div className="member-grid">
                    {members.map((m, index) => (
                        <Link to={`/portfolio/${m.id}`} key={m.id}>
                            <div
                                className="member-card card-animate"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img src={m.image} alt={m.name} />
                                <div className="member-info">
                                    <h3>{m.name}</h3>
                                    <p>{m.role}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ marginTop: "4rem", textAlign: "center" }}>
                <h1>Our Focus Areas</h1>

                <div className="member-grid">
                    <Link to="/digital-security" className="member-card">
                        <div className="member-info">
                            <h3>Digital Security</h3>
                            <p>Protecting systems & data</p>
                        </div>
                    </Link>

                    <Link to="/blockchain" className="member-card">
                        <div className="member-info">
                            <h3>Blockchain</h3>
                            <p>Decentralized & transparent</p>
                        </div>
                    </Link>

                    <Link to="/ai" className="member-card">
                        <div className="member-info">
                            <h3>Artificial Intelligence</h3>
                            <p>Smart & automated systems</p>
                        </div>
                    </Link>
                </div>
            </section >

            <section className="projects-section fade-in">
                <h1>Our Projects</h1>

                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <h3>How to set up before coding- Screen recording tutorial</h3>

                        <video controls muted>
                            <source src={project1Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <p>
                            This is a tutorial video demonstrating the essential steps to set up your environment before you start coding. It covers installing necessary software, configuring settings, and best practices to ensure a smooth coding experience.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <h3>Brand Logo Design</h3>

                        <img src={project1Img} alt="Brand Logo" />

                        <p>
                            A professional brand logo design created for a fictional company named "Hawk". The design incorporates modern aesthetics and symbolic elements to represent strength, agility, and innovation.
                        </p>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card">
                        <h3>Intro short video</h3>

                        <video controls muted>
                            <source src={project2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <p>
                            A short introductory video showcasing values.
                        </p>
                    </div>

                    {/* Project 4 */}
                    <div className="project-card">
                        <h3>Graphic Design</h3>

                        <img src={project2Img} alt="Graphic Design Project" />

                        <p>
                            A creative graphic design project that combines visual elements to convey a specific message or theme. This design highlights the use of color, typography, and imagery to create an impactful visual experience.
                        </p>
                    </div>

                </div>


            </section>



            <Footer />

        </>
    );
};

export default Home;
