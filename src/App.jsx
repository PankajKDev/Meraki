import Header from "./assets/components/Header/Header";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
