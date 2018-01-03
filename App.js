import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';

export default StackNavigator({
  First : {
    screen: FirstPage,
    title : 'First Screen'
  },
  Second : {
    screen: SecondPage,
    title : 'First Screen'
  }
});
