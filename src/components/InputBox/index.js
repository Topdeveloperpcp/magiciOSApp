import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function InputBox(props) {
  const [values, setValues] = useState({
    state: false,
  });
  const {state} = values;

  useEffect(() => {
    if (props.placeholder === 'Password') {
      setValues({...values, state: true});
    }
  }, [props]);

  return (
    <TextInput
      secureTextEntry={state}
      onChangeText={(text)=>props.onChange(text)}
      style={{
        width: wp(50),
        height: hp(5),
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 0,
      }}
      placeholder={props.placeholder}
    />
  );
}

export default InputBox;
