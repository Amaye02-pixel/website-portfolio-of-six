import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AI from "./pages/AI";
import DigitalSecurity from "./pages/DigitalSecurity";
import Blockchain from "./pages/Blockchain";
import Applications from "./pages/Applications";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/digital-security" element={<DigitalSecurity />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
