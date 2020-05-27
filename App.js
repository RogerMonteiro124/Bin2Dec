/**
 * Author: Roger Monteiro <https://githu.com/rogermonteiro124>
 * Application: Bin2Dec
 * Objective: https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md
 **/

import React,{useState,useEffect}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

const App= () => {
  const [inputNumber, setInputNumber] = useState("");
  const [ResultNumber, setResultNumber] = useState("");
  
  const clearFilds=()=>{
    setInputNumber("");
    setResultNumber("");
  }
  const filtra = ()=>{
    if(inputNumber.replace(/([2-9])/g,'') != inputNumber){
      Alert.alert("Fora de contexto","Informar um número binário")
      clearFilds();
    }else{
      binariToDecimal();
    }
  }
  
  const binariToDecimal = () => {
    let resultado = parseInt(inputNumber,2)
    setResultNumber("Decimal:"+resultado)  
  };
  return (
    <>
      <View style={{flex:1, alignContent:"center",alignItems:"center"}}>
        <TextInput
          style={styles.input}
          placeholder="Insira um número binário"
          keyboardType="numeric"
          maxLength={8}
          onChangeText={(number) => setInputNumber(number)}
        ></TextInput>
        <Button title="Converter" onPress={filtra}></Button>
        <View>
          <Text style={styles.texto}>{ResultNumber}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  texto:{
    fontSize:30,
    color:"blue",
    alignItems:"center",
    marginTop:10
  },
  input:{
    fontSize:30,
    color:"green",
    marginTop:20
  }
});

export default App;
