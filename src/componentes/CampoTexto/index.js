import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholder_mod = `${props.placeholder}`
    const label_mod = `${props.label}`

    return(
        <div className="campo-texto">
            <label>{label_mod}</label>
            <input placeholder={placeholder_mod} />
        </div>
    )
}

export default CampoTexto