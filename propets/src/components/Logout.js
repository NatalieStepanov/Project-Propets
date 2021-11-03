import './../images/poodles-doodles.jpg'
import dog from './../images/dog-cat-parrot.jpg'
import './../css/Logout.css'
import { Link } from 'react-router-dom'

const Logout = ()=>{
    return(
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="block">
                        <h1>Welcome to your <br /><span>pawfessional</span><br />community</h1>
                        <Link>
                        <div className="lost">
                            <span className="replies"><h2>I lost my pet!</h2></span>
                            <span className="click"><h2>Click to find!</h2></span>

                        </div>
                        </Link>
                        <div className="found">
                            <span className="replies"><h2>I found a pet!</h2></span>
                            <span className="click"><h2>What to do?</h2></span>

                        </div>
                        <p>I'm okay, just want to <Link className="link" to="/login">JOIN</Link> the pawsome community!</p>
                    </div>
                    <div className="block block-right">

                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-head">
                    <h4>Our fluffly space for lovers, admirers, dads and moms<br /> of our four-legged, winged, tailed guys.</h4>
                </div>
                <div className="section-content">
                    <div className="section-img">
                        <img src={dog} />
                    </div>
                    <div className="section-text">
                        <h3>Here is collected everything that your pet needs:</h3>
                        <ul>
                            <li><span>professional veterinarian tips;</span></li>
                            <li><span>useful information about education and care;</span></li>
                            <li><span>information about pet-setting and walking service;</span></li>
                            <li><span>and of course, great communication with new friends in your social network!</span></li>
                        </ul>
                        <p>Make an account and <Link className="link">JOIN</Link> to us!</p>
                    </div>
                </div>
                <div className="section-footer">
                       <h1>PROPETS</h1>
                       <p>1600 Amphitheatre Pkwy<br/>Mountain View, CA 94043, USA</p>
                </div>
            </div>
        </>
    )
}

export default Logout