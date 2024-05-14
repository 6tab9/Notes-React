import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
export default class Button extends React.Component {
    render(){
        return (
            <View style={{width:"fit-content"}}>
                <TouchableOpacity onPress={this.props.click}>
                    <View>
                        <Text style={style.main}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}
const style = StyleSheet.create({
    main:{
        backgroundColor:"rgba(7,126,34,255)",
        borderRadius:10,
        padding:5,
        color:"white",
        margin:10,
        textAlign:"center"
    }
})