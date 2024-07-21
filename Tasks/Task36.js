import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, View, Text,ScrollView} from 'react-native';
function generateRandomWord(words) {
	let result = '';
    for (let i = 0; i < words; i++) {
        const length = Math.floor(Math.random() * 10)+1;
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        result+= " ";
	}
    
	return result;
}

const Task36 = () =>{
    let list = [];
    for(let i = 0; i < 100; i++){
        const words = Math.floor(Math.random() * 10)+1;
        list.push(<Text style={style.text} key={Math.random()}>{generateRandomWord(words)}</Text>);
    }
    return(
        <View style={style.container}>
            <ScrollView>
                {list}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20,
    },
    text:{
        backgroundColor:'#467360',
        margin:14,
        fontSize:20,
        padding:13,
        borderRadius:10,
    }
});
export default Task36;