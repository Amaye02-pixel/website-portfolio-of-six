import Header from "../components/Header";
import Footer from "../components/Footer";

const Blockchain = () => (
    <>
        <Header />

        <main className="content-page fade-in">
            <h1>Blockchain Technology</h1>

            <section className="content-section">
                <h2>Overview</h2>
                <p>
                    Blockchain is a decentralized digital ledger that records transactions
                    securely across multiple computers, ensuring transparency and
                    immutability.
                </p>
            </section>

            <section className="content-section">
                <h2>Core Features</h2>
                <ul>
                    <li>Decentralization</li>
                    <li>Security through cryptography</li>
                    <li>Transparency and traceability</li>
                    <li>Smart contracts</li>
                </ul>
            </section>

            <section className="content-section">
                <h2>Real-World Use Cases</h2>
                <p>
                    Blockchain is used in digital payments, supply chain management,
                    digital identity verification, and decentralized finance (DeFi).
                </p>
            </section>
        </main>

        <Footer />
    </>
);


export default Blockchain;
