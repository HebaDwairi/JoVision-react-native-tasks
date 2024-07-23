import React, {useState} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import TextInputComponent from '../Components/classComponent40';
import { Provider } from 'react-redux';
import store from '../store';
const Task40 = () => {
    const [show, setShow] = useState(true);
    return(
        <Provider store={store}>
            <View style={style.container}>
                {show &&  <TextInputComponent/>}
                <Button title={show?'hide':'show'} onPress={()=>{setShow(!show)}} color={'#a8bdae'}></Button>
            </View>
        </Provider>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20,
    },
});
export default Task40;