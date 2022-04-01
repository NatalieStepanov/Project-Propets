import './../../../css/HeaderMain.css'
import logo from './../../../images/Logo.svg'
import { faSearch, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, useHistory } from 'react-router-dom';
import { authSelector } from '../../../store/app';
import { useSelector } from 'react-redux'

const HeaderMainComponent = () => {

    const auth = useSelector(authSelector)

    const history = useHistory()

    return (
        <div className="head">
            <div className="head-wrapper">
                <img src={logo} alt='logo' />

                {auth && 

                <div className="head-btns">
                    <button className="btn-red"
                        onClick={() => { history.push(`/addPost`) }}
                    ><FontAwesomeIcon icon={faSearch} className="btns-icon" /> I lost my pet</button>

                    <button className="btn-found"
                        onClick={() => { history.push(`/addPost`) }}
                    ><FontAwesomeIcon icon={faPaw} className="btns-icon" />I found a pet</button>
                </div>}
                
                    <button className="btn-addNew"
                        onClick={() => { history.push(`/addPost`) }}
                    ><span className="plus">+</span> Add new</button> 
                
            </div>
        </div >
    )
}

export default HeaderMainComponent