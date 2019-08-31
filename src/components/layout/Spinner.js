import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "0 auto", diplay: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
