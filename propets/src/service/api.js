import axios from 'axios'

const client = axios.create({
    baseURL: 'http://propets.telran-edu.de:8080'
})

client.interceptors.response.use(
    response => {
        console.log(response)
        if(response.config.url.startsWith('/api/v1/auth/signin')){
            localStorage.setItem('TOKEN', response.headers['access-token'])
        }
        return response
    },
    function (error){
        if(error.response.status === 401){
            localStorage.removeItem('TOKEN')
        }
        return Promise.reject(error)
    }
)

client.interceptors.request.use(
    config =>{
        if(
            !config.url.startsWith('/api/v1/auth')
        ){
            config.headers = {
                'Access-Token':localStorage.getItem('TOKEN') || ''
            }
        }
    }
)

export const signUp = async (fullName, email, password) =>{
    try{
         const response = await client.post('/api/v1/auth/signup', {fullName, email, password})
         await client.get(`/api/v1/users/${response.data}`)
         console.log(response.data)
    }catch(error){
        throw new Error(error.message)
    }
}

export const signIn = async (email, password) =>{
    try{
         await client.post('/api/v1/auth/signin', {email, password})
         console.log('sig in success')
    }catch(error){
        throw new Error (error.message)
    }
}