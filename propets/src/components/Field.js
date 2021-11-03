import './../css/Field.css'

const Field = ({label, error, id, ...rest})=>(
    <>
       <label htmlFor={id} className="label">{label}</label>
       <input className="input" id={id} {...rest}/>
       {error && <div className="field-error">{error}</div>}
    </>
)

export default Field