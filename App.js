import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ItemsList from './src/components/ItemsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ItemsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});
