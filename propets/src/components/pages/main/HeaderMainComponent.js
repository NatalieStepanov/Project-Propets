import './../../../css/HeaderMain.css'
import logo from './../../../images/Logo.svg'
import { useHistory } from 'react-router-dom';
import { authSelector } from '../../../store/app';
import { useSelector } from 'react-redux'

const HeaderMainComponent = () => {

    // const auth = useSelector(authSelector)

    const history = useHistory()

    return (
        <div className="head">
            <div className="head-wrapper">
                {/* {!auth && */}
                <img src={logo} alt='logo' />
                {/* } */}

                {/* {auth &&  */}
                <button className="btn-addNew"
                    onClick={() => { history.push(`/addPost`) }}
                ><span className="plus">+</span> Add new</button>
                {/* } */}
            </div>
        </div>
    )
}

export default HeaderMainComponent