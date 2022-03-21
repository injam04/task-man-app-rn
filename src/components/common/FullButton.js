import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../utils/styles/globalStyles';

const FullButton = (props) => {
  const { name, handlePress } = props;

  return (
    <Pressable
      style={[styles.container, globalStyles.primaryColorBg]}
      onPress={handlePress}
    >
      <Text style={styles.btnTxt}>{name}</Text>
    </Pressable>
  );
};

export default FullButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  btnTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    paddingVertical: 15,
    fontSize: 14,
  },
});
