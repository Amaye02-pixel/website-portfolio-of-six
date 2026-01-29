import Header from "../components/Header";
import Footer from "../components/Footer";

const DigitalSecurity = () => (
    <>
        <Header />

        <main className="content-page fade-in">
            <h1>Digital Security</h1>

            <section className="content-section">
                <h2>What is Digital Security?</h2>
                <p>
                    Digital Security focuses on protecting systems, networks, and data
                    from cyber threats, unauthorized access, and digital attacks.
                </p>
            </section>

            <section className="content-section">
                <h2>Key Threats</h2>
                <ul>
                    <li>Malware & ransomware</li>
                    <li>Phishing attacks</li>
                    <li>Data breaches</li>
                    <li>Unauthorized access</li>
                </ul>
            </section>

            <section className="content-section">
                <h2>Importance</h2>
                <p>
                    Strong digital security ensures data privacy, protects user trust,
                    and supports safe digital transformation.
                </p>
            </section>
        </main>

        <Footer />
    </>
);

export default DigitalSecurity;
