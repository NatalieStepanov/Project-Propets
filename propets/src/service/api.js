import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:5000'
})

//<-
client.interceptors.response.use(
    response => {
        console.log(response.data.token)
        // if(response.config.url.startsWith('/login')){
            localStorage.setItem('TOKEN', response.data.token)
        // }
        return response
    },
    error=>{
        console.dir(error)
        if(error.response.status === 401){
            localStorage.removeItem('TOKEN')
        }
        return Promise.reject(error)
    }
)

//->
client.interceptors.request.use(
    config =>{
        console.log(config)
        /* if(
            !config.url.startsWith('/auth')
        ){ */
            config.headers = {
                authorization: localStorage.getItem('TOKEN') || ''
            }
        // }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

export const signUp = async ({full_name, email, password}) =>{
    console.log(full_name, email, password)
    try{
         const response = await client.post('/api/users/registration', {full_name, email, password})
         console.log(response)
    }catch(error){
        throw new Error(error.message)
    }
}

export const signIn = async ({email, password}) =>{
    try{
        
        const response = await client.post('/api/users/login', {email, password})
         console.log('login success', response)
    }catch(error){
        console.log(error.message)
        throw new Error ('wrong email or password')
    }
}

export const getAllPosts = async () =>{
    try{
        const response = await client.get('/api/posts')
        console.log(response.data)
        return response.data
        
    }catch(error){
        console.log(error)
    }
} 

/* export const updateUser = async ({phone, avatar, pet, nick, photo, id}) =>{
    try{
         await client.put(`/api/v1/users/:${id}`, {phone, avatar, pet, nick, photo})
         console.log('update success')
    }catch(error){
        throw new Error (error.message)
    }
} */

/* export const getUserById = async ()=>{
    try{
        const response = await client.get(`/api/v1/users/${response.data.id}`)
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
} */



