import { createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "./app";
import { addNewPost, getAllPosts } from "../service/api";
import { createSelector } from "reselect";

const initialState = {
     posts: []
}

const postsReducer = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts: (state, {payload}) =>{
            state.posts = payload.posts
            console.log(payload)
        },
        addPost: (state, {payload})=>{
            state.posts.push(payload.post)
        }
    }
})

export default postsReducer.reducer;

export const {setPosts, addPost} = postsReducer.actions;

export const postsSelector = state => state.posts.posts

export const getAllPostsAction=()=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
             const response = await getAllPosts()
             console.log(response.rows)
             dispatch(setPosts({posts: response.rows}))
        }catch(error){
             console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const addPostAction = (post) =>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const response = await addNewPost(post)
            dispatch(addPost({post:response})) 
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const postByIdSelector = createSelector(
    state => state.posts.posts,
    (_, id) => id,
    (array, id) => array.find(post => post.id === id)
)