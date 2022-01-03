import './../../../css/Post.css'
import pet from './../../../images/asset-45.jpg'
import postImg from './../../../images/post.jpg'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useParams } from 'react-router-dom'
import { postByIdSelector } from '../../../store/posts'
import { useSelector } from 'react-redux'

const Post = () => {
    const {id} = useParams()
    const post = useSelector(state => postByIdSelector(state, parseInt(id)))
    console.log(post)
    return (
        <div className="post-wrapper">
            <div className="post-user">
                <img src={post.avatar} alt="avatar" />
                <div className="post-user-name">
                    <h4>{post.full_name}</h4>
                    <p className="post-date">{post.createdAt}</p>
                </div>
            </div>
            <img src={post.photo} className="post-img" alt="dog" />
            <div id="post-content">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-text">
                    {post.text}
                </p>
            </div>
            <div className="post-like-count">
                <p className="count-like">{post.count}</p>
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