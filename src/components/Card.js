import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.container, shadow]}>
            {props.children}
        </View>
    );
};

const shadow = {
  shadowColor: '#ff001b',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,
  shadowRadius: 2,
  elevation: 2
}

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
