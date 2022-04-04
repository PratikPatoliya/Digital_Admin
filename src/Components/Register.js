
import { useState, useEffect } from 'react';
import { useNavigate ,Link } from 'react-router-dom';

const getdata = () => {
    const data = localStorage.getItem("obj");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};


function Register() {
    const [user, setUser] = useState(getdata())
    const [obj, setObj] = useState({
        _id: Math.random().toString().substr(4, 9),
        phoneNumber: "",
        password: "",
        confirmpassword: ""
    });
    const [errorMessage, setErrorMessage] = useState({
        phoneNumber: "",
        password: "",
        confirmpassword: ""
    });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let phoneNumberError = ""
        let passwordError = ""
        let confirmpasswordError = ""
        let flag = true;
        let phoneNumber = obj.phoneNumber.toString()
        let password = obj.password.toString()
        let confirmpassword = obj.confirmpassword.toString()

        console.log("phoneNumber+++++++++++++", obj);
        console.log("++++++++obj.password.length", obj.password.length);
        if (obj.phoneNumber === "") {
            phoneNumberError = "PhoneNumber is Required.!"
            flag = false;
        }
        else if (phoneNumber.length !== 10) {
            phoneNumberError = "password must be 10 character."
            flag = false
        }
        if (obj.password === "") {
            passwordError = "password is Required.!"
            flag = false
        }
        else if (password.length !== 6) {
            passwordError = "Password Must be 6 character."
            flag = false
        }
        if (obj.confirmpassword === "") {
            confirmpasswordError = "confirm Password is Required.!"
            flag = false
        }
        else if (password !== confirmpassword) {
            confirmpasswordError = "Password & ConfirmPassword dose not match."
            flag = false
        }
        setErrorMessage({
            phoneNumber: phoneNumberError,
            password: passwordError,
            confirmpassword: confirmpasswordError
        })
        if (flag) {
            console.log("++++++++++++++++++++++++++++", obj);
            alert("Data Added Succesfully.!")
            setUser([...user, obj])
            // navigate("/login")

        }
    }
    useEffect(() => {
        // getdata()
        localStorage.setItem("obj", JSON.stringify(user))
    }, [user])


    const changeHandler = (e) => {
        let { name, value } = e.target
        if (name === "phoneNumber" || name === "password") {
            value = parseInt(value) || ""
        }

        setObj({
            ...obj,
            [name]: value
        });
        console.log("obj", obj);
    }

    return (
        <div className='row Register'>
            <form className='registerForm'>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <i style={{ fontSize: '25px' }}>Register</i>
                </div>
                <div className="col-12 mb-1">
                    <label>Phone Number:</label>
                    <input type="text" className="textInput"
                        onChange={(e) => changeHandler(e)}
                        value={obj.phoneNumber} name="phoneNumber" maxLength="10" />

                    <div className="mainError">
                        {errorMessage.phoneNumber !== "" && <div className="errorMessage">{errorMessage.phoneNumber}</div>}
                    </div>
                </div>
                <div className="col-12 mb-1">
                    <label>Password:</label>
                    <input type="password" className="textInput" style={{ fontSize: '18px' }}
                        onChange={(e) => changeHandler(e)}
                        value={obj.password} name="password" />

                    <div className="mainError">
                        {errorMessage.password !== "" && <div className="errorMessage">{errorMessage.password}</div>}
                    </div>
                </div>
                <div className="col-12 mb-1">
                    <label>Confirm Password:</label>
                    <input type="password" className="textInput" style={{ fontSize: '18px' }}
                        onChange={(e) => changeHandler(e)}
                        value={obj.confirmpassword} name="confirmpassword" />

                    <div className="mainError">
                        {errorMessage.confirmpassword !== "" && <div className="errorMessage">{errorMessage.confirmpassword}</div>}
                    </div>

                </div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <label >Already registerd ?</label>
                    <Link to="/login">Login</Link>
                </div>

            </form>
        </div>
    )
}

export default Register