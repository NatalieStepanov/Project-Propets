import './../../../css/Posts.css'
import pet from './../../../images/asset-45.jpg'
import postImg from './../../../images/post.jpg'
import { faMonument, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useHistory } from 'react-router-dom';
import { getAllPostsAction, postsSelector } from '../../../store/posts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const posts = useSelector(postsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPostsAction())
    }, [dispatch])

    // const date = post ? moment(post.createdAt).format("D MMMM, HH:mm") : false;

    return (
        <>
            {posts.length === 0 && <h3>Posts list is empty</h3>}

            <ul className="posts-wrapper">
                {posts.map(post =>
                    <li key={post.id}>
                        <div className="posts-user">
                            <img src={`http://localhost:5000/${post.avatar}`} alt="avatar" />
                            <div className="posts-user-name">
                                <h4>{post.full_name}</h4>
                                <p className="posts-date">{post.createdAt}6 April, 10:15</p>
                            </div>
                        </div>
                        <img src={post.photo} className="posts-img" alt="dog" />
                        <div id="posts-content">
                            <h4 className="posts-title">{post.title}</h4>
                        </div>
                        <Link className="text-more" to={`/post/${post.id}`}>more...</Link>
                        <div className="posts-like-count">
                            <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
                            <p className="count-like">{post.count}</p>
                        </div>
                        <hr />
                    </li>)}
            </ul>
        </>
    )
}

export default Posts

