import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

const MyFunctionPage = ()=>{
    useEffect(()=>{
        console.log("myFunctionPage loaded");
        return()=>{
            console.log("myFunctionPage unloaded");
        }
    },[]);

    const style = StyleSheet.create({
        box: {
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent:'center',
            backgroundColor: 'white',
            padding:10,
            color:'black',
            margin:10,
        },
    });
    return(
        <Text style={style.box}>This is myFunctionPage component</Text>
    );
}
export default MyFunctionPage;