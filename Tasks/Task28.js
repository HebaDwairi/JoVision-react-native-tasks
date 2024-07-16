import React, {useState} from 'react';
import { StyleSheet, View, Text,Image,Pressable,FlatList,Alert} from 'react-native';

const Item = ({src,index})=>{
    const handlePress =()=>{
        Alert.alert('','you have selected image: '+ index);
    }
    return(
        <Pressable onPress={handlePress} style={style.btn} >
            <Image source={src} style={style.img}></Image>
        </Pressable>
    );
}
const Task28 = ()=>{
    return(
        <View style={style.container}>
            <FlatList data={DATA}
            renderItem={({item,index}) => <Item src={item.src} index={index}/>}
            >
            </FlatList>
        </View>
    );
}

const DATA =[
    {
        id:'1',
        src: require('../Resources/cabbageWhite.jpeg'),
    },
    {
        id:'2',
        src: require('../Resources/dragonfly.jpeg'),
    },
    {
        id:'3',
        src: require('../Resources/lupine.jpeg'),
    },
    {
        id:'4',
        src: require('../Resources/molle.jpeg'),
    },
    {
        id:'5',
        src: require('../Resources/moth.jpeg'),
    },
    {
        id:'6',
        src: require('../Resources/papilio.jpeg'),
    },
    {
        id:'7',
        src: require('../Resources/malva.jpeg'),
    },
    {  
        id:'8',
        src: require('../Resources/cochlicella.jpeg'),
    },
    {
        id:'9',
        src: require('../Resources/ornata.jpeg'),
    },
    {
        id:'10',
        src: require('../Resources/rubioideae.jpeg'),
    },
    {
        id:'11',
        src: require('../Resources/weevil.jpg'),
    },

];
const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent:'center',
        color:'white',
        margin:10,
    },
    container: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#233620'
    },
    img: {
        width:320,
        height:320,
        borderRadius:10,
    },
    btn: {
        backgroundColor:'#497856',
        padding:10,
        borderRadius:10,
        margin:10,
    }
});
export default Task28;