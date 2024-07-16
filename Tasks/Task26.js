import React, {useState,useEffect} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const Task26 = ()=>{
    const [text,setText] = useState('ip ');
    const getIpBlocking = async()=>{
        try{
            fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
            setText(data.ip);})
        }
        catch(err){
            alert(err);
        }
    }
    const getIpNonBlocking = async()=>{
        try{
            let fetchRes = await fetch("https://api.ipify.org?format=json");
            resText = await fetchRes.json();
            setText(resText.ip);
        }
        catch(err){
            alert(err);
        }
    }
    return(
        <View style={style.container}>
            <Button title='first btn' onPress={getIpNonBlocking} color={'#5cad95'}></Button>
            <Button title='second btn' onPress={getIpBlocking} color={'#5cad95'}></Button>
            <Text style={style.text}>{text}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
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
        padding:9,
        justifyContent:'center',
        flex:1,
    }
});
export default Task26;