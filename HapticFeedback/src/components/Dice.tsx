import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';

interface Props {
  imageURL: ImageSourcePropType;
}

const Dice: FC<Props> = ({imageURL}): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageURL} />
    </View>
  );
};

const styles = StyleSheet.create({
  diceImage: {
    width: '100%',
    height: '100%',
  },
});

export default Dice;
