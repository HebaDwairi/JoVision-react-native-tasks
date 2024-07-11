import React, {useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

const Task18 = ()=>{
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setName("Hebatullah");
        setLoading(false);
    }, 5000);
    return(
        <View style={style.container}>
            {loading ? <Text style={style.load}>Loading...</Text>: null}
            <ActivityIndicator size="40" animating={loading} hidesWhenStopped={true}/>
            <Text style={style.text}>{name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent:'center',
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    load: {
        fontSize: 20,
    }
});
export default Task18;