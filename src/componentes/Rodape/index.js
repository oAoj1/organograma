import './Rodape.css'

const Rodape = () =>{
    return(
        <footer>
            <div className="rodape-content">

                <div className='redes-sociais'>
                    <img src="./imagens/fb.png"/>
                    <img src="./imagens/tw.png"/>
                    <img src="./imagens/ig.png"/>
                </div>

                <div className='logo-organo'>
                    <img src="./imagens/logo.png"/>
                </div>
                    
                <div className='descricao'>
                    <p>Desenvolvido por <span>Alura</span>.</p>
                </div>    
                    
            </div>
        </footer>
    )
}

export default Rodape