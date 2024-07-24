import React ,{Component} from 'react';
import { Text, StyleSheet} from 'react-native';
import { TextContext } from './TextContext.js';
class ClassComponent extends Component {
    static contextType = TextContext;
    render(){
        const {text} = this.context;
        return(
            <Text style={style.text}>{text}</Text>
        );
    }
}

const style = StyleSheet.create({
    text:{
        backgroundColor:'#253c4d',
        fontSize:20,
    }
});
export default ClassComponent;