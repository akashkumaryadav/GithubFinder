import React, { Fragment } from "react";
import spinner from "./SpinnerImproved.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loding...."
        style={{ width: "200px", margin: "auto", display: "block" }}
      ></img>
    </Fragment>
  );
};

export default Spinner;
