import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Button from './Button'
import * as SecureStore from 'expo-secure-store'
var title = ""
var text = ""
const add = async () =>{
    const notesFromStore = await SecureStore.getItemAsync("Notes")
    const realNotes = notesFromStore ? JSON.parse(notesFromStore) : []
    await SecureStore.setItemAsync("Notes",JSON.stringify([...realNotes,{color:"#"+Math.floor(Math.random()*16777215).toString(16),title:title,text:text,date:Date.now()}]))
}
export default class S2 extends React.Component {
constructor(props) {
    super(props);
    this.refresh = null
    this.state = {
        text:''
    };
}
render(){
    return (
        <View>
            <View style={{padding:10}}>
                <TextInput
                    style={styles.Input}
                    underlineColorAndroid='#000000'
                    placeholder='Title'
                    onChangeText={(titleFake)=>title=titleFake}
                />
                <TextInput
                    style={styles.Input}
                    underlineColorAndroid='#000000'
                    placeholder='Text'
                    onChangeText={(textFake)=>text=textFake}
                />
            </View>
            <Button click={add} title="Add Note"></Button>
        </View>
    )

}
}
const styles = StyleSheet.create({
    Input: {
        padding:5
    },
  });