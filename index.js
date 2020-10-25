import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import { MemoryRouter as Router, Route} from 'react-router';

import RoomList from './views/roomList/roomList';
import RoomOptions from './views/roomOptions/roomOptions';
//import view
import Home from './views/home/home';
import Chatroom from './views/chatroom/chatroom';

export default class ChatRoom360 extends React.Component {
  render() {
    return (
      <Router>
        <View>
          <Route exact path='/chatroom' component={Chatroom}/>
          <Route exact path='/' component={Home}/>
        </View>
      </Router>
    );
  }
};

AppRegistry.registerComponent('RoomList', () => RoomList);
AppRegistry.registerComponent('ChatRoom360', () => ChatRoom360);
AppRegistry.registerComponent('RoomOptions', () => RoomOptions);
