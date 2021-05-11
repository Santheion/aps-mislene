import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { AsyncStorage } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function getStorage() {
      const productStorage = await AsyncStorage.getItem('counter');

      if (productStorage) {
        setCounter(Number(productStorage));
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('counter', counter);
    }
    saveStorage();
  }, [counter]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.data}>
          <Text>Counter: {counter}</Text>

          <View style={styles.add}>
            <TextInput
              style={styles.textInput}
              placeholder='0'
              value={counter}
              editable={false}
            />

            <TouchableHighlight
              style={styles.button}
              onPress={() => setCounter(counter + 1)}
            >
              <Text style={{ fontWeight: 'bold' }}>+</Text>
            </TouchableHighlight>
            
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                if(counter > 2)
                  setCounter(counter + 1)
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  body: {
    flexDirection: 'row',
    width: 270,
    height: 150,
    borderRadius: 8,
    borderWidth: 2
  },
  data: {
    flexDirection: 'column',
    width: 150,
    margin: 15
  },
  add: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    width: 60,
    height: 30,
    padding: 5
  },
  button: {
    backgroundColor: '#99D178',
    width: 30,
    marginLeft: 10,
    borderRadius: 15
  }
});