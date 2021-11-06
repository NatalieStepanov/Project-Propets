import './../../../css/LeftMain.css'
import { faHome, faSearch, faPaw, faHotel, faWalking, faDog, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'

const LeftMainComponent = () => {
    return (
        <nav className="nav-left">
            <div className="left-top">
                <NavLink className="left-top-link" to="/posts">
                    <div className="block-link">
                        <FontAwesomeIcon icon={faHome} className="left-icon" />
                        <p>Home</p>
                    </div>
                </NavLink>

                <NavLink className="left-top-link" to="/lost">
                    <div className="block-link">
                        <FontAwesomeIcon icon={faSearch} className="left-icon" />
                        <p>Lost</p>
                    </div>
                </NavLink>
                <NavLink className="left-top-link" to="/found">
                    <div className="block-link">
                        <FontAwesomeIcon icon={faPaw} className="left-icon" />
                        <p>Found</p>
                    </div>
                </NavLink>
            </div>

            <div className="left-bottom">
                <h3>Services</h3>
                <div className="left-bottom-link">
                    <FontAwesomeIcon icon={faHotel} className="left-icon" />
                    <p>Hotels</p>
                </div>
                <NavLink className="left-bottom-link" to="/walking">
                    <FontAwesomeIcon icon={faWalking} className="left-icon" />
                    <p className="walking">Walking</p>
                </NavLink>
                <NavLink className="left-bottom-link" to="/fostering">
                    <FontAwesomeIcon icon={faDog} className="left-icon" />
                    <p>Fostering</p>
                </NavLink>
                <NavLink className="left-bottom-link hr" to="/vethelp">
                    <FontAwesomeIcon icon={faStethoscope} className="left-icon" />
                    <p>VetHelp</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default LeftMainComponent