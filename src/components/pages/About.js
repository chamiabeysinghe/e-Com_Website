import React from "react";
import { NavLink } from "react-router-dom";
import Row from "../Form/Row";
import Col from "../Form/Col";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <Row>
                    <Col size='6'>
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 w-10 text-justify-inter-word">
                            1914 translation by H. Rackham
                            "But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete
                            account of the system, and expound the actual teachings of the great
                            explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                            but because those who do not know how to pursue pleasure rationally
                            encounter consequences that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in
                            which toil and pain can procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious physical exercise, except to
                            obtain some advantage from it? But who has any right to find fault with a
                            man who chooses to enjoy a pleasure that has no annoying consequences, or
                            one who avoids a pain that produces no resultant pleasure?"
                        </p>
                        <NavLink to='/contact' className="btn btn-primary px-3" >Contact Us</NavLink>
                    </Col>
                    <Col size="6 d-flex justify-content-center">
                        <img src="/assest/about.PNG" alt="About Us" height="500px" width="500px"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default About;