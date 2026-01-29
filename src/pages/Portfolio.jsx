import { useParams } from "react-router-dom";
import members from "../data/members";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = () => {
    const { id } = useParams();
    const member = members.find((m) => m.id.toString() === id);

    if (!member) {
        return (
            <>
                <Header />
                <div className="portfolio">
                    <h2 style={{ textAlign: "center" }}>Member not found</h2>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <div className="portfolio fade-in">
                <img src={member.image} alt={member.name} />

                <h1>{member.name}</h1>
                <h3>{member.role}</h3>

                <p>{member.bio || member.about}</p>

                {/* Download CV */}
                {member.cv && (
                    <a href={member.cv} download className="cv-button">
                        Download CV
                    </a>
                )}

                {/* Skills (progress bars) */}
                {Array.isArray(member.skills) &&
                    typeof member.skills[0] === "object" && (
                        <div className="skill-bars">
                            {member.skills.map((skill, index) => (
                                <div key={index} className="skill-bar">
                                    <span>{skill.name}</span>
                                    <div className="bar">
                                        <div
                                            className="bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                {/* Tools */}
                {member.tools && (
                    <section style={{ marginTop: "2rem" }}>
                        <h3>Tools</h3>
                        <div className="skills">
                            {member.tools.map((tool, index) => (
                                <span key={index} className="skill">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {member.education && (
                    <section style={{ marginTop: "2rem" }}>
                        <h3>Education</h3>
                        {member.education.map((edu, index) => (
                            <p key={index}>{edu}</p>
                        ))}
                    </section>
                )}

                {/* Experience */}
                {member.experience && (
                    <section style={{ marginTop: "2rem" }}>
                        <h3>Experience</h3>
                        {member.experience.map((exp, index) => (
                            <p key={index}>{exp}</p>
                        ))}
                    </section>
                )}

                {/* Links */}
                {member.links && (
                    <section style={{ marginTop: "2rem" }}>
                        <h3>Links</h3>
                        <p>
                            {member.links.github && (
                                <a href={member.links.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            )}
                            {member.links.linkedin && " | "}
                            {member.links.linkedin && (
                                <a
                                    href={member.links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            )}
                            {member.links.website && " | "}
                            {member.links.website && (
                                <a
                                    href={member.links.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Website
                                </a>
                            )}
                        </p>
                    </section>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Portfolio;
