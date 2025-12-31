import reactToWebComponent from "react-to-webcomponent";
import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from "./components/base/buttons/Button";

function define(name: string, Component: any) {
  if (!customElements.get(name)) {
    customElements.define(
      name,
      reactToWebComponent(Component, React, ReactDOM)
    );
  }
}

define("NaveButton", Button);