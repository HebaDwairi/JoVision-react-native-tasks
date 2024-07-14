import React, {useState,useRef} from 'react';
import { StyleSheet, View, Text,TextInput} from 'react-native';
import MyClassPage25 from '../Components/MyClassPage25.js';

const Task25 = ()=>{
    const [text, setText] = useState('input box');
    const ref = useRef(null);
    const onChangeText = (newText)=>{
        setText(newText);
        ref.current.changeText(newText);
    }
    return(
        <View style={style.container}>
            <TextInput
            value={text}
            style={style.text}
            onChangeText={onChangeText}
            />
            <MyClassPage25 ref={ref} />
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
        backgroundColor:'#88b89a',
        borderRadius:10,
        padding:9,
        justifyContent:'center',
        margin:10,
        flex:1,
        
    }
});
export default Task25;