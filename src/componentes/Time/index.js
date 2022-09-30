import './Time.css'

const Time = (props) =>{
    return(
        <section className='time-content' style={{backgroundColor:props.secundaria}}>

            <h3 style={{borderColor:props.primaria}}>
                {props.nome}
            </h3>
        </section>
    )
}

export default Time