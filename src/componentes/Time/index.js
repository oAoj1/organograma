import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) =>{
    return(
        <section className='time-content' style={{backgroundColor:props.secundaria}}>

            <h3 style={{borderColor:props.primaria}}>
                {props.nome}
            </h3>

            {
                props.colaboradores.map(
                    colaborador => 
                        <Colaborador
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}  
                            imagem={colaborador.imagem}  
                        />
                )
            }

        </section>
    )
}

export default Time