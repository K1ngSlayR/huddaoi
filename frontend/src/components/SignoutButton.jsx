import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <button onClick={handleSignOut} className="btn btn-danger">
      Sign Out
    </button>
  );
};

export default SignOutButton;
