import React, { JSX } from "react";
import CircullarActivityIndicator from "../Loaders/CircullarActivityIndicator";

const LoaderWrapper = ({ visible, children }) => {
  return (
    <>
      {visible && <CircullarActivityIndicator />}
      {children}
    </>
  );
};

export default LoaderWrapper;
