import React from "react";
import Loader from "./loader";

class LoaderWrapper extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
}

export default LoaderWrapper;
