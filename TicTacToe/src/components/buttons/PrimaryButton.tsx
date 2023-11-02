import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import buttonStyles from '../../assets/styles/buttons.styles';

interface Props {
  text: string;
  rounded?: boolean;
}

const PrimaryButton: FC<Props> = ({text, rounded}) => {
  return (
    <View
      style={[
        buttonStyles.primaryButton,
        rounded ? buttonStyles.rounded : null,
      ]}>
      <TouchableOpacity>
        <Text style={buttonStyles.primaryButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
