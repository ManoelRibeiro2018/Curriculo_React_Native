import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';


export default function Curriculo({navigation}){
    return (
        <View>
            <Text style={styles.nome}>Mayara Ribeiro</Text>

            <Text style={styles.sub}>Sobre mim:</Text>
            <Text style={styles.descricao}>Olá, me chamo Mayara. Sou estudante da Universidade Católica de Pernambuco, onde curso Sistemas para Internt. 
                No momento estou 4°período.Estou em busca de uma oportunidade de trabalhar como Desenvolvedora Front-End.</Text>

            <Text style={styles.sub}>Contato:</Text>
            <Text style={styles.descricao}>Celular: (XX)XXXXX-XXXX
                                           Email:emailaleatorio@gmail.com
                                           </Text>

            <Text style={styles.sub}>Conhecimentos:</Text>
            <Text style={styles.descricao}> -HTML </Text>
            <Text style={styles.descricao}> -CSS</Text>
            <Text style={styles.descricao}> -Git </Text>
            <Text style={styles.descricao}> -JavaScript </Text>

            <Text style={styles.sub}>Habilidades e Competências:</Text>
            <Text style={styles.descricao}> - Trabalho em equipe</Text>
            <Text style={styles.descricao}> - Esforçada</Text>
            <Text style={styles.descricao}> - Motivada e dedicada </Text>


            <View>
            <Button  style={styles.bt1}  onPress={() => navigation.navigate('Hobbies')}
             title="Hobbies" 
             type='clear'              

             />
            </View>


        </View>
    );
}


const styles = StyleSheet.create ({
   
nome: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',

  },

  sub: {
    fontWeight: 'bold',
    fontSize: 15,
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