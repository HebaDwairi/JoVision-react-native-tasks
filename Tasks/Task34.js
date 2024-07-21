import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, View, Text,Pressable} from 'react-native';
import useCurrentTime from '../customHooks/useCurrentTime.js'
const Time = ()=>{
    const [time, date] = useCurrentTime();
    return(
        <View style={style.container}>
            <Text style={style.text}>the time is {time} and the date is {date}</Text>
        </View>
    );
}
const Task34 = () =>{
    return(
        <View style={style.container}>
            <Time/>
        </View>
    );
}
const style = StyleSheet.create(
    {
        text:{
            fontSize:25,
            margin:30,
        },
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
    }
);
export default Task34;