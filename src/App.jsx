import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dog from "./pages/Dog";
import Profile from "./pages/Profile";
import OwnList from "./pages/OwnList";
import DogCreate from "./pages/DogCreate";
import DogEdit from "./pages/DogEdit";
import Browse from "./pages/Browse";
import MatchList from "./pages/MatchList";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dog" element={<Dog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/own-list" element={<OwnList />} />
          <Route path="/dog-create" element={<DogCreate />} />
          <Route path="/dog-edit" element={<DogEdit />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/match-list" element={<MatchList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
