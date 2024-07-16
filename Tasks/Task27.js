import React, {useState} from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity,Alert} from 'react-native';

const Task27 = ()=>{
    const [img, setImg] = useState('../Resources/papilio.jpeg');
    const chooseImage = ()=>{
        Alert.alert(
            'img selection',
            'please select an image to display',
            [
                {
                    text: "1",
                    onPress: () => {setImg(require('../Resources/papilio.jpeg'))},
                },
                {
                    text: "2",
                    onPress: () => {setImg(require('../Resources/cochlicella.jpeg'))},
                },
                {
                    text: "3",
                    onPress: () => {setImg(require('../Resources/malva.jpeg'))},
                },  
            ],
        );
    }
    return(
        <View style={style.container}>
            <Image source={img} style={style.img}></Image>
            <TouchableOpacity style={style.btn} onPress={chooseImage}>
                <Text style={style.text}>Select Image</Text>
            </TouchableOpacity>
        </View>
    );
}

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
        margin:40,
        width:'100%',
        height:'65%',
    },
    btn: {
        backgroundColor:'#6da865',
        padding:10,
        borderRadius:10,
    }
});
export default Task27;