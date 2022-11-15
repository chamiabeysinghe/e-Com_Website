import React from "react";

const Button = (props) => {
    return(
        <div>
            <button className="btn btn-primary btn-block btn-lg" type="button" {...props} >{props.img} {props.title}</button>
        </div>

    )
}
export default Button;