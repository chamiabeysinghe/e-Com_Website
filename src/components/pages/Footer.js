import React from "react";
import Row from "../Form/Row";
import Col from "../Form/Col";

const Footer = () => {
    return(
        <div>
            <footer className=" mt-5">
                <div className="container-fluid ">
                    <Row>
                        <Col size="12 bg-light ">
                            <p className="lead text-center " style={{fontSize: "10px",color:"black",textAlign:"center",paddingTop:"10px"}}>
                            Copyright &copy; {new Date().getFullYear()} | All right recived. Term & condition | Privacy Policy
                            </p>
                        </Col>
                    </Row>
                </div>
            </footer>

        </div>
    )
}
export default Footer;