import './../../../css/AddPost.css'
import Field from '../../Field'
import TextArea from '../../TextArea'
import { useForm, set } from 'react-cool-form'
import * as yup from 'yup'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pet from './../../../images/asset-45.jpg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addPostAction } from '../../../store/posts'

const AddPost = () => {
    // const user = useSelector
    const dispatch = useDispatch()

    const yupSchema = yup.object().shape({
        title: yup.string().min(2).required('required'),
        text: yup.string().min(6).required('required'),
        photo: yup.string().required('required')
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
        defaultValues: { title: '', text: '', photo: '' },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, {reset}) => {
            console.log(values)
            dispatch(addPostAction(values))
            reset()
        }
    })

    const errors = use('errors', { errorWithTouched: true })

    return (
        <div className="addPost-wrapper">
            <h4>Your new post! Simply text, add photo and publish.</h4>
            <form ref={form} noValidate className="form-addPost">
                <Field
                    label="Title"
                    id="title"
                    name="title"
                    error={errors.title}
                    placeholder="The quick, brown fox jumps"
                />
                <br />
                <label className="label">Text:</label><br />
                <span>up to 1500 char</span>
                <TextArea
                    name="text"
                    error={errors.text}
                    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel. 
                    
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deleniti possimus dolorem eius dolores et cumque alias corporis illo, iure molestias nam sint omnis vel."
                />
                <br />
                <Field
                    label="Photo: "
                    id="photo"
                    name="photo"
                    error={errors.photo}
                    placeholder="photo url"
                />
                <div className="addPost-bottom">
                    <div className="addPost-user">
                        <img src={pet} alt="avatar"/>
                        <h4 className="addPost-userName">John Goodboy</h4>
                    </div>
                    <button className="addPost-btn"
                        name="publish"
                        onClick={() => {
                            // history.push('/posts')
                        }}><FontAwesomeIcon icon={faPaw} className="addPost-icon" />Publish</button>
                </div>
            </form>
        </div>
    )
}

export default AddPost