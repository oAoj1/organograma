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

  return (
    <div className="App">
      <Banner/>
      <Formulario ColaboradorCadastrado={colaborador => ColaboradorAdicionado(colaborador)}/>

      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>

    </div>
  );
}

export default App;
