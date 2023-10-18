import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

type StyleTypes = 'cardOne' | 'cardTwo' | 'cardThree';

interface List {
  id: number;
  title: string;
  style: StyleTypes;
}

const FlatCards = () => {
  const list: List[] = [
    {
      id: 1,
      title: 'One',
      style: 'cardOne',
    },
    {
      id: 2,
      title: 'Two',
      style: 'cardTwo',
    },
    {
      id: 3,
      title: 'Three',
      style: 'cardThree',
    },
    {
      id: 4,
      title: 'One',
      style: 'cardOne',
    },
    {
      id: 5,
      title: 'Two',
      style: 'cardTwo',
    },
    {
      id: 6,
      title: 'Three',
      style: 'cardThree',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <FlatList
          data={list}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={[styles.card, styles[item.style]]}>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    fkex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5334',
  },
  cardTwo: {
    backgroundColor: '#50D884',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});

export default FlatCards;
