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
        this.state = {
            data:[]
        }
    }
    componentDidMount=async()=>{
        this.refresh = this.props.navigation.addListener('focus',async ()=>{
            this.setState({
                data:JSON.parse(await SecureStore.getItemAsync("notesyyy"))
            })
        })
        this.setState({
            data:JSON.parse(await SecureStore.getItemAsync("notesyyy"))
        })
        console.log(JSON.parse(await SecureStore.getItemAsync("notesyyy")))
    }
    render() {
        return (
            <View>
                <FlatList
                    numColumns="2"
                    data={this.state.data}
                    renderItem={({ item }) => <Note color={item.color} text={item.text}></Note>}
                />
            </View>
        )
    }
}