import React, { useContext } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

import DefaultContext from '../context/DefaultContext';

const Form = () => {
  let {  nome, setNome, curso, setCurso, periodo, setPeriodo, turno, setTurno } = useContext(DefaultContext);
  let { Item } = Picker;
  return (
    <View style={style.container}>
      <Text style={style.label}> Selecione os Parametros: </Text>
      <input
        style={style.input}
        placeholder="Digite seu nome"
        onChangeText={text => setNome(text)}
      />
      <Picker
        selectedValue={curso}
        style={style.input}
        onValueChange={itemValue => setCurso(itemValue)}
        placeholder="Selecione seu curso"
      >
        <Item label="Agronomia" value="agronomia"/>
        <Item label="Direito" value="direito"/>
        <Item label="Zootecnia" value="zootecnia"/>
      </Picker>

      <Picker
        selectedValue={periodo}
        style={style.input}
        onValueChange={itemValue => setPeriodo(itemValue)}
        placeholder="Selecione seu periodo"
      >
        <Item label="1°" value="1"/>
        <Item label="2°" value="2"/>
        <Item label="3°" value="3"/>
      </Picker>

      <Picker
        selectedValue={turno}
        style={style.input}
        onValueChange={itemValue => setTurno(itemValue)}
        placeholder="Selecione seu turno"
      >
        <Item label="Noturno" value="noturno"/>
        <Item label="Diurno" value="diurno"/>
      </Picker>

      <View>
        <Text style={style.label}>Informações inseridas: </Text>
        <Text>
          <Text style={style.label}>Nome: </Text>
          {nome}
        </Text>
        <Text>
          <Text style={style.label}>Curso: </Text> 
          {curso}
        </Text>
        <Text>
          <Text style={style.label}>Periodo: </Text> 
          {curso}
          <Text style={style.label}>Turno: </Text>
          {turno}
        </Text>
      </View>
    </View >
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  label: {
    fontSize: 15,
    fontWeight: bold
  },
  input: {
    fontSize: 12,
    borderWidth: 1,
    margin: 5,
    textAlign: 'center'
  }
})

export default Form;