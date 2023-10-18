import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Props {
  includeUppercase: boolean;
  includeNumber: boolean;
  includeSpecialChars: boolean;
  handleIncludeUppercase: (isChecked: boolean) => void;
  handleIncludeNumber: (isChecked: boolean) => void;
  handleIncludeSpecialChars: (isChecked: boolean) => void;
}

const PasswordOptions: FC<Props> = ({
  includeUppercase,
  includeNumber,
  includeSpecialChars,
  handleIncludeUppercase,
  handleIncludeNumber,
  handleIncludeSpecialChars,
}) => {
  return (
    <View>
      <View style={styles.passwordOptions_text}>
        <Text>Include Lowecase</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#29aB87"
          // eslint-disable-next-line react-native/no-inline-styles
          innerIconStyle={{borderWidth: 2}}
          isChecked={true}
          disabled
        />
      </View>
      <View style={styles.passwordOptions_text}>
        <Text>Include Uppercase</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#F0AA1D"
          // eslint-disable-next-line react-native/no-inline-styles
          innerIconStyle={{borderWidth: 2}}
          isChecked={includeUppercase}
          onPress={(isChecked: boolean) => handleIncludeUppercase(isChecked)}
          key={`uppercase-${includeUppercase}`}
        />
      </View>
      <View style={styles.passwordOptions_text}>
        <Text>Include Number</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#7925c7"
          // eslint-disable-next-line react-native/no-inline-styles
          innerIconStyle={{borderWidth: 2}}
          isChecked={includeNumber}
          onPress={(isChecked: boolean) => handleIncludeNumber(isChecked)}
          key={`number-${includeNumber}`}
        />
      </View>
      <View style={styles.passwordOptions_text}>
        <Text>Include Special Chars</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#6d4551"
          // eslint-disable-next-line react-native/no-inline-styles
          innerIconStyle={{borderWidth: 2}}
          isChecked={includeSpecialChars}
          onPress={(isChecked: boolean) => handleIncludeSpecialChars(isChecked)}
          key={`specialchars-${includeSpecialChars}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordOptions_text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default PasswordOptions;
