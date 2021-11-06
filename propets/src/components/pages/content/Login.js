import { Link } from 'react-router-dom'
import './../../../css/Login.css'
import logo from './../../../images/Logo.svg'
import Field from '../../Field'
import { useForm, set } from 'react-cool-form'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';


const Login = () => {
    const yupSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
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

        }
    })

    const errors = use('errors', { errorWithTouched: true })

    const history = useHistory()

    return (
        <div className="main">
            <div className="main-wrapper">
                <form ref={form} noValidate>
                    <div className="title">
                        <img src={logo} alt='logo' onClick={() => { history.push(`/`) }} />
                        <h1>Welcome!</h1>
                    </div>
                    <button className="main-btn">Sign in</button>
                    <br />
                    <Field
                        label="Email: "
                        id="email"
                        name="email"
                        placeholder="type your email"
                        error={errors.email}
                    />
                    <br />
                    <br />
                    <Field
                        label="Password: "
                        id="password"
                        name="password"
                        placeholder="type your password"
                        error={errors.password}
                    />
                    <br />
                    <p className="text-signup">Not registrered yet? <Link className="main-link">Sign up</Link></p>
                    <hr />
                    <div className="main-btns">
                        <button name="cancel">Cancel</button>
                        <button name="login">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login