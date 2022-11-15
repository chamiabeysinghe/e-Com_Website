import React from "react";
import Row from "../Form/Row";
import Col from "../Form/Col";

const Contact = () => {
    return (
        <div>
            <div className="container">
                <Row>
                    <Col size="12 text-center py-4 my-4">
                        <h1>Any Question?</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col size="5 d-flex justify-content-center">
                        <img src="/assest/contact.PNG" alt="Contact Us" height="400px" width="400px" />
                    </Col>
                    <Col size="6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Message</button>
                        </form>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
export default Contact;