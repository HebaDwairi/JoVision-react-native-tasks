import React, {useState ,Component} from 'react';
import { StyleSheet,TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import {change} from '../store/textReducer.js'

class TextInputComponent extends Component{
    changeText = (input )=>{
        this.props.change(input);
    }
    render(){
        return(
            <View style={style.container}>
                <TextInput style={style.textinput} onChangeText={this.changeText} value={this.props.text}/>
            </View>
        );
    }
}
const mapStateToProps =(state) =>({
    text: state.text,
});
const mapDispatchToProps = {
    change,
};
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
export default connect(mapStateToProps, mapDispatchToProps)(TextInputComponent);