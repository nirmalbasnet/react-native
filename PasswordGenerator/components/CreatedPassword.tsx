import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {
  password: string;
}

const CreatedPassword: FC<Props> = ({password}) => {
  return (
    <View>
      <View style={styles.createdPasswordContainer}>
        <View style={styles.createdPasswordWrapper}>
          <Text selectable style={styles.createdPassword}>
            {password}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createdPasswordContainer: {
    height: 150,
  },
  createdPasswordWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#175d8b',
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
  },
  createdPassword: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff515',
  },
});

export default CreatedPassword;
