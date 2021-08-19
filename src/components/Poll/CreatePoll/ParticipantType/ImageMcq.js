import { KeyboardReturn } from "@material-ui/icons";
import React from "react";
import ReactDOM from "react-dom";
import App from "../../../../imageMcq/App/App";

function ImageMcq() {
return(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
}
export default ImageMcq;