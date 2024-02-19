import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'

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
      
         <TouchableOpacity>
          <Text style={styles.regi}> Register</Text>
    </TouchableOpacity>  
    <View style={styles.icons}>
<Icon name='facebook' color='blue' style={{padding:5,borderRadius:150,}}/>
<Icon name='google' type='font-awesome'style={{padding:5,}}/>
<Icon name='apple' type='font-awesome'style={{padding:5,}}/> 
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    borderRadius:100,
    borderTopEndRadius:100,
    borderTopStartRadius:100,
    
  },
   email:{
    margin:5,
    padding:5,
     borderRadius:100,
     borderTopEndRadius:100,
    borderTopStartRadius:100,
    
  },
   pass:{
    margin:5,
    padding:5,
    borderRadius:100,
     borderTopEndRadius:100,
    borderTopStartRadius:100,
    
  },
  regi:{
    color:'white',
    textAlign:'center',
    backgroundColor:'black',
    padding:15,
    margin:10,
    borderRadius:100,
  },
  icons:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'space-around',
    padding:20,
  },
});
