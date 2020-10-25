import React, { Component } from 'react';
import styles from './chatroomStyles';
import {
    Text,
    View,
    ScrollView,
    VrButton,
    Image
  } from 'react-360';


export default class Chatroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
            {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"} ,
            {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
            {id:4, date:"9:50 am", type:'out',  message: "Lorem ipsum dolor sit a met"},
          ],
          placeHolder: 'Write a message...',
          tempValue: ''
        };
    }
    
    renderDate = (date) => {
        return(
          <Text style={styles.time}>
            {date}
          </Text>
        );
    }
    
    getInput(value){
      if(this.state.tempValue === ''){
        this.setState({
          placeHolder: ''
        })
      }
      this.setState({
        tempValue: this.state.tempValue + String.fromCharCode(value.button)
      })
    }

    deleteLastChar(){
      this.setState({
        tempValue: this.state.tempValue.slice(0, -1)
      })
    }

    sendMessage = () => {
      let data = this.state.data;
      if(this.state.tempValue.length!=0)
        this.setState({
          data: [...data, {
            id: data[data.length - 1].id + 1, 
            date:"now",
            type:'in',
            message:this.state.tempValue
          }],
          placeHolder: 'Write a message...',
          tempValue: ''
        }, function(){
          console.log(this.state.data);
        })
    }

    render() {
    
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.inputContainer}>
                <View
                  style={styles.inputs}
                  onInput={e => {
                    const event = e.nativeEvent; // Extract the value from the runtime
                      // event contains the actual event payload, as well as information on
                      // which cursor the user was using, and which React tag was targeted
                    const inputEvent = event.inputEvent; // Extract the payload
                    console.log(inputEvent);
                    if(inputEvent.action === 'down' && inputEvent.source==='keyboard')
                      this.getInput(inputEvent);
                    if(inputEvent.button === 8)
                      this.deleteLastChar()
                      // inputEvent.button is the raw button index, used to determine what was pressed
                      // inputEvent.buttonClass is a field added to some buttons for common actions,
                      //   like 'confirm', 'back', 'up', 'down', etc.
                      // inputEvent.action is 'up', 'down', or 'repeat'
                      // inputEvent.source identifies the button device, such as keyboard, mouse, etc
                  }}>
                    <Text style={{color: '#000'}}>{this.state.placeHolder}{this.state.tempValue}</Text>
                </View>
                {/* <TextInput style={styles.inputs}
                    placeholder="Write a message..."
                    underlineColorAndroid='transparent'
                    onChangeText={(name_address) => this.setState({name_address})}/> */}
              </View>
    
              <VrButton 
              style={styles.btnSend}
              onClick={this.sendMessage}
              >
                  <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
              </VrButton>
            </View>
            <View style={styles.list}>
                {this.state.data.map((item, i) => (
                    <View key={i} style={[styles.item, item.type === 'in' ? styles.itemIn : styles.itemOut]}>
                    {!(item.type === 'in') && this.renderDate(item.date)}
                    <View style={[styles.balloon]}>
                      <Text style={{color: '#000'}} >{item.message}</Text>
                    </View>
                    {(item.type === 'in') && this.renderDate(item.date)}
                  </View>
                ))}
            </View>
            
          </View>
        );
    }
}
