import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
      fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 10
  },
  viewStyle: {
    backgroundColor: '#f3f3f3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'relative'
  }
};
export default Header;
