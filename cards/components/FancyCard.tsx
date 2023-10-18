import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/03/56/31/17/360_F_356311787_4j9CXZfn1F4Vp2mWRLkHzkLwOf8ofSsZ.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Red Fort</Text>
          <Text style={styles.cardLabel}>Delhi, 110006, India</Text>
          <Text style={styles.cardDescription}>
            The Red Fort or Lal Qila is a historic fort in the Old Delhi
            neighbourhood of Delhi, India, that historically served as the main
            residence of the Mughal emperors. Emperor Shah Jahan commissioned
            construction of the Red Fort on 12 May 1638, when he decided to
            shift his capital from Agra to Delhi.
          </Text>
          <Text style={styles.cardFooter}>100 KM Away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    paddingBottom: 12,
  },
  cardElevated: {
    backgroundColor: '#e6e6e6',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#191919',
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000',
  },
});

export default FancyCard;
