import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const id = route?.params?.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Écran des détails</Text>
      {id && <Text style={styles.detail}>ID reçu : {id}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 10 },
  detail: { fontSize: 18, color: 'gray' }
});
