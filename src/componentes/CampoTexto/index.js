import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder_mod = `${props.placeholder}`
    const label_mod = `${props.label}`
    const valor_mod = `${props.valor}`
    const obrigatorio = `${props.obrigatorio}`

    const Digitando = (evento) =>{
        props.Alterar(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {label_mod}
            </label>

            <input 
                value={valor_mod} 
                onChange={Digitando}
                required={obrigatorio} 
                placeholder={placeholder_mod}
            />
        </div>
    )
}

export default CampoTexto
