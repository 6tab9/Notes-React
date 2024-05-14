import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Button from './Button'
import * as SecureStore from 'expo-secure-store'
var tekst = ""
const add = async () =>{
    const notesFromStore = await SecureStore.getItemAsync("notesyyy")
    const realNotes = notesFromStore ? JSON.parse(notesFromStore) : []
    await SecureStore.setItemAsync("notesyyy",JSON.stringify([...realNotes,{color:"#"+Math.floor(Math.random()*16777215).toString(16),text:tekst}]))
}
const add2 = async () =>{
    await SecureStore.setItemAsync("notesyy",JSON.stringify([{color:"#abcdef",text:tekst}]))
}
export default class S2 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        text:''
    };
}
render(){
    return (
        <View>
            <View style={{backgroundColor:"#abcdef",padding:10}}>
                <TextInput
                    underlineColorAndroid='#ff0000'
                    onChangeText={(text)=>tekst=text}
                />
            </View>
            <Button click={add} text="Add Note"></Button>
        </View>
    )

}
}