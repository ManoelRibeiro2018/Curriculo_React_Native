import React from 'react';
import {StyleSheet,  Text, View } from 'react-native';
import {Button} from 'react-native-elements';


export default function Hobbies({navigation}){
    return (
        <View>
            <Text style={styles.hobbies}>Em momentos de lazer gosto de ler, curto livros de vários genêros. 
                                        Tambem gosto de assistir séries.</Text>

            
            <Text style={styles.hobbies}>Outros dos meus afazeres preferidos, é passar tenpo com minha família,
              sair com eles, curtir juntos</Text>

            <View>
            <Button style={styles.bt1} onPress={() => navigation.navigate('Outros')}
             title="Outros"  
             type='clear'              

             />
             </View>
        </View>
    );
}

const styles = StyleSheet.create ({
   
    
    
     hobbies: {
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