import React, {useState,useRef, useEffect} from 'react';
import { StyleSheet, View, Text,Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Task35 = () =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [savedData, setSavedData]= useState({
        name: '',
        age: '',
        country: '',
        timeStamp: '',
    });
    useEffect(()=>{
        const getData = async () => {
            try {
              const jsonVal = await AsyncStorage.getItem('userData');
              const currentTime= new Date().getTime();
              const newObj = JSON.parse(jsonVal);
              if((jsonVal!= null) && (currentTime - newObj.timeStamp <60000) ){
                    setSavedData(newObj);
              } 
            } catch (e) {
                console.log("error while getting the data");
            }
          };
          getData();
    },[]);

    const createObj = () =>{
        const data = {
            name: name,
            age: age,
            country: country,
            timeStamp: new Date().getTime(),
        };
        return data;
    }
    const saveObj = async (data) =>{
        try{
            const jsonVal = JSON.stringify(data);
            await AsyncStorage.setItem('userData',jsonVal);
        }
        catch(err){
            console.log('error while saving data');
        }
    }
    const saveUserData = () => {
        data = createObj();
        saveObj(data);
    }
    return(
        <View style={style.container}>
            <View style={style.form}>
                <Text>Name: </Text>
                <TextInput style={style.input} onChangeText={setName}>{savedData.name}</TextInput>
                <Text>Age: </Text>
                <TextInput style={style.input} onChangeText={setAge} keyboardType='numeric'>{savedData.age}</TextInput>
                <Text>Country: </Text>
                <TextInput style={style.input} onChangeText={setCountry}>{savedData.country}</TextInput>
            </View>
            <Button title='submit' style={style.btn} onPress={saveUserData}></Button>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:35,
    },
    input:{
        backgroundColor:'white',
        color:'black',
        marginVertical:10,
        borderRadius:3,
        padding:10,
        fontSize:17,
    },
    form:{
        marginVertical:50,
    },

});
export default Task35;