import avatar from './../../../images/avatar1.png'
import pet from './../../../images/asset-45.jpg'
import { faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './../../../css/Profile.css'
import Field from '../../Field'
import { useForm } from 'react-cool-form'
import { useHistory } from 'react-router-dom'
import { updateUser } from '../../../service/api'


const Profile = () => {



    /* const { form } = useForm({
        defaultValues: { email: '', phone: '', avatar:'', pet:'', nick:'', photo:'' },
        // validate: validateWithYup(yupSchema),
        onSubmit: (values, event, e) => {
            console.log(values)
            console.log(e.submitter.name)
            if(e.submitter.name === 'save'){
               updateUser(values)
            }
        }
    })

    const history = useHistory() */

    return (
        <div className="profile-wrapper">
            <h1>Profile</h1>

            {/* <h4>Your profile. Change, edit and manage your data.</h4>
            <div className="profile-title">
                <p>My profile</p>
            </div>
            <div className="profile-name">
                <img src={avatar} alt="avatar" />
                <p>Anna Smith
                    <FontAwesomeIcon icon={faPencilAlt} className="pencil-icon" />
                </p>
            </div>
            <div className="profile-form-wrapper">
                <form ref={form} noValidate>
                    <div className="profile-form-fields">
                        <Field
                            label="Email: "
                            id="email"
                            name="email"
                            placeholder="helenjohnson@gmail.com"
                        />
                        <br />
                        <Field
                            label="Phone: "
                            id="phone"
                            name="phone"
                            placeholder="000-000-00-00"
                        />
                        <br />
                        <Field
                            label="Avatar: "
                            id="avatar"
                            name="avatar"
                            placeholder="anna_portret.jpg"
                        />
                    </div>
                    <div className="profile-pet">
                        <div className="profile-form-fields form-pet">
                            <Field
                                label="My pet: "
                                id="pet"
                                name="pet"
                                placeholder="Dog"
                            />
                            <br />
                            <Field
                                label="Nick: "
                                id="nick"
                                name="nick"
                                placeholder="Uncle Sam"
                            />
                            <br />
                            <Field
                                label="Photo: "
                                id="photo"
                                name="photo"
                                placeholder="mydog.jpg"
                            />
                        </div>
                        <img src={pet} alt="avatar pet" />
                    </div>
                    <button className="profile-btn"
                        name="save"
                        onClick={() => {
                            history.push('/posts')
                        }}><FontAwesomeIcon icon={faSave} className="save-icon" />Save changes</button>

                </form>
            </div> */}
        </div>

    )
}

export default Profile