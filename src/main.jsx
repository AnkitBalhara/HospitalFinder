import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-4ajsmiixo4juwzlq.us.auth0.com"
  //   clientId="cQWWOxr38XBWYkZ8P8FVgxCJX8lnsX1q"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Auth0Provider>
);
