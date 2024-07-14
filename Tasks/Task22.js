import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MyFunctionPage22 from '../Components/MyFunctionPage22.js';

const Task22 = ()=>{
    const [text, setText] = useState('input box');
    return(
        <View style={style.container}>
            <MyFunctionPage22 text={text} setText={setText}/>
            <Text style={style.text}>{text}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        padding:10,
        margin:10,
    }
});
export default Task22;