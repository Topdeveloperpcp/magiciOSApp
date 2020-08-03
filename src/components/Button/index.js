import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Text, ImagePropTypes} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Button(props) {    
  return (
    <TouchableOpacity
      onPress={props.onPress}
      
      style={{
        backgroundColor: '#16e5a4',
        width: wp(30),
        height: hp(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
      }}>
      <Text style={{color: 'white'}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
