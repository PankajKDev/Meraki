import "./App.css";
import Header from "./assets/components/Header/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LightMode from "./themes/LightMode";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import CreateAccount from "./pages/Auth/CreateAccount";
import LoginAccount from "./pages/Auth/LoginAccount";
import Pomodoro from "./pages/Pomodoro";
import RequireAuth from "./assets/utils/RequireAuth";
import UserSync from "./assets/utils/UserSync";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import DarkMode from "./themes/DarkMode";
import useThemeStore from "./store/useThemeStore";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isDarkMode } = useThemeStore();
  console.log(isDarkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
        <CssBaseline />
        <UserSync />
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
          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            }
          />
          <Route
            path="/notes"
            element={
              <RequireAuth>
                <Notes />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
