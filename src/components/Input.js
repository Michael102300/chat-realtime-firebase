import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Item, Input as InputNB, Icon } from 'native-base'

export default function Input(props){

    const { sendMessage } = props;

    const [ message, setMessage ] = useState('');

    const onSubmit = () => {
        if(message.length > 0){
            sendMessage(message);
            setMessage('');
        }
    }
    return(
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InputNB 
                    placeholder='Message ...'
                    style={styles.input}
                    placeholderTextColor='gray'
                    value={message}
                    onChange={ (e)  => setMessage(e.nativeEvent.text)}
                />
            </Item>
            <View style={styles.iconBtn}>
                <TouchableOpacity onPress={onSubmit} >
                    <Icon 
                        name="send"
                        style={styles.iconSend}
                        type="MaterialIcons"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#16202B',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        paddingLeft: 5,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    },
    itemInput:{
        borderColor: '#16202B',
        width: '90%',
        borderRadius: 20,
        marginRight: 5,
    },
    input:{
        color:'#ffff',
    },
    iconBtn:{
        justifyContent:'center',
        alignItems: 'center',
        width: 50,
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#00bb2d',
    },
    iconSend:{
        color: '#fff'
    }
})