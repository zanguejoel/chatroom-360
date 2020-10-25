import React from 'react';
import { View, Text, Image, asset } from 'react-360';
import styles from './roomOptionsStyles';

export default class RoomOptions extends React.Component{
    render(){
        return(
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Image source={asset('profile1.png')} style={styles.userIcon} />
                    <Text style={styles.greeting}>
                       Fred Song (online)
                    </Text>
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                       Status: what's popping ? Let's go 360 !
                    </Text>
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                       Activities: @Joel just mentioned you !
                    </Text>
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                       date: 05/05/20
                    </Text>
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                       Edit
                    </Text>
                </View>
            </View>
        )
    }
}