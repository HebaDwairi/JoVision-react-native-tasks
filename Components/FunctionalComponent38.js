import React, { useContext } from 'react';
import { StyleSheet,TextInput, View} from 'react-native';
import ClassComponent from './ClassComponent38';
import { TextContext } from './TextContext.js';
const FunctionalComponent = () => {
    const {text,setText} = useContext(TextContext);
    return(
        <View style={style.container}>
            <ClassComponent/>
            <TextInput style={style.textinput} onChangeText={setText}></TextInput>
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
        margin:10,
        borderRadius:10,
    }
});
export default FunctionalComponent;