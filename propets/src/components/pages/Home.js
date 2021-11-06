import dog from './../../images/8347.jpg'
import logo from './../../images/logo-white.svg'
import whiteDog from './../../images/Image-2.jpg'
import lostIcon from './../../images/lost-icon.svg'
import './../../css/Home.css'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory()

    return (
        <>
            <div className="head-logout">
                <div className="head-wrapper-logout">
                    <img src={logo} alt='logo'
                        onClick={() => { history.push(`/home`) }} />
                    <button className="btn-signin"
                        onClick={() => {
                            history.push('/login')
                        }}
                    >Sign in</button>
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    <div className="block-left">
                        <h1 className="block-title">Welcome to your <br /><span>pawfessional</span><br />community</h1>
                        <div className="logout-link-block">
                            <Link className="lost-found-link">
                                <div className="lost">
                                    <span className="replies"><h1>I lost my pet!</h1></span>
                                    <span className="click"><h1>Click to find!</h1></span>
                                    <img src={lostIcon} alt="losticon" />
                                </div>
                            </Link>
                            <Link className="lost-found-link">
                                <div className="found">
                                    <span className="replies"><h1>I found a pet!</h1></span>
                                    <span className="click"><h1>What to do?</h1></span>
                                </div>
                            </Link>
                        </div>

                        <p className="text-join">I'm okay, just want to <NavLink className="link-join" to="/login">JOIN</NavLink> the pawsome community!</p>
                    </div>
                    <div className="block-right">
                        <img src={whiteDog} alt="whitedog" />
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-head">
                    <p className="section-top-text">Our fluffly space for lovers, admirers, dads and moms<br /> of our four-legged, winged, tailed guys.</p>
                </div>
                <div className="section-body">
                    <div className="section-content">
                        <div className="section-img">
                            <img src={dog} alt="dog" />
                        </div>
                        <div className="section-text">
                            <h3>Here is collected everything that your pet needs:</h3>
                            <ul>
                                <li><span>professional veterinarian tips;</span></li>
                                <li><span>useful information about education and care;</span></li>
                                <li><span>information about pet-setting and walking service;</span></li>
                                <li><span>and of course, great communication with new friends in your social network!</span></li>
                            </ul>
                            <p>Make an account and <Link className="link-join section-link">JOIN</Link> to us!</p>
                        </div>
                    </div>
                </div>
                <div className="section-footer">
                    <div className="footer-container">
                        <img src={logo} alt='logo' />
                        <p>1600 Amphitheatre Pkwy<br />Mountain View, CA 94043, USA</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home