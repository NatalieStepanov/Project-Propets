import { createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "./app";
import { getAllPosts } from "../service/api";
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
        }
    }
})

export default postsReducer.reducer;

export const {setPosts} = postsReducer.actions;

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

export const postByIdSelector = createSelector(
    state => state.posts.posts,
    (_, id) => id,
    (array, id) => array.find(post => post.id === id)
)