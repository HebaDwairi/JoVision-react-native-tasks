import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class MyClassPage25 extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'This is MyClassPage component',
        }
    }
    changeText(newText) {
        this.setState({text:newText});
    }
    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>{this.state.text}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        padding:15,
        color:'black',
        margin:10,
        borderRadius:10,
        width:340,
    },
    container: {
        borderRadius:10,
        padding:9,
    }
});

export default MyClassPage25;