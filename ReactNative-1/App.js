import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Image  style={styles.img} source={require('./assets/img.jpg')} />
       <StatusBar style="auto" /> 
       <Text style={styles.reg} >Register</Text> 
      </View>
        <TextInput style={styles.inputs} label='Username' mode='flat'placeholder='Useramee'/>
        <TextInput style={styles.email} label='Email' mode='flat'placeholder='Useramee'/>
        <TextInput style={styles.pass} label='Password' mode='flat'placeholder='Useramee'/>
        <TextInput style={styles.regi} label='Register' mode='flat'placeholder='Useramee'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  reg:{
    textAlign:'center',
    fontWeight:'900',
    fontSize:20,
  },
  img:{
    width:'100%',
    // margin:10,
  },
  inputs:{
    margin:5,
    padding:5,
    
  },
   email:{
    margin:5,
    padding:5,
    
  },
   pass:{
    margin:5,
    padding:5,
    
  },
   regi:{
    margin:5,
    padding:5,
    
  },
});