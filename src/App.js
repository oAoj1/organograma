import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores,setColaboradores] = useState([])

  const ColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador);
    setColaboradores([colaboradores,colaborador])
  }

  const times = [
    {
      nome:'Programação',
      cor1:'#57C278',
      cor2:'#D9F7E9',
    },
    {
      nome:'Front-End',
      cor1:'#82CFFA',
      cor2:'#E8F8FF',
    },
    {
      nome:'Data Science',
      cor1:'#A6D157',
      cor2:'#F0F8E2',
    },
    {
      nome:'Devops',
      cor1:'#E06B69',
      cor2:'#FDE7E8',
    },
    {
      nome:'UX e Design',
      cor1:'#D86EBF',
      cor2:'#FAE9F5',
    },
    {
      nome:'Mobile',
      cor1:'#FEBA05',
      cor2:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      cor1:'#FF8A29',
      cor2:'#FFEEDF',
    },
  ]

  return (
    <div className="App">
      <Banner/>
      <Formulario 

        times={
          times.map(
            time => time.nome
          )
        }

        ColaboradorCadastrado={
          colaborador => ColaboradorAdicionado(colaborador)
        }

      />

      {times.map(
          time => (
            <Time key={time.nome}
              nome={time.nome}
              primaria={time.cor1}
              secundaria={time.cor2}
            />
          )
        )
      }

    </div>
  );
}

export default App;
