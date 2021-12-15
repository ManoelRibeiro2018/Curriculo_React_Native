import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';


export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <Text h1 style={styles.texto1}>Meu Curriculo</Text>
            <Text h2 style={styles.texto2}>Mayara Ribeiro</Text>


            
                <Button style={styles.bt1} onPress={() => navigation.navigate('Curriculo')}
             title="Curriculo"
             type='clear'             
             />
             
                <Button style={styles.bt1} onPress={() => navigation.navigate('Hobbies')}
             title="Hobbies"  
             type='clear'              
             />
             
                <Button style={styles.bt1} onPress={() => navigation.navigate('Outros')}
             title="Outros"  
             type='clear'              
             />
          
          
        </View>
    );
}


const styles = StyleSheet.create ({
    container : {
        flex: 1,
    },

 texto1: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',

  },

  texto2: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',

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