import React, { Component } from 'react';
import styles from './homeStyles';
import {
    Text,
    View,
    Image,
    asset,
    VrButton,
  } from 'react-360';

export default class Home extends Component {
    render(){
        return(
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Image source={asset('chats.jpg')} style={{
                    height: 150,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }} />
                    <Text style={styles.greeting}>
                    Chatroom-360
                    </Text>
                </View>
                <VrButton onClick={() => {
                    this.props.history.push('./chatroom')
                }}
                style={styles.button}>
                
                <Text style={styles.greeting}>
                    Start Chatting...
                </Text>
                </VrButton>
            </View>
        );
    }
}