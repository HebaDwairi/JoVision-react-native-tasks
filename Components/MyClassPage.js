import React, {useEffect,useState,Component} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';

class MyClassPage extends Component {
    onChangeText = (newText)=>{
        this.props.setText(newText);
    }
    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>This is MyClassPage component</Text>
                <TextInput
                value={this.props.text}
                style={style.text}
                onChangeText={this.onChangeText}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
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
        backgroundColor:'#98b89a',
        borderRadius:10,
        padding:9,
    }
});

export default MyClassPage;