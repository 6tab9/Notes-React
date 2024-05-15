import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Alert
} from 'react-native';
import * as SecureStore from 'expo-secure-store'
const months = ["STY","LUT","MAR","KWI","MAJ","CZE","LIP","SIE","WRZ","PAŹ","LIS","GRU"]
export default class Note extends React.Component {
    render(){
        return(
            <View style={{backgroundColor:this.props.color,padding:46,flex:1,margin:10}}>
                <Pressable onLongPress={()=>this.delete_alert(this.props.date)}>
                    <Text style={styles.date}>{be_normal(this.props.date)}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text>{this.props.text}</Text>
                </Pressable>
            </View>
        )
    }
    delete_alert(id){
        Alert.alert(
            'Delete note',
            'You cannot undone what is done',
            [
                {text:'Cancel'},
                {
                    text:'OK',
                    onPress:()=>this.props.delete(this.props.date)
                }
            ],
            {cancelable:true}
        )
    }
}
const styles = StyleSheet.create({
    date:{
        float:"right",
        alignSelf:"flex-end"
    },
    title:{
        fontSize:20
    }
})

function be_normal(date){
    return `${new Date(date).getDate()} ${months[new Date(date).getMonth()]}`
}