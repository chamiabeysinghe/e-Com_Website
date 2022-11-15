import React from "react";

const Col = (props) => {
    return(
        <div className={`col-md-${props.size}`} {...props}>
            {props.children} 
        </div>
    )
}
export default Col;