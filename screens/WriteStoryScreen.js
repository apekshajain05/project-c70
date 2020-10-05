import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
     <Header 
     backgroundColor='pink'
     centerComponent={{
        text: 'Story Hub',
    style: { color: '#fff', fontSize: 25,width:260,paddingLeft:15,paddingBottom:25,fontFamily:'cursive',height:35 },
      }}
     />
    <TextInput placeholder="Title of the Story" style={[styles.inputBox,{marginTop:40,height:50}]} />
    <TextInput placeholder="Author of the Story" style={[styles.inputBox,{height:50}]} />
    <TextInput placeholder="Write the Story" style={[styles.inputBox,{height:300}]} multiline={true} />
      <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    
    width:350,
    borderWidth:3,
    margin:10,
  },
  submitButton:{
    backgroundColor: 'pink',
    padding: 10,
    marginBottom: 20,
    marginLeft: 10,
    width:70,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
      color:"black",
      fontFamily:'bold',
    fontSize: 20,
  },
});