import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {
  error: string;
}

const FormError: FC<Props> = ({error}) => {
  return (
    <View>
      <Text style={styles.formError_text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formError_text: {
    color: 'red',
  },
});

export default FormError;
