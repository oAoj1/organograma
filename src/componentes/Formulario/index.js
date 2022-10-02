import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = (props) => {
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const Salvar = (event) => {
      event.preventDefault()
      props.ColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('')
      setCargo('')
      setImagem('')
      setTime('')
    }
    
    return (
      <section className='formulario'>
        <form onSubmit={Salvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>

          <CampoTexto 
            valor={nome} 
            Alterar={valor => setNome(valor)} 
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite seu nome"
          />

          <CampoTexto 
            valor={cargo} 
            Alterar={valor => setCargo(valor)} 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"
          />

          <CampoTexto 
            valor={imagem} 
            Alterar={valor => setImagem(valor)} 
            label="Imagem"
            placeholder="Informe o endereço da sua imagem"
          />

          <ListaSuspensa 
            obrigatorio={true}
            label="Defina seu time" 
            alternativas={props.times}
            valor={time}
            Alterar={valor => setTime(valor)}
          />

          <Botao>
            Criar card
          </Botao>

        </form>
      </section>
    );
};

export default Formulario;
