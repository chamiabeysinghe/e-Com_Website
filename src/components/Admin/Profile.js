import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './auth';
import { FaSignOutAlt } from "react-icons/fa";
import Button from "../Form/Button";

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
    return (
        <div>
            <div className="container py-5 my-5">
                <div >
                    <h2> Hi {auth.user},</h2><br />
                    <h6>Welcome to ECom Website</h6><br /><br />
                    <Button title='Logout' img={<FaSignOutAlt />} onClick={handleLogout} />
                </div>
            </div>
        </div>
    )

}