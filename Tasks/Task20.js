import React, {useState,Component} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

class MyClassPage extends Component{
    render(){
        return(
            <Text style={style.text}>This is MyClassPage class component</Text>
        );    
    }
    componentDidMount(){
        console.log("MyClassPage component Loaded");
    }
    componentWillUnmount(){
        console.log("MyClassPage component Unloaded");
    }
}
const Task20 = ()=>{
    const [show, setShow] = useState(false);
    const showClass = ()=>{
        show ? setShow(false) : setShow(true);
    }
    return(
        <View style={style.container}>
            {show && <MyClassPage/>}
            <Button title='Show' onPress={showClass} style={style.btn} ></Button>
        </View>
    );
}


const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        backgroundColor: 'white',
        padding:10,
        color:'black',
        margin:10,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default Task20;