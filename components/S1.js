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
const months = ["STY","LUT","MAR","KWI","MAJ","CZE","LIP","SIE","WRZ","PAŹ","LIS","GRU"]
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
                data:JSON.parse(await SecureStore.getItemAsync("Notes"))
            })
        })
        this.setState({
            data:JSON.parse(await SecureStore.getItemAsync("Notes"))
        })
        console.log(JSON.parse(await SecureStore.getItemAsync("Notes")))
    }
    render() {
        return (
            <View>
                <FlatList
                    numColumns="2"
                    data={this.state.data}
                    renderItem={({ item }) => <Note color={item.color} text={item.text} title={item.title} date={be_normal(item.date)}></Note>}
                />
            </View>
        )
    }
}
function be_normal(date){
    return `${new Date(date).getDate()} ${months[new Date(date).getMonth()]}`
}