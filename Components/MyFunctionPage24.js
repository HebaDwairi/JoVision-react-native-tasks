import React, {forwardRef,useImperativeHandle,useState} from 'react';
import {StyleSheet, Text} from 'react-native';

const MyFunctionPage24 = forwardRef((props, ref) =>{
    const [text,setText] = useState("This is MyFunctionPage component ")
    useImperativeHandle(ref, () => ({
        changeText(newText) {
            setText(newText);
        }
      }));
    return(
        <Text style={style.box} ref={ref}>{text}</Text>
    );
});

const style = StyleSheet.create({
    box: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        color:'black',
        margin:10,
        borderRadius:10,
    },
});
export default MyFunctionPage24;