import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import Home from "../Pages/Home";
import {Buyproduct} from "../Pages/BuyProduct/Buyproduct"
import { AdminSignin } from "../admin/suraj/AdminSignin";
import { AdminSignup } from "../admin/suraj/AdminSignup";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyproduct" element={<Buyproduct />} />
      <Route path="/adminsignin" element={<AdminSignin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
    </Routes>
  );
};
