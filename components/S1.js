import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import Button from './Button';
import Note from './Note'
import * as SecureStore from 'expo-secure-store'

export default class S1 extends React.Component {
    constructor(props){
        super(props);
        this.refresh=null
        this.state = {
            data:[]
        }
    }
    componentDidMount=async()=>{
        this.refresh = this.props.navigation.addListener('focus',async ()=>{
            this.setState({
                data:JSON.parse(await SecureStore.getItemAsync("Notes"))
            })
        })
        this.setState({
            data:JSON.parse(await SecureStore.getItemAsync("Notes"))
        })
        console.log(JSON.parse(await SecureStore.getItemAsync("Notes")))
    }
    deleteNote=async(id)=>{
        const Notes = JSON.parse(await SecureStore.getItemAsync("Notes"))
        Notes.map(async(el)=>{
            if(el.date==id){
                console.log(el)
                await SecureStore.setItemAsync("Notes",JSON.stringify(Notes.filter(ele=>ele!=el)))
            }
        })
        this.setState({
            data:JSON.parse(await SecureStore.getItemAsync("Notes"))
        })
    }
    render() {
        return (
            <View>
                <FlatList
                    numColumns="2"
                    data={this.state.data}
                    renderItem={({ item }) => <Note color={item.color} text={item.text} title={item.title} date={item.date} delete={this.deleteNote}></Note>}
                />
            </View>
        )
    }
}
