import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [user, setUser] = useState([]);
    console.log("user", user);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const res = await axios.get("https://nodehostheroku.herokuapp.com/register")
        console.log("ressssss", res.data);
        setUser(res.data)
    }
    return (

        <div className='container'>
            <h3 className="d-flex justify-content-center align-items-center"><i>Details Page</i></h3>
            <div className='d-flex justify-content-center'>
                <table className="table" style={{ margin: '0 auto', marginTop: '2%' }}>
                    <thead>
                        <th>##</th>
                        <th>Contact Number</th>
                        <th>Password</th>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data, index) => {
                                return <tr>
                                    <td>{index}</td>
                                    <td>{data.mobile_number}</td>
                                    <td>{data.password}</td>
                                </tr>
                            })}
                    </tbody>
                </table>

            </div>



        </div>

    )
}

export default Home