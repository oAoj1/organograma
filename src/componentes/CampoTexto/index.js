import './CampoTexto.css'

const CampoTexto = (props) => {

    const Digitando = (evento) =>{
        props.Alterar(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input 
                value={props.valor} 
                onChange={Digitando}
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto
