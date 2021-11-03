import './../css/Header.css'
import logo from './../images/Logo.svg'
import avatar from './../images/avatar1.png'
import { faHome, faSearch, faPaw, faHotel, faWalking, faDog, faStethoscope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'

import { Route, Switch, useHistory } from 'react-router-dom';

import Lost from './Lost';
import Profile from './Profile';
import VetHelp from './VetHelp';
import Walking from './Walking';
import Fostering from './Fostering';
import Found from './Found';

const Home = () => {

    const history = useHistory()

    return (
        <>
            <div className="head">
                <div className="head-wrapper">
                    <img src={logo} alt='logo' onClick={()=>{history.push(`/home`)}}/>
                    <button className="btn-addNew"><span className="plus">+</span> Add new</button>
                </div>
            </div>
            <div className="head-main">
                <nav className="nav-left">
                    <div className="nav-top">
                        <NavLink className="link" to="/">
                            <div className="nav-link">
                                <div className="block-link">
                                    <FontAwesomeIcon icon={faHome} className="nav-icon" />
                                    <p>Home</p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/lost">
                            <div className="nav-link">
                                <div className="block-link">
                                    <FontAwesomeIcon icon={faSearch} className="nav-icon" />
                                    <p>Lost</p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/found">
                            <div className="nav-link">
                                <div className="block-link">
                                    <FontAwesomeIcon icon={faPaw} className="nav-icon" />
                                    <p>Found</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-bottom">
                        <h3>Services</h3>
                        <div className="bottom-link">
                            <FontAwesomeIcon icon={faHotel} className="nav-icon" />
                            <p>Hotels</p>
                        </div>
                        <NavLink className="link" to="/walking">
                            <div className="bottom-link">
                                <FontAwesomeIcon icon={faWalking} className="nav-icon" />
                                <p className="walking">Walking</p>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/fostering">
                            <div className="bottom-link">
                                <FontAwesomeIcon icon={faDog} className="nav-icon" />
                                <p>Fostering</p>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/vethelp">
                            <div className="bottom-link hr">
                                <FontAwesomeIcon icon={faStethoscope} className="nav-icon" />
                                <p>VetHelp</p>
                            </div>
                        </NavLink>
                    </div>
                </nav>
                <div className="content">
                    <Switch>

                        <Route path='/lost' component={Lost} />
                        <Route path='/found' component={Found} />
                        <Route path='/walking' component={Walking} />
                        <Route path='/fostering' component={Fostering} />
                        <Route path='/vethelp' component={VetHelp} />
                        <Route path='/profile' component={Profile} />
                        
                    </Switch>
                </div>
                <div className="nav-right">
                    <div className="right-container">
                        <NavLink className="link" to="/profile">
                            <div className="link-profile">
                                <img src={avatar} />
                                <p>Anna <br />Smith</p>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/logout">
                            <div className="link-logout">
                                <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                                <p>Logout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home