import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "./Loader.css";

export default function Loader({ type = "grow" }) {
  return (
    <div className="loader ">
      <Spinner animation={type} className="bg-info" />
    </div>
  );
}
