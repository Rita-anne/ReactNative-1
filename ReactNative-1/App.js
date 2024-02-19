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
        <TextInput style={styles.inputs} label='Username' mode='flat'underlineColor='#ffffe6' placeholder='Useramee'
        left={<TextInput.Icon icon={'account' } style={{backgroundColor:'#ffccb3', borderRadius:100, color:' #ffd480'}} />}/>
        <TextInput style={styles.email} label='Email' mode='flat' underlineColor='#ffffe6'placeholder='Useramee'
         left={<TextInput.Icon icon={'email' } style={{backgroundColor:'#ccffeb', borderRadius:100}} />}/>
        <TextInput style={styles.pass} label='Password' mode='flat' underlineColor='#ffffe6'placeholder='Useramee'
         left={<TextInput.Icon icon={'lock' } style={{backgroundColor:'#b3d9ff', borderRadius:100}} />}/>  
      
         <TouchableOpacity>
          <Text style={styles.regi}> Register</Text>
    </TouchableOpacity>  
    <View style={styles.icons}>
<Icon name='facebook' color='blue' style={{backgroundColor:'white',borderRadius:100, padding:15,}}/>
<Icon name='google' type='font-awesome'style={{backgroundColor:'white', borderRadius:100,padding:15}}/>
<Icon name='apple' type='font-awesome'style={{backgroundColor:'white',borderRadius:100,padding:15}}/> 
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding:5,
  },
  reg:{
    textAlign:'center',
    fontWeight:'900',
    fontSize:20,
    padding:5,
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
    padding:25,
    margin:10,
    borderRadius:100,
  },
  icons:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'space-around',
    padding:15,
  },
});
