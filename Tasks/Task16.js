import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
const Task16 = ()=>{
    const [show, setShow] = useState(0);
    const showText = ()=>{
        show ? setShow(0) : setShow(1);
    }
    return(
        <View style={style.container}>
            <Button title='Show' onPress={showText} style={style.btn} ></Button>
            {show ? <Text style={style.text}> Hebatullah </Text> : null}
        </View>
    );
}


const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent:'center',
        margin:20,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default Task16;