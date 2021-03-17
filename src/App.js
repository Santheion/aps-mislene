import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BookClose from './Assets/close.png';
import BookOpen from './Assets/open.jpg';


const App = () => {
  const phrases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel semper nibh. Fusce dictum sapien a velit blandit sollicitudin.",
    "Praesent imperdiet neque eget tempus blandit. In venenatis euismod nibh eu auctor. Nullam aliquam eu erat vel vehicula.",
    "Aliquam elementum iaculis turpis, in elementum elit rutrum vel. Duis dignissim lacus sed maximus tempor. ",
    "Suspendisse ornare a velit elementum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "Donec dui tellus, mollis eget eros at, gravida fringilla arcu. "
  ]
  useEffect(() => { BookClose, BookOpen }, []);
  const [book, setBook] = useState(BookClose);
  const [phrase, setPhrases] = useState('Frase aqui.')

  function randomizeText() {
    setBook(BookOpen)
    setPhrases(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  return (
    <>
      <View style={style.container}>
        <Image source={book} style={style.book} />
        <Text style={style.text}>{phrase}</Text>
        <TouchableOpacity onPress={randomizeText}>
          <Text>Gerar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  book: {
    width: 100,
    height: 100
  },
  text: {
    justifyContent: 'center',
    textAlign: 'justify',
    color: "#03bafc",
    marginBottom: 30
    
  },
  btn: {
    width: 100,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#03bafc',
    display: 'flex',
    justifyContent: 'center'
  }
})


export default App;