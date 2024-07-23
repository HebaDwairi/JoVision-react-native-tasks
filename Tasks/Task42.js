import React from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Screen1 = ({navigation})=>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Screen One</Text>
            <View style={style.btnContainer}>
                <Button title='two' onPress={()=>{navigation.navigate('screen2')}}/>
                <Button title='three' onPress={()=>{navigation.navigate('screen3')}}/>
                <Button title='four' onPress={()=>{navigation.navigate('screen4')}}/>
            </View>
        </View>
    );
}
const Screen2 = ({navigation})=>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Screen Two</Text>
            <View style={style.btnContainer}>
                <Button title='one' onPress={()=>{navigation.navigate('screen1')}}/>
                <Button title='three' onPress={()=>{navigation.navigate('screen3')}}/>
                <Button title='four' onPress={()=>{navigation.navigate('screen4')}}/>
            </View>
        </View>
    );
}
const Screen3 = ({navigation})=>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Screen Three</Text>
            <View style={style.btnContainer}>
                <Button title='one' onPress={()=>{navigation.navigate('screen1')}}/>
                <Button title='two' onPress={()=>{navigation.navigate('screen2')}}/>
                <Button title='four' onPress={()=>{navigation.navigate('screen4')}}/>
            </View>
        </View>
    );
}
const Screen4 = ({navigation})=>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Screen Four</Text>
            <View style={style.btnContainer}>
                <Button title='one' onPress={()=>{navigation.navigate('screen1')}}/>
                <Button title='two' onPress={()=>{navigation.navigate('screen2')}}/>
                <Button title='three' onPress={()=>{navigation.navigate('screen3')}}/>
            </View>
        </View>
    );
}
const Task42 = () =>{
    return(
        <NavigationContainer style={style.container}>
            <Tab.Navigator>
                <Tab.Screen name="screen1" component={Screen1} />
                <Tab.Screen name="screen2" component={Screen2} />
                <Tab.Screen name="screen3" component={Screen3} />
                <Tab.Screen name="screen4" component={Screen4} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const style = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'space-around',
       alignItems:'center'
    },
    text:{
        fontSize:35,
        color:'black',
    },
    btnContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
        width:200,
    }
});

export default Task42;