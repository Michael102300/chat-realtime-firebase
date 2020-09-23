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
                <TouchableOpacity onPress={onSubmit}>
                    <Icon 
                        name="send"
                        style={styles.iconSend}
                        type="MaterialIcons"
                    />
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#16202B',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        paddingHorizontal: 20
    },
    itemInput:{
        borderColor: '#16202B',
    },
    input:{
        color:'#ffff',
    },
    iconSend:{
        color: '#fff'
    }
})