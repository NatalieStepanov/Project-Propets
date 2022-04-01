import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, updateUser } from "../service/api";
import { authSuccess, startLoading, stopLoading } from "./app";

const initialState = {
    error: null
}

const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setError:(state, {payload})=>{
            state.error = payload.error
        },
        clearError: state =>{
            state.error = null
        }
    }
})

export default AuthReducer.reducer
export const {setError, clearError}= AuthReducer.actions

export const loginAction = (userData)=>{
    return async dispatch =>{
        dispatch(startLoading())
        dispatch(clearError())
        try{
            await signIn(userData)
            dispatch(authSuccess())
        }catch(error){
            dispatch(setError({error:error.message}))
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const registrationAction = (userData)=>{
    return async dispatch =>{
        dispatch(startLoading())
        dispatch(clearError())
        try{
            await signUp(userData)
        }catch(error){
            dispatch(setError({error:error.message}))
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const updateUserAction = (obj, avatarOld, petPhotoOld) => async (dispatch) => {
    dispatch(startLoading())
    dispatch(clearError())
    try {
        const user = await updateUser(obj, avatarOld, petPhotoOld)
        // dispatch(setCurrent(user))
    }catch(e){
        dispatch(setError({data: e.data, status: e.status}))
    }finally{
        dispatch(stopLoading())
    }
}

export const errorSelector = state => state.auth.error