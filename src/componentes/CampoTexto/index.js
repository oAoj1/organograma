import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholder_mod = `${props.placeholder}`
    const label_mod = `${props.label}`

    let valor = ''

    const Digitando = (evento) =>{
        valor = evento.target.value
        console.log(valor);
    }

    return(
        <div className="campo-texto">
            <label>
                {label_mod}
            </label>
            <input value={valor} onChange={Digitando} required={props.obrigatorio} placeholder={placeholder_mod} />
        </div>
    )
}

export default CampoTexto
