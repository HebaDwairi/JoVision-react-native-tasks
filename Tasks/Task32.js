import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, View, Text,FlatList,Alert, TouchableOpacity,TextInput, Button,Image} from 'react-native';
import Video  from 'react-native-video';

const Task32 = () => {
    return (
        <Video 
        source={require('../Resources/forest.mp4')} 
        style={style.video}
        controls={true}
        poster='https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg'
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
});
  
export default Task32;