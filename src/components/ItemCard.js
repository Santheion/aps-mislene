import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const categoryColors = {
  Perishable: 'red',
  'Non Perishable': 'blue'
};

export default function ItemCard({ item: { category, description, image } }) {
  return (
    <Card style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textWrapper}>
        <Text style={styles.description}>{description}</Text>
        <Text
          style={{
            ...styles.category,
            backgroundColor: categoryColors[category]
          }}
        >
          {category}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row'
  },
  image: {
    height: 80,
    width: 80
  },
  description: {
    fontSize: 20
  },
  category: {
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 18,
    padding: 5
  }
});
