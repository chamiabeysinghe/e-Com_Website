import React, { useState, useEffect, useRef } from "react";

const Test = () => {
    const [data, setData] = useState('Hello')
    const firstName = useRef('');
    const lastName = useRef('');
    //const[firstName, setFirstName] = useState('')
    // const param1 = () =>{}
    // const param2 = []
    useEffect(() => {
        setTimeout(() => {
            setData('Welcome')
        }, 5000)
    }, [])

    const handleFirstNameChange = (event) =>{
        //setFirstName(event.target.value);
        firstName.current = event.target.value
      //console.log(firstName)
    }
    const handlelastNameChange = (event) =>{
        //setFirstName(event.target.value);
        lastName.current = event.target.value
       // console.log(lastName)
    }


    const handleButtonClick = () =>{
     
     console.log(firstName.current, lastName.current);
    }

    return (
        <>
        {console.log('hello world')}
            <h1>{data}</h1>
            <input type='text' name="firstName" ref={firstName} onChange={handleFirstNameChange}/>
            <input type='text' name="lastName" ref={lastName} onChange={handlelastNameChange}/>
            <button type='submit' onClick={handleButtonClick}>Submit</button>
        </>
    )
}

export default Test;