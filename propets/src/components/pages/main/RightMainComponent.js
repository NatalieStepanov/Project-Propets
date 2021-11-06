import './../../../css/RightMain.css'
import avatar from './../../../images/avatar1.png'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'

const RightMainComponent = () => {
    return (
        <div className="nav-right">
            <div className="right-container">
                <NavLink className="link-profile" to="/profile">
                        <img src={avatar} alt="avatar" />
                        <p>Anna <br />Smith</p>
                </NavLink>
                <NavLink className="link-logout" to="/home">
                        <FontAwesomeIcon icon={faSignOutAlt} className="right-icon-logout" />
                        <p>Logout</p>
                </NavLink>
            </div>
        </div>
    )
}

export default RightMainComponent