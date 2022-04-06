import { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import '../Components/Login.css'
import { ModalHeader, ModalBody, Button, ModalFooter } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const EditUser = props => {
    const [obj, setObj] = useState({
        phoneNumber: "",
        password: ""
    })
    const id = props.isEdit.state._id
    console.log("props++", id);
    const navigate = useNavigate()


    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === "phoneNumber" || name === "password") {
            value = parseInt(value) || ""
        }
        setObj({ ...obj, [name]: value })
    }

    const handleSubmit = () => {
        let header = { mobile_number: obj.phoneNumber, password: obj.password }
        axios.put(`https://nodehostheroku.herokuapp.com/register/${id}`, header)
            .then((res) => {
                toast.error(res.data.message)
                console.log("++++++++++", res.data);
                if (res?.data) {
                    toast.success("Edit Data Successfully");
                }
            }
            )
    }



    useEffect(() => {
        console.log("props", props);
        loadUser()
    }, [props]);

    const loadUser = () => {
        setObj({ phoneNumber: props.isEdit.state.mobile_number, password: props.isEdit.state.password })

    }

    return (
        <div>

            <Modal show={props.showEditModal} onHide={props.onHide} style={{ opacity: 1 }} dialogClassName="my-dialog"  >
                <ModalHeader closeButton>
                    <Modal.Title><i>EditUSer Form</i></Modal.Title>
                </ModalHeader>

                <ModalBody className="modal-body">
                    <label>Phone Number:</label>
                    <input type="text" name='phoneNumber' value={obj.phoneNumber} onChange={handleChange} maxLength="10" />
                    <label>Password:</label>
                    <input type="password" value={obj.password} onChange={handleChange} name='password' />
                </ModalBody>

                <ModalFooter>
                    <Button type="button" color="primary" onClick={handleSubmit} onHide={props.onHide}>Save Changes</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditUser