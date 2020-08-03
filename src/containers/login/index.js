import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';

function Login({navigation}) {
  const [values, setValues] = useState({
    state: false,
  });
  const {state} = values;

  const goPasswordInput = () => {
    setValues({...values, state: true});
  };

  const goFingerPrint = () => {
    navigation.navigate("FingerPrint")
  };

  const onChangeText = () => {

  }

  if (!state) {
    return (
      <ScrollView>
        <View
          style={{
            height: hp(100),
            width: wp(100),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>Please input your Email</Text>
          <View style={{marginVertical: 50}}>
            <InputBox placeholder="Email" onChange={onChangeText} id="password"/>
          </View>
          <Button title="Next" onPress={goPasswordInput} />
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <View
        style={{
          height: hp(100),
          width: wp(100),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>Please input your Password</Text>
        <View style={{marginVertical: 50}}>
          <InputBox placeholder="Password" id="password"/>
        </View>
        <Button title="Next" onPress={goFingerPrint}/>
      </View>
    </ScrollView>
  );
}

export default Login;
