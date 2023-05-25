import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbars from "./Main/Navbars";

interface protect {
  Component: React.FC;
}

const Protected: FC<protect> = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth || auth === "") {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbars />
      <div className="main-container">
        <Component />
      </div>
    </>
  );
};

export default Protected;
