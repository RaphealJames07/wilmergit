import React, { useContext } from "react";
import {Navigate, Outlet} from "react-router";
import { Context } from "../global/UserContext";

const PrivateRoute = () => {
  const {user} = useContext(Context)
  console.log(user) 
    // const user = '';
    console.log("Has access", user)
    return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
