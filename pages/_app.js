import React from "react";
import "../style.css";

const Root = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default Root;
