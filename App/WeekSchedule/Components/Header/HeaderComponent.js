import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import DatePickerComponent from './DatePickerComponent';

export default class HeaderComponent extends Component {

  render() {
    return (
      <View style={styles.header}>
            <Text style={styles.title}>
                Semana Nueva
            </Text>
            <DatePickerComponent></DatePickerComponent>
      </View>
  )}
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});

module.export = HeaderComponent;
