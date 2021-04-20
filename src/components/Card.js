import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={style}>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  padding: 10
});
