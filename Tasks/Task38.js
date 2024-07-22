import React,{useContext, useState} from 'react';
import { View,StyleSheet} from 'react-native';
import FunctionalComponent from '../Components/FunctionalComponent38';
import { TextContext } from '../Components/textContext';

const Task38 = () => {
    const [text, setText] = useState('ClassComponent text');
    return(
        <View style={style.container}>
            <TextContext.Provider value={{text,setText}}>
                <FunctionalComponent/>
                <FunctionalComponent/>
                <FunctionalComponent/>
                <FunctionalComponent/>
            </TextContext.Provider>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#15222b',
    },
});

export default Task38;