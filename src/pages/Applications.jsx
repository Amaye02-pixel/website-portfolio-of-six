import Header from "../components/Header";
import Footer from "../components/Footer";

const Applications = () => (
    <>
        <Header />

        <main className="content-page fade-in">
            <h1>Technology Applications</h1>

            <section className="content-section">
                <h2>Our Approach</h2>
                <p>
                    We integrate modern technologies to solve real-world problems by
                    combining innovation, security, and usability.
                </p>
            </section>

            <section className="content-section">
                <h2>Application Areas</h2>
                <ul>
                    <li>AI-powered decision support systems</li>
                    <li>Blockchain-based data integrity solutions</li>
                    <li>Secure digital platforms</li>
                    <li>Smart analytics dashboards</li>
                </ul>
            </section>
        </main>

        <Footer />
    </>
);

export default Applications;
