import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'react-native';
import estilo from '../estilos';

export default function Header(){
    return(
        <LinearGradient
      colors ={['white', '#2a5df2']}
      style = {estilo.gradound}>
    <Image source = {{uri : 'https://t.ctcdn.com.br/QeJlxSm6qkivX-Sro9SP3Pyen_Q=/1400x788/smart/i575891.jpeg'}} style ={estilo.image}/>
    </LinearGradient>
    )
}