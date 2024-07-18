import React, {useState,useRef} from 'react';
import { StyleSheet, View, Text,Image,Pressable,FlatList,Alert, TouchableOpacity,TextInput, Button} from 'react-native';
import CustomAlert from '../Components/customAlert';

const Item = ({src,index,array,setArray})=>{
    const alertIndex=()=>{
        Alert.alert('','you have selected image: '+ index);
    }
    const  removeItem = ()=>{
        const temp = array.filter((item, i) => i !== index);
        setArray(temp);
    }
    return(
        <Pressable onPress={alertIndex} style={style.btn2} >
            <Pressable style={({ pressed }) => [ { opacity: pressed ? 0.5: 1},style.removeBtn]} onPress={removeItem}>
                <Text style={style.btnText}>X</Text>
            </Pressable>
            <Image source={src} style={style.img}></Image>
        </Pressable>
    );
}
const Task29 = ()=>{
    const [show, setShow] = useState(false);
    const [text,setText] = useState('');
    const [array,setArray] = useState(DATA);
    const flatlistRef = useRef();
    const scrollToImage = ()=>{
        setShow(!show);
        setText('');
        if(text>=0 && text<=array.length){
            flatlistRef.current.scrollToIndex({ animated: true, index: text });
        }
        else{
            Alert.alert('enter a valid index');
        }
    }
    const AlertContent = ()=>{
        return(
            <View style={style.btn}>
                <Text style={style.text}>Type an index between 0 and 10</Text>
                <TextInput style={style.input} onChangeText={setText}  keyboardType='numeric'>{text}</TextInput>
                <Button onPress={scrollToImage} title='Confirm' color={'#233620'}></Button>
            </View>
        );
    }
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={()=>{setShow(!show)}} style={style.btn} >
               <Text style={style.text}>select an image</Text>
            </TouchableOpacity>
            <FlatList  ref={flatlistRef} data={array}
            renderItem={({item,index}) => <Item src={item.src} index={index} array={array} setArray={setArray}/>}
            horizontal={true}
            >
            </FlatList>
            <CustomAlert show={show} setShow={setShow} content={<AlertContent/>}/>
        </View>
    );
}
const DATA =[
    {
        id:'1',
        src: require('../Resources/linum.jpeg'),
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
        src: require('../Resources/snail.jpeg'),
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
        height:600,
        borderRadius:10,
    },
    btn: {
        backgroundColor:'#497856',
        padding:10,
        borderRadius:10,
        margin:10,
    },
    input:{
        backgroundColor:'white',
        margin:20,
        marginLeft:90,
        marginRight:90,
        fontSize:20,
        color:'black',
        borderRadius:5,
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
    }
});
export default Task29;