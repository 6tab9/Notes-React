import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Note extends React.Component {
    render(){
        return(
            <View style={{backgroundColor:this.props.color,padding:10}}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}