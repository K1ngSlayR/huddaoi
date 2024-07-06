import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

import "./LandingPage.css";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

function LandingPage() {
  const Navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  return (
    <>
      <Topbar />

      <div>{loggedInUser}</div>

      <Container fluid className="d-flex p-0" style={{ height: "100vh" }}>
        <div style={{ flex: 0.5, backgroundColor: "#a9b5d4" }}>
          <Sidebar />
        </div>
        <div style={{ flex: 2, backgroundColor: "#f8f9fa" }}>
          <Feed />
        </div>
        <div style={{ flex: 0.75, backgroundColor: "#a9b5d4" }}>
          <Rightbar />
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

export default LandingPage;
