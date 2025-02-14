import Header from "./assets/components/Header/Header";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Footer from "./assets/components/Footer/Footer";
import Pomodoro from "./Pages/Pomodoro";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
