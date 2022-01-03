import './../css/Error.css'

const Error = ({ text }) => {
    return (
        <div className="error-box">
            <p className="error">{text}</p>
        </div>
    )
}

export default Error