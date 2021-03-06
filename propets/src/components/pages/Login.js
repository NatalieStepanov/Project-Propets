import { NavLink } from 'react-router-dom'
import './../../css/Login.css'
import logo from './../../images/Logo.svg'
import Field from '../Field'
import { useForm, set } from 'react-cool-form'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { loginAction } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../Error'
import { errorSelector } from '../../store/auth'
import { signIn } from '../../service/api'
import { Redirect } from 'react-router-dom'

// import { useSelector, useDispatch } from 'react-redux';
// import { appSelector, authSuccess } from '../../store/app'
// import { useEffect } from 'react';
// import { Redirect } from 'react-router-dom'
// import Loader from '../Loader'

const Login = () => {

    const dispatch = useDispatch()
    const error = useSelector(errorSelector)

    const yupSchema = yup.object().shape({
        email: yup.string().email().required('required'),
        password: yup.string().min(6).required('required')
    })

    const validateWithYup = (schema) => async (values) => {
        let errors = {}
        try {
            await schema.validate(values, { abortEarly: false })
        } catch (yupError) {
            yupError.inner.forEach(({ path, message }) => set(errors, path, message))
        }
        return errors
    }

    const { form, use } = useForm({
        defaultValues: { email: '', password: '' },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, event, e) => {
            console.log(values)
            console.log(e.submitter.name)
            if(e.submitter.name === 'login')
                // signIn(values)
                dispatch(loginAction(values))
                
                if(!error) history.push('/posts')
      
            /* .then((data) => {
                console.log(data.status)
                if (data.status === 200) */
            /* })
            .catch((e) => e); */
        }
    })

    const errors = use('errors', { errorWithTouched: true })

    const history = useHistory()

    return (
        <div className="main">
            <div className="main-wrapper">
                
                <form ref={form} noValidate>
                    <div className="title">
                        <img src={logo} alt='logo' />
                        <h1>Welcome!</h1>
                    </div>
                    <button className="main-btn">Sign in</button>
                    {error && <Error text = {error} />}
                   <div className="login-form-fields">
                    <Field
                        label="Email: "
                        id="email"
                        name="email"
                        placeholder="type your email"
                        error={errors.email}
                    />
                    <br />
                    <Field
                        label="Password: "
                        id="password"
                        type="password"
                        name="password"
                        placeholder="type your password"
                        error={errors.password}
                    />
                    </div>
                    <p className="text-signup">Not registrered yet? <NavLink className="main-link" to="/signup">Sign up</NavLink></p>
                    <hr />
                    <div className="main-btns">
                        <button className="login-btn-cancel"
                                name="cancel"
                                onClick={()=>{
                                    history.push('/home')
                                }}>Cancel</button>
                        <button className="login-btn-submit"
                                name="login"
                               /*  onClick={()=>{
                                    }} */
                                >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login