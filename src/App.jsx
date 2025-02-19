import "./App.css";
import Header from "./assets/components/Header/Header";
import { ThemeProvider } from "@mui/material";
import LightMode from "./themes/LightMode";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import CreateAccount from "./pages/Auth/CreateAccount";
import LoginAccount from "./pages/Auth/LoginAccount";
function App() {
  return (
    <>
      <ThemeProvider theme={LightMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<CreateAccount />} />
          <Route path="/sign-up" element={<LoginAccount />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
