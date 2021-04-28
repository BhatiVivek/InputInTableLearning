import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ClassBasedApp from "./ClassBasedApp";
import HookBasedApp from "./HookBasedApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h2>Class Based Component</h2>
    <ClassBasedApp />
    <hr />
    <h2>Functional Based Component</h2>
    <HookBasedApp />
  </StrictMode>,
  rootElement
);
