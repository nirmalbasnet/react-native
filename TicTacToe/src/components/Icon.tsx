import {View} from 'react-native';
import React, {FC} from 'react';
import iconStyles from '../assets/styles/icon.styles';

interface Props {
  size?: number;
}

const Icon: FC<Props> = ({size = 160}) => {
  if (size <= 0) {
    return;
  }
  const containerSize = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const innerCircleSize = size / 4;
  const innerCircle = {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize / 2,
  };

  return (
    <View style={iconStyles.container}>
      <View style={[iconStyles.subContainer, containerSize]}>
        <View style={iconStyles.topHalf}>
          <View style={{marginRight: 18}}>
            <View style={[iconStyles.innerCircle, innerCircle]} />
          </View>
          <View style={[iconStyles.xIconWrapper, innerCircle]}>
            <View style={iconStyles.xIconBefore} />
            <View style={iconStyles.xIconAfter} />
          </View>
        </View>
        <View style={iconStyles.bottomHalf}>
          <View
            style={[iconStyles.xIconWrapper, innerCircle, {marginRight: 18}]}>
            <View style={iconStyles.xIconBefore} />
            <View style={iconStyles.xIconAfter} />
          </View>
          <View>
            <View style={[iconStyles.innerCircle, innerCircle]} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Icon;
