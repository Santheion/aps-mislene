import React, { Fragment, useState } from 'react';
import {View, StatusBar} from 'react-native';
import Form from './components/Form';
import DefaultContext from './context/DefaultContext';

const App = ()=>{
  let [nome,setNome] = useState("Douglas Silva Oliveira"),
  [curso,setCurso] = useState("Sistemas de informacao"),
  [periodo,setPeriodo] = useState("7°"),
  [turno,setTurno] = useState("Noturno");
  return (
    <Fragment>
     <StatusBar backgroundColor="#3d8af7"/>
      <View>
        <DefaultContext.Provider
          value={{ nome, setNome, curso, setCurso, periodo, setPeriodo, turno, setTurno }}
        >
          <Form/>
        </DefaultContext.Provider>
      </View>
    </Fragment>
  )
}
export default App;