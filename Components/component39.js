import React, {useEffect, useState } from 'react';
import { StyleSheet,TextInput, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const TextInputComponent = () => {
    const dispatch = useDispatch();
    const t = useSelector((state)=>state.text);
    const [text,setText]= useState(t);
    const changeState = (input)=>{
        setText(input);
    }
    useEffect(()=>{
        return ()=>{dispatch({ type: 'CHANGE', payload:text })};
    },[dispatch,text])
    return(
        <View style={style.container}>
            <TextInput style={style.textinput} onChangeText={changeState}>{text}</TextInput>
        </View>
    );
}
const style = StyleSheet.create({
    textinput:{
        backgroundColor:'#a8bdae',
        padding:10,
        borderRadius:7,
        fontSize:18,
        marginTop:10,
        color:'#1d303d',
        borderSize:2,
    },
    container:{
        backgroundColor:'#253c4d',
        padding:20,
        borderRadius:5,
    }
});
export default TextInputComponent;