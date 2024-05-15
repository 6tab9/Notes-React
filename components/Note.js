import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable
} from 'react-native';
const months = ["STY","LUT","MAR","KWI","MAJ","CZE","LIP","SIE","WRZ","PAŹ","LIS","GRU"]
export default class Note extends React.Component {
    render(){
        return(
            <View style={{backgroundColor:this.props.color,padding:46,flex:1,margin:10}}>
                <Pressable onLongPress={this.props.delete}>
                    <Text style={styles.date}>{be_normal(this.props.date)}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text>{this.props.text}</Text>
                </Pressable>
            </View>
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