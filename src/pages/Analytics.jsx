import Header from "../components/Header";
import Footer from "../components/Footer";
import analysis1 from "../assets/analysis/analysis1.png";
import analysis2 from "../assets/analysis/analysis2.png";
import analysis3 from "../assets/analysis/analysis3.png";

const Analytics = () => {
    return (
        <>
            <Header />

            <main className="content-page fade-in">
                <h1>Team Analytics</h1>

                <section className="analysis-section">
                    <div className="analysis-item">
                        <img src={analysis1} alt="Skills Analysis" />
                        <p>Analysis of personal informations across all six members.</p>
                    </div>

                    <div className="analysis-item">
                        <img src={analysis2} alt="Experience Comparison" />
                        <p>Comparison of Town Distribution.</p>
                    </div>

                    <div className="analysis-item">
                        <img src={analysis3} alt="Technology Focus" />
                        <p>Age Analysis of the team members.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Analytics;
