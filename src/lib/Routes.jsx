import React from "react";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routes;
