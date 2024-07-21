import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, View, Text,Pressable} from 'react-native';
import Video  from 'react-native-video';

const Task33 = ()=>{
    const [paused, setPaused] = useState(false);
    return(
        <View style={style.container}>
            <Container paused={paused} setPaused={setPaused}/>
        </View>
    );
}
const Container =  ({paused,setPaused}) =>{
    const handlePress = () =>{
        setPaused(!paused);
    }
    return(
       <>
            <Vid paused= {paused}/>
            <Pressable style={style.btn} onPress={handlePress}></Pressable>
       </>
    );
}

const Vid = ({paused}) => {
    return (
        <Video 
        source={require('../Resources/forest.mp4')} 
        style={style.video}
        poster='https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg'
        paused={paused}
        repeat={true}
       />
    );
}
var style = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    width:60,
    height:60,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
  
export default Task33;