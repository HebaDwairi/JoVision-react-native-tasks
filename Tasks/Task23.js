import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MyclassPage from '../Components/MyClassPage.js';

const Task23 = ()=>{
    const [text, setText] = useState('input box');
    return(
        <View style={style.container}>
            <MyclassPage text={text} setText={setText}/>
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
export default Task23;