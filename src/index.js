import _ from "lodash";
import "./style.css";
import createNav from "./nav";

function component() {
  const contentDiv = document.getElementById("content");
  const element = document.createElement("div");

  contentDiv.appendChild(element);
}

document.body.appendChild(createNav(), component());
