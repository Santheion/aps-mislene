import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axiosGetAll from '../axiosGetAll';
import ItemCard from './ItemCard';

function renderItem({ item }) {
  return <ItemCard item={item} />;
}

export default function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosGetAll().then(data => {
      setItems(data);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Itens</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    padding: 15
  },
  list: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 10
  }
});
