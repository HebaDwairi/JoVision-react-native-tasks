import React, {useState,useEffect} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import MyFunctionPage from '../Components/MyFunctionPage.js';

const Task21 = ()=>{
    const [show, setShow] = useState(false);
    const showComponent = ()=>{
        show ? setShow(false) : setShow(true);
    }
    return(
        <View style={style.container}>
            {show ?  <MyFunctionPage/>: null}
            <Button title='Show' onPress={showComponent} ></Button>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default Task21;