import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>Albums</Text>
    </View>
  );
};
const styles = {
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 10
  },
  viewStyle: {
    backgroundColor: '#f00'
  }
};
export default Header;
