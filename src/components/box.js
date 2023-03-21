import { LinearGradient } from 'expo-linear-gradient';
import {View,TextInput,TouchableOpacity, Text, } from 'react-native'
import estilo from  '../estilos.js';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Box() {
    return(
        <View style = {estilo.box}>

        <View style ={estilo.viewIcons}>
        <Feather name="user" size={24} color="black" />
        <TextInput style = {estilo.input} placeholder='e-mail' />
        </View>
  
        <View style ={estilo.viewIcons}>
        <Ionicons name="key" size={24} color="black" />
        <TextInput style = {estilo.input} placeholder='senha' />
        </View>
        <TouchableOpacity style = {{width:'80%'}}>
          <LinearGradient
          colors = {['green', 'brown']}
          style = {estilo.button}
          >
  
            <Text style={estilo.text}>Entrar</Text>
           
  
          </LinearGradient>
         
  
        </TouchableOpacity>
  
      </View>
    );
} 