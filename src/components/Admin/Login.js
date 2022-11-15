import React, { useState } from 'react';
import { useNavigate, useLocation, } from "react-router-dom";
import { useAuth } from "./auth";
import { FaSignInAlt } from "react-icons/fa";
import Input from '../Form/Input';
import Button from '../Form/Button';


export const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/profile'
    const handleLogin = (event) => {
        auth.login(user);
        navigate(redirectPath, { replace: true })
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value })


    }
    const [inputs, setInputs] = useState({
        email: '',
        password: ''

    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value })
    }


    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="mb-3">
                    <Input type='password' title="Password" name="password" value={inputs.password} onChange={handleChange} />
                </div>
                <div>
                    <Button title='Login' img={<FaSignInAlt />} onClick={handleLogin} />
                </div>
            </div>
        </div >
    )
}