import React from 'react';

import {Image,Text, View} from 'react-native';
import estilo from '../estilos.js';

export default function Footer() {
    return(
    <View>
    <Text style={estilo.text}>Esqueceu a senha?</Text>
    <Text style={estilo.text}>Deseja cadastrar-se?</Text>
    </View>
    );
} 