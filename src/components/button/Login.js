import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <NavLink to='/login' className="btn btn-primary "><FaSignInAlt /> Login</NavLink>
        </div>
    )
}
export default Login;