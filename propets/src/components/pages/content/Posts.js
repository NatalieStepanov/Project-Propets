import './../../../css/Posts.css'
import pet from './../../../images/asset-45.jpg'
import postImg from './../../../images/post.jpg'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useHistory } from 'react-router-dom';

const Posts = () => {

    const history = useHistory()

    return (
        <div className="posts-wrapper">
            <div className="posts-user">
                <img src={pet} alt="avatar" />
                <div className="posts-user-name">
                    <h4>John Goodboy</h4>
                    <p className="posts-date">6 April, 10:15</p>
                </div>
            </div>
            <img src={postImg} className="posts-img" alt="dog" />
            <div id="posts-content">
                <h4 className="posts-title">Fox nymphs grab quick-jived waltz.</h4>
            </div>
            <p className="text-more"
                onClick={() => {
                    history.push('/post')
                }}
            >more...</p>
            <div className="posts-like-count">
                <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
                <p className="count-like">86</p>
            </div>
            <hr />
        </div>
    )
}

export default Posts