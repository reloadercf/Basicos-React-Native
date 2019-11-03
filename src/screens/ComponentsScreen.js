import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

 const ComponentsScreen=()=>{
    return  (<View>
    <Text style={styles.textStyle}>Estos son los componentes de pantallas</Text>
    <Text>Hola</Text>
            </View>)
 }  
 const styles=StyleSheet.create({
     textStyle:{
        fontSize: 30
     }
 })

 export default ComponentsScreen;