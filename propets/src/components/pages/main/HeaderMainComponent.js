import './../../../css/HeaderMain.css'
import logo from './../../../images/Logo.svg'
import { useHistory } from 'react-router-dom';

const HeaderMainComponent = () => {

    const history = useHistory()

    return (
        <div className="head">
            <div className="head-wrapper">
                <img src={logo} alt='logo' />
                <button className="btn-addNew"
                    onClick={() => { history.push(`/addPost`) }}
                ><span className="plus">+</span> Add new</button>
            </div>
        </div>
    )
}

export default HeaderMainComponent