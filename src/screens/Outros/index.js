import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';


export default function Outros({navigation}){
    return (
        <View>
            <Text style={styles.texto}>Alguns pontos que eu gostaria de acrescentar é sobre como eu me interessei por essa area. </Text>
            <Text style={styles.texto}>Tenho dois irmãos que são da area, e graças a eles fui tomando interesse.
                                           Entrei para universidade com o intuindo de aprender e me aperfeiçoar. </Text>



          <Button style={styles.bt1} onPress={() => navigation.navigate('Home')}
             title="Home"  
             type='clear'              
             />


        </View>
    );
}



const styles = StyleSheet.create ({
   
    
    
    texto: {
       position: 'relative',
       padding:15,
   
     },
     bt1: {
        position: 'relative',
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        backgroundColor:'#FFE4C4',
        padding:15,
        borderRadius:20,
      }
   
   })