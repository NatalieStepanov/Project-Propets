import './../../../css/Post.css'
import pet from './../../../images/asset-45.jpg'
import postImg from './../../../images/post.jpg'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Post = () => {
    return (
        <div className="post-wrapper">
            <div className="post-user">
                <img src={pet} alt="avatar" />
                <div className="post-user-name">
                    <h4>John Goodboy</h4>
                    <p className="post-date">6 April, 10:15</p>
                </div>
            </div>
            <img src={postImg} className="post-img" alt="dog" />
            <div id="post-content">
                <h4 className="post-title">Fox nymphs grab quick-jived waltz.</h4>
                <p className="post-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sapiente, quaerat enim totam esse optio odio, molestias odit facere ipsa officia, tempore qui provident eligendi nobis blanditiis itaque suscipit? Enim alias iure laborum ut odit ex reiciendis tenetur recusandae, consectetur est debitis officiis facilis necessitatibus! Quidem laborum perferendis voluptates officiis.
                </p>
            </div>
            <div className="post-like-count">
                <p className="count-like">86</p>
                <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
                <p className="count-text">add like</p>
            </div>
            <h4 className="post-title-comments">Comments</h4>
            <div className="post-date-comment">
                <p>John Goodboy</p>
                <p>| 6 April, 10:15</p>
            </div>
            <p className="post-text-comment">
            Enim alias iure laborum ut odit ex reiciendis tenetur recusandae, consectetur est debitis officiis facilis necessitatibus! Quidem laborum perferendis voluptates officiis.
            </p>
            
        </div>
    )
}

export default Post