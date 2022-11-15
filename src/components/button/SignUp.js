import React from "react";
import { FaGoogle, FaFacebookSquare, FaUserPlus } from "react-icons/fa";

const SignUp = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">
                <FaUserPlus /> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="signupModalLabel">Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <button type="submit" className="btn btn-primary w-100 mb-4"><FaGoogle /> SignUp with Google</button>
                            <button type="submit" className="btn btn-primary w-100 mb-4"><FaFacebookSquare /> SignUp with Facebook</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="exampleInputuserName" aria-describedby="userHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 ">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;