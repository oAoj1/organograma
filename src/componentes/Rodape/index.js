import './Rodape.css'

const Rodape = () =>{
    return(
        <footer>
            <div className='rodape-content'>
                <div className='social-medias'>
                    <ul>
                        <li><img src='./imagens/fb.png'/></li>
                        <li><img src='./imagens/tw.png'/></li>
                        <li><img src='./imagens/ig.png'/></li>
                    </ul>   
                </div>

                <div className='logo-organo'>
                    <img src='./imagens/logo.png'/>
                </div>

                <div className='descricao'>
                    <p>Desenvolvido por Alura.</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape