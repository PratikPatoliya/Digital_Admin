import React from 'react'
import { useState  } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios'



function Login() {
    const [obj, setObj] = useState({
        phoneNumber: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState({
        phoneNumber: "",
        password: ""
    })

  
   

    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === "phoneNumber") {
            value = parseInt(value) || ""
        }
        setObj({
            ...obj,
            [name]: value
        })
        console.log("objjjjjjjjjj", obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let phoneNumberError = ""
        let passwordError = ""
        let flag = true;



        if (obj.phoneNumber === "") {
            phoneNumberError = "PhoneNumber is Required.!"

        }
     

        if (obj.phoneNumber === "") {
            passwordError = "PhoneNumber is Required.!"

        }
      
        setErrorMessage({
            phoneNumber: phoneNumberError,
            password: passwordError
        })

       
    }
    console.log("errrrt", errorMessage);
    return (
        <div className='row Login'>
            <form className='loginForm'>
                <div className='d-flex justify-content-center mb-2'>
                    <i style={{ fontSize: '25px' }}>Login</i>
                </div>
                <div className="col-12 mb-1">
                    <label>Phone Number : </label>
                    <input type="text" name='phoneNumber' value={obj.phoneNumber} onChange={handleChange} maxLength="10" />
                </div>
                <div className='mainError'>
                    {errorMessage.phoneNumber !== "" && <div className='errorMessage'>{errorMessage.phoneNumber}</div>}
                </div>
                <div className="col-12 mb-1">
                    <label >Password :</label>
                    <input type="password" name='password' value={obj.password} onChange={handleChange} />
                </div>
                
                <div className='mainError'>
                    {errorMessage.password !== "" && <div className='errorMessage'>{errorMessage.password}</div>}
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <label >Sign In ?</label>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login