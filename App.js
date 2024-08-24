//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, TextInput, Button, ImageBackground, Platform, 
  ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Alert,  
  Pressable,
  Switch} from 'react-native';

export default function App() {
  const[next, setnext] = useState(require("./assets/vue.png"))
  const [upswitch, setupswitch] = useState(false)

  const nextImg = () =>{
    setnext(require("./assets/wordPress.png"))
    console.log("i am working");
  }

  const login= ()=>{
    Alert.alert("Login Successfull")
  }

  return (
       <View style={styles.container}>
     {/* <View style={{paddingTop:Platform.OS === "android" ? StatusBar.height: 0}}>    */}
      <ScrollView>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, marginBottom:10, textDecorationLine:'underline'}}>IMAGE GALLARY  </Text>
        
        <Image source={next} style={{width:'100%'}} />
        < Button title='Change Image' color={'red'} onPress={nextImg}  />

        <Image source={require("./assets/angular2.png")} style={{marginTop:10, marginBottom:5, width:'100%'}}/>   
         
        <Image source={require("./assets/Bootstrap.png")} style={{marginBottom:5}} />
        <Image source={require("./assets/css.png")} style={{marginBottom:5}} />
        <Image source={require("./assets/GraphQL.png")} style={{marginBottom:5}} />
        <Image source={require("./assets/firebase.png")} style={{marginBottom:5 }} />
        <Image source={require("./assets/HTML.png")} style={{marginBottom:5 }} />
        <Image source={require("./assets/Javascript.png")} style={{marginBottom:5}} />
        <Image source={require("./assets/joomla.png")} style={{marginBottom:5}} />
        <Image source={require("./assets/laravel.png")} style={{marginBottom:5}} />
        
        {/* INPUT */}
        <TextInput placeholder='Inline Styling' style={{borderWidth:1, padding:5, margin:5, borderRadius:10}} />
        <TextInput placeholder='External Styling' style={styles.myStyle1} />
        
        <TouchableOpacity style={styles.button} onPress={login} >
          < Text style={{color:'black', textAlign:'center', }} > Touchable Login </Text>
        </TouchableOpacity>
        
        <Pressable onPress={login}>
          < Text style={{color:'black', textAlign:'center', }} > Pressable Login </Text>
        </Pressable>
 
      <Switch value={upswitch} onValueChange={()=>{upswitch===false?setupswitch(true): setupswitch(false)}}></Switch>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android" ? StatusBar.height:0,

    // alignItems: 'center',
     justifyContent: 'center',
  },
  myStyle1:{
    borderWidth:1, padding:5, marginVertical:5, borderRadius:10, 
  },
  button:{
    backgroundColor:"red", padding:5, marginVertical:20, borderRadius:10, width:"50%", justifyContent:'center'
  }

});
