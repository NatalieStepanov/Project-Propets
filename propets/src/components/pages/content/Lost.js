import './../../../css/Lost.css'
import { faMapMarker, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Uncle from './../../../images/asset-5.jpg'

const Lost = () => {
    return (
        <div className="lost-wrapper">
            <h4 className="lost-title">Lost pets</h4>
            <div className="lost-container">
                <div className="lost-box">
                    <h3>Uncle Sam</h3>
                    <div className="lost-location">
                        <FontAwesomeIcon icon={faMapMarker} className="location-icon" />
                        <p>Oliver Platz, Berlin</p>
                    </div>
                    <img src={Uncle} alt="pet" />
                    <div className="lost-details">
                        <p>view details</p>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="angle-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lost