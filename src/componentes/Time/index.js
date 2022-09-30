import './Time.css'

const Time = (props) =>{
    return(
        <section style={
            {backgroundColor:props.secundaria}
        }
        className='time-content'>

            <h3 style={
                {borderColor:props.primaria}
            }>
                {props.nome}
            </h3>
        </section>
    )
}

export default Time