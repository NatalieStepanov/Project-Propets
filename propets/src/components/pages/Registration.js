import './../../css/Registration.css'
import logo from './../../images/Logo.svg'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Field from '../Field'
import { useForm, set } from 'react-cool-form'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { registrationAction } from '../../store/auth'
import { useDispatch } from 'react-redux'
import { signUp } from '../../service/api'


const Registration = () => {

    // const dispatch = useDispatch()

    const yupSchema = yup.object().shape({
        full_name: yup.string().typeError('must be string').required('required'),
        email: yup.string().email().required('required'),
        password: yup.string().min(6).required('required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Not a password match').min(6).required('required')
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
        defaultValues: { email: '', password: '', full_name:'', confirmPassword: '' },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, event, e) => {
            console.log(values)
            console.log(e.submitter.name)
            if(e.submitter.name === 'reg'){
                signUp(values)
            }
            history.push('/profile')
            
        }
    })

    const errors = use('errors', { errorWithTouched: true })

    const history = useHistory()

    return (
        <div className="main-registration">
            <div className="main-wrapper-reg">
                <form ref={form} noValidate>
                    <div className="title-reg">
                        <img src={logo} alt='logo' />
                        <h1>Welcome!</h1>
                    </div>
                    <button className="main-btn-reg">Sign up</button>
                    <div className="form-fields">
                        <Field
                            label="Name: "
                            id="full_name"
                            name="full_name"
                            placeholder="type your name"
                            error={errors.full_name}
                        />
                        <br />
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
                            placeholder="type password"
                            error={errors.password}
                        />
                        <br />
                        <Field
                            label="Password: "
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            error={errors.confirmPassword}
                        />
                        <p className="text-under-password">Please re-enter your password</p>
                    </div>
                    <hr />
                    <div className="reg-footer">
                        <p className="reg-text-footer">Password must have at least 8 characters with at least one<br />
                            Capital letter, at least one lower case letter and at least one<br /> number or special character.</p>
                        <div className="reg-main-btns">
                            <button name="cancel" 
                                    className="reg-btn-cancel"
                                    onClick={()=>{
                                        history.push('/home')
                                    }}>Cancel</button>
                            <button name="reg" 
                                    className="reg-btn-submit"
                                    onClick={()=>{
                                        
                                    }}
                            ><FontAwesomeIcon icon={faPaw} className="left-icon" /> Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div >

    )
}

export default Registration

