import FormProfileEdit from "../../components/Forms/FormProfileEdit";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";

const ProfileEdit = () => {
  useEffect(() => {
    document.getElementById("dogs")?.classList.add("selected");
    return () => {
      document.getElementById("dogs")?.classList.remove("selected");
    };
  }, []);
  return (
    <div className="page-body">
      <Navbar2 page="Profile Edit" />
      <FormProfileEdit />
    </div>
  );
};

export default ProfileEdit;
