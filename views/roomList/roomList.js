import React from 'react';
import { View, Text, Image, asset, } from 'react-360';
import styles from './roomListStyles';

export default class RoomList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          friends: [
            {id:1, name: "Hannah Montana", icon: 'profile1.png'},
            {id:2, name: "Daniela Divine", icon: 'profile2.png'},
            {id:3, name: "Lisa Kross", icon: 'profile3.png'},
            {id:4, name: "Joel Franck", icon: 'profile4.png'},
            {id:5, name: "Egregor duran", icon: 'profile5.png'},
          ],
        };
      }
    render(){
        return(
            <View style={styles.panel}>
                {this.state.friends.map((item, i) => (
                    <View key={item.id} style={styles.greetingBox}>
                        <Image source={asset(item.icon)} style={styles.userIcon} />
                        <Text style={styles.greeting}>
                            {item.name}
                        </Text>
                    </View>
                ))}
            </View>
        )
    }
}