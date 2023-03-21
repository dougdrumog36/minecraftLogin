import {View } from 'react-native'
import estilo from './src/estilos';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Box from './src/components/box';

export default function App() {
  return (
    <View style = {estilo.container}>
      <Header></Header>
      <Box></Box>
      <Footer></Footer>
    </View>
  );
}

