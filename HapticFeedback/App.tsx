import {
  View,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import React, {FC, useState} from 'react';

import DiceOne from './src/assets/images/One.png';
import DiceTwo from './src/assets/images/Two.png';
import DiceThree from './src/assets/images/Three.png';
import DiceFour from './src/assets/images/Four.png';
import DiceFive from './src/assets/images/Five.png';
import DiceSix from './src/assets/images/Six.png';

import Dice from './src/components/Dice';

import {trigger} from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App: FC = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDice = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    switch (diceNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      default:
        setDiceImage(DiceSix);
    }

    // Trigger haptic feedback
    trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageURL={diceImage} />
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={rollTheDice}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#807979' : '#4c4949',
              },
              styles.button,
            ]}>
            <Text style={styles.buttonText}>Roll The Dice</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    paddingHorizontal: 5,
    marginTop: 2,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF2F2',
    fontSize: 17,
  },
});

export default App;
