import "./App.css";
import Header from "./assets/components/Header/Header";
import { ThemeProvider } from "@mui/material";
import LightMode from "./themes/LightMode";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import CreateAccount from "./pages/Auth/CreateAccount";
import LoginAccount from "./pages/Auth/LoginAccount";
import Pomodoro from "./pages/Pomodoro";
import RequireAuth from "./assets/Hooks/RequireAuth";

function App() {
  return (
    <>
      <ThemeProvider theme={LightMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<CreateAccount />} />
          <Route path="/sign-up" element={<LoginAccount />} />
          <Route
            path="/pomodoro"
            element={
              <RequireAuth>
                <Pomodoro />
              </RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
