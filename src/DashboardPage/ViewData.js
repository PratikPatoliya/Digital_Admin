import React from 'react'
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ViewData() {
    const { id } = useParams();
    const navigate = useNavigate()
    const location = useLocation()
    console.log("location", location);
    return (

        // <Link className="btn btn-primary" to="/">
        //     back to Home
        // </Link>


        <div className="col-sm-12 my-5">
            <div className="card shadow-sm w-100" style={{ minHeight: 500 }}>
                <div className="card-body">
                    <div>
                        <img src={location.state.displayImage}></img>
                        <div className='d-flex justify-content-center'>
                            <h3><i>Mobile_Number:<h5>{location.state.mobile_number}</h5></i> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewData