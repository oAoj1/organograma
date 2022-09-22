import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = () => {
    const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão'
    ]

    const Salvar = (event) => {
      event.preventDefault()
      console.log('Formulario enviado');
    }
    
    return (
      <section className='formulario'>
        <form onSubmit={Salvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
          <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
          <CampoTexto label="Imagem" placeholder="Informe o endereço da sua imagem"/>
          <ListaSuspensa obrigatorio={true} label="Defina seu time" item={times}/>
          <Botao>
            Criar card
          </Botao>
        </form>
      </section>
    );
};

export default Formulario;
