import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';

const MyFunctionPage = ({text,setText})=>{
    const onChangeText = (newText)=>{
        setText(newText);
    }
    useEffect(()=>{
        console.log("myFunctionPage loaded");
        return()=>{
            console.log("myFunctionPage unloaded");
        }
    },[]);

    const style = StyleSheet.create({
        text: {
            fontWeight: 'bold',
            fontSize: 17,
            justifyContent:'center',
            backgroundColor: 'white',
            padding:15,
            color:'black',
            margin:10,
            borderRadius:10,
            width:340
        },
        container: {
            backgroundColor:'#98b89a',
            borderRadius:10,
            padding:9,
        }
    });
    return(
        <View style={style.container}>
            <Text style={style.text}>This is myFunctionPage component</Text>
            <TextInput
            value={text}
            style={style.text}
            onChangeText={onChangeText}
            />
        </View>
    );
}
export default MyFunctionPage;