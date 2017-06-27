/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderComponent from './Components/Header/HeaderComponent'
import CenterComponent from './Components/Center/CenterComponent'
import FooterComponent from './Components/Footer/FooterComponent'

 export default class WeekSchedule extends Component {
    render() {
      return (
        <View style={styles.content}>
            <HeaderComponent></HeaderComponent>
            <CenterComponent></CenterComponent>
            <FooterComponent></FooterComponent>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  ///// VIEW //////
  content: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#eff0f1',
  },
});

module.export = WeekSchedule;
