import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import Cart from "../button/Cart";
import SignUp from "../button/SignUp";
import Login from "../button/Login";


export const Navbar = () => {
    const auth = useAuth();
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid justify-content-end">
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/about'> About </NavLink>
                <NavLink to='/productlist'> Products </NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                {!auth.user && (<NavLink to='/login' style={{ margin: '0px' }}><Login /> </NavLink>)}
                {!auth.user && (<SignUp />)}
                {auth.user && (<NavLink to='/profile'>Profile</NavLink>)}
                <Cart />
                <NavLink to=''></NavLink>
            </div>
        </nav>
    )
}