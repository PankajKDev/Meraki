import "./App.css";
import Header from "./assets/components/Header/Header";
import { ThemeProvider } from "@mui/material";
import LightMode from "./themes/LightMode";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <ThemeProvider theme={LightMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
