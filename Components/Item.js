import React, {useState,useRef} from 'react';
import { StyleSheet, View, Text,Image,Pressable,FlatList,Alert, TouchableOpacity,TextInput, Button} from 'react-native';
const Item = ({src,index,array,setArray})=>{
    const alertIndex=()=>{
        Alert.alert('','you have selected image: '+ index);
    }
    const removeItem = ()=>{
        const temp = array.filter((item, i) => i !== index);
        setArray(temp);
    }
    const duplicateItem = ()=>{
        const temp = array;
        const elem = {
            id:Math.random(),
            src:array[index].src,
        }
        temp.splice(index,0,elem);
        setArray(temp);
    }
    return(
        <Pressable onPress={alertIndex} style={style.btn2} >
            <View style={style.btnContainer}>
               <Pressable style={({ pressed }) => [ { opacity: pressed ? 0.5: 1},style.removeBtn]} onPress={duplicateItem}>
                    <Text style={style.btnText}>+</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ { opacity: pressed ? 0.5: 1},style.removeBtn]} onPress={removeItem}>
                    <Text style={style.btnText}>x</Text>
                </Pressable>
            </View>
            <Image source={src} style={style.img}></Image>
        </Pressable>
    );
}
const style = StyleSheet.create({
    img: {
        width:320,
        height:600,
        borderRadius:10,
    },
    btn2: {
        backgroundColor:'#497856',
        padding:20,
        borderRadius:10,
        margin:20,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    removeBtn:{
        borderRadius:10,
        backgroundColor:'#233620',
        borderColor:'#497856',
        marginBottom:5,
        marginTop:-23,
    },
    btnText:{
        fontSize:20,
        color:'white',
        paddingHorizontal:15,
        paddingVertical:5,
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:320
    }
});
export default Item;