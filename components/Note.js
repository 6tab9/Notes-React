import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable
} from 'react-native';

export default class Note extends React.Component {
    render(){
        return(
            <View style={{backgroundColor:this.props.color,padding:46,flex:1,margin:10}}>
                <Pressable onLongPress={console.log(this.props.date)}>
                    <Text style={styles.date}>{this.props.date}</Text>
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