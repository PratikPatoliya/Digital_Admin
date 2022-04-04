
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AiFillDashboard } from 'react-icons/ai';
import logo from '../assets/images/logo.jpg'
import {BiCategory} from 'react-icons/bi'




function Navbar() {
  const loginStatus=  localStorage.getItem('Login') 
  console.log("loginstatus",loginStatus);

    return (
        <div>

            <div className="menu_style">
                <ul>
                    <li>
                        <NavLink className="active_class" to="/">
                            <img src={logo} alt="logo" width="100px" />
                        </NavLink>
                    </li>
                </ul>
                <div className="flex-grow-1">
                </div>

                <ul>
                    <li> <NavLink className="active_class " to="/"><FaHome /></NavLink>
                    </li>
                </ul>

                <ul>
                    <li> <NavLink className="active_class " to="/dashboard"><AiFillDashboard /></NavLink>
                    </li>
                </ul>
                <ul>
                    <li> <NavLink className="active_class " to="/category"><BiCategory /></NavLink>
                    </li>
                </ul>
                {
                 loginStatus  ?
                        <div id="nlist">
                            <li className="dropdown">
                                <NavLink className="active_class mx-5" to={"/logout"} ><IoMdContact /></NavLink>
                                <div className="dropdown-content" style={{ float: "right" }}>
                                    <NavLink className="active_class" to="/logout" >Logout</NavLink>
                                </div>
                            </li>
                        </div> :
                        <div id="nlist">
                            <li className="dropdown">
                                <NavLink className="active_class mx-5" to={"/login"} ><IoMdContact /></NavLink>
                                <div className="dropdown-content" style={{ float: "right" }}>
                                    <NavLink to="/login" className="active_class">Login</NavLink>
                                </div>
                            </li>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar