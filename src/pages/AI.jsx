import Header from "../components/Header";
import Footer from "../components/Footer";

const AI = () => {
    return (
        <>
            <Header />

            <main className="content-page fade-in">
                <h1>Artificial Intelligence</h1>

                <section className="content-section">
                    <h2>What is Artificial Intelligence?</h2>
                    <p>
                        Artificial Intelligence (AI) focuses on building systems that can
                        learn from data, recognize patterns, and make intelligent decisions
                        with minimal human intervention.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Key Areas of AI</h2>
                    <ul>
                        <li>Machine Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision</li>
                        <li>Predictive Analytics</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Why AI Matters</h2>
                    <p>
                        AI improves efficiency, reduces human error, and enables innovation
                        across industries such as healthcare, finance, education, and
                        cybersecurity.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default AI;
