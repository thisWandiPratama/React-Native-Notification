

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import OneSignal from 'react-native-onesignal'; 

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("d7a0bf4a-a40e-4fc1-90b0-bdcf6884bc54", {kOSSettingsKeyAutoPrompt : true});// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
   alert("Notification received: ", notification);
  }

  onOpened(openResult) {
   alert('Message: ', openResult.notification.payload.body);
   alert('Data: ', openResult.notification.payload.additionalData);
   alert('isActive: ', openResult.notification.isAppInFocus);
   alert('openResult: ', openResult);
  }

  onIds(device) {
   alert('Device info: ', device);
  }
  render() { 
    return ( 
      <View>
        <Text>App</Text>
      </View>
     );
  }
}
 
export default App;
