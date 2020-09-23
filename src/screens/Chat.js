import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Body, Title } from 'native-base';
import moment from 'moment';
import { map } from 'lodash';

import 'firebase/database'
import Firebase from '../utils/firebase';
import Input from '../components/Input';
import Message from '../components/Message';

export default function Chat(props) {

    const { userName } = props;
    const [ messages, setMessages ] = useState([])
    const chatScrollRef = useRef();
    useEffect(() => {
        const chat = Firebase.database().ref('general');
        chat.on('value', (snapshot) => {
            setMessages(snapshot.val());
        })
    }, [])
    useEffect(() => {
        chatScrollRef.current.scrollTo({ y: 1000000 })
    }, [messages])

    const sendMessage = (message) => {
        const time = moment().format('hh:mm a')
        Firebase.database().ref('general').push({
            userName,
            text: message,
            time
        })
    }
    return (
        <>
        <Header style={styles.header} iosBarStyle='light-content' androidStatusBarColor='#16202B'>
            <Body style={{ alignItems:'center'}}>
                <Title style={{color : '#fff'}}>Chat App</Title>
            </Body>
        </Header>
        <View style={styles.content}>
            <ScrollView style={styles.chatView} ref={chatScrollRef}>
                {map(messages, (message, index) => (
                    <Message 
                        key={index}
                        message={message}
                        name={userName}
                    />
                ))}
            </ScrollView>
            <Input 
                sendMessage={sendMessage}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: 'space-between'
    },
    header:{
        backgroundColor:'#16202B',
    },
    chatView:{
        backgroundColor: '#1B2734'
    }
})
