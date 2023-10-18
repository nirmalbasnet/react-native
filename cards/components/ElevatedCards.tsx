import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardElevated_text}>😇</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cardElevated_text: {
    color: '#141516',
    fontWeight: 'bold',
  },
});

export default ElevatedCards;
