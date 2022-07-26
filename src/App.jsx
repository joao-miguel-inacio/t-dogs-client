import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/:id" element={<Dog />} />
          <Route path="/profile" element={<Profile />} />
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
  );
}

export default App;
