/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import InputComponent from './src/components/input';
const LuckyNumber = () => {
  const [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [luckyNum, setLuckyNum] = useState(0);
  const showLuckyNumber = () => {
    Alert.alert('Hello ' + name, 'Your lucky number is: ' + luckyNum);
  };
  const emptyAlert = () => {
    Alert.alert('ERROR', 'Fill all data');
  };
  const isEmpty = () => {
    if (name === '' || age === '') {
      return true;
    } else {
      return false;
    }
  };
  const invalidAge = () => {
    Alert.alert('INVALID AGE', 'Type a valid age');
  };

  const actionButton = () => {
    let ageInt = parseInt(age, 10);
    if (isEmpty() === true) {
      emptyAlert();
    } else {
      if (ageInt <= 0 || ageInt > 115) {
        invalidAge();
      } else {
        let tens = Math.trunc((ageInt * 7) / 10);
        let units = (ageInt * 7) % 10;
        setLuckyNum((luckyNum = tens + units));
        if (luckyNum > 9) {
          do {
            tens = Math.trunc(luckyNum / 10);
            units = luckyNum % 10;
            setLuckyNum((luckyNum = tens + units));
          } while (luckyNum > 9);
          showLuckyNumber();
        } else {
          setLuckyNum((luckyNum = tens + units));
          showLuckyNumber();
        }
      }
    }
  };
  return (
    <>
      <View style={styles.ViewImage}>
        <Image
          source={require('./src/Asset/img/logo.png')}
          style={styles.Image}
        />
      </View>
      <View>
        <Text style={styles.Title}>LUCKY NUMBER</Text>
        <Text style={styles.description}>Get your lucky number rigth now!</Text>
      </View>
      <ScrollView style= {{marginTop:18}}>
      <View style={styles.ViewInputs}>
          <InputComponent
            placeholder="Name"
            keyboardType="default"
            value={name}
            onChangeText={username => setName(username)}
          />
          <InputComponent
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={userAge => setAge(userAge)}
            value={age}
          />
          <View style={styles.ViewButton}>
            <Button color="#926B11" title="Get" onPress={actionButton} />
          </View>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ViewImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    padding: 5,
    marginTop: 30,
    backgroundColor: 'white',
  },
  Title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Arial',
    color: '#1E1E1F',
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontStyle: 'italic',
    marginTop: 10,
  },
  Image: {
    width: '55%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderColor: 'black',
  },
  ViewInputs: {
    alignItems: 'center',
  },
  ViewButton: {
    marginTop: 15,
    width: '70%',
    alignSelf: 'center',
    letterSpacing: 2,
    height: 50,
  },
});
export default LuckyNumber;
