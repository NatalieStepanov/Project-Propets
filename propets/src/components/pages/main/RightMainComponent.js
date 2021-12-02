import './../../../css/RightMain.css'
import avatar from './../../../images/avatar1.png'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'

import { logout } from '../../../store/app';
import { useDispatch } from 'react-redux'

const RightMainComponent = () => {

    // const dispatch = useDispatch()

    return (
        <div className="nav-right">
            <div className="right-container">
                <NavLink className="link-profile" to="/profile">
                        <img src={avatar} alt="avatar" />
                        <p>Anna <br />Smith</p>
                </NavLink>
                <NavLink className="link-logout" to="/home"
                        // onClick= {()=>{
                        //     dispatch(logout())
                        // }}>
                        >
                        <FontAwesomeIcon icon={faSignOutAlt} className="right-icon-logout" />
                        <p>Logout</p>
                </NavLink>
            </div>
        </div>
    )
}

export default RightMainComponent