import {View} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import homeStyles from '../assets/styles/home.styles';
import Icon from '../components/Icon';

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <View>
        <View style={homeStyles.icon}>
          <Icon />
        </View>
        <View style={homeStyles.button}>
          <PrimaryButton text="Play with friend" rounded />
        </View>
        <View style={homeStyles.button}>
          <PrimaryButton text="Play with computer" rounded />
        </View>
      </View>
    </View>
  );
};

export default Home;
