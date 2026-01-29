import members from "../data/members";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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


            <Footer />

        </>
    );
};

export default Home;
