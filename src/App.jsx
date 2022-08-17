import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signin from "./pages/Forms/Signin";
import Signup from "./pages/Forms/Signup";
import Dog from "./pages/Dog/Dog";
import Profile from "./pages/Profile/Profile";
import OwnList from "./pages/OwnList/OwnList";
import DogCreate from "./pages/Forms/DogCreate";
import DogEdit from "./pages/Forms/DogEdit";
import Browse from "./pages/Browse/Browse";
import MatchList from "./pages/MatchList/MatchList";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import ProfileEdit from "./pages/Forms/ProfileEdit";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState(false);

  const light = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#f42b78",
      },
    },
  });

  const dark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#f42b78",
      },
      text: {
        main: "#fff",
        primary: "#fff",
        secondary: "#fff",
        contrastText: "#fff",
      },
      action: {
        active: "#fff",
      },
      background: {
        default: "#242423",
      },
    },
  });
  return (
    <ThemeProvider theme={themeMode ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <div className="App">
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About themeMode={themeMode} />
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup themeMode={themeMode} />} />
          <Route element={<PrivateRoute />}>
            <Route path="/:id" element={<Dog themeMode={themeMode}/>} />
            <Route path="/profile" element={<Profile themeMode={themeMode} />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="/own-list" element={<OwnList />} />
            <Route path="/dog-create" element={<DogCreate />} />
            <Route path="/:id/dog-edit" element={<DogEdit />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/match-list" element={<MatchList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
