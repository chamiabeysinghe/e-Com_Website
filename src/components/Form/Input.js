import React from "react";


const Input = (props) => {
    return (
        <div>
            <label htmlFor="exampleFormControlInput1" >{props.title}</label>
            <input className="form-control " type={props.type} name={props.name} value={props.value} {...props} />
        </div>
    )
}
export default Input;