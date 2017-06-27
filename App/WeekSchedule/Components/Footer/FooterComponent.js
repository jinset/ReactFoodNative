import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  FooterComponent  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
export default class FooterComponent extends Component {
  constructor(props){
    super(props);
    const {height, width} = Dimensions.get("window");
    this.state = {
      width,
      height
    }
  }

  cancel(){
    alert("Rechazar");
  }
  agree(){
    alert("Aceptar");
  }

  render() {
    return (
      <View style={styles.footer}>
          <TouchableHighlight style={styles.button} onPress={this.agree}>
          <Text style={styles.textBtn}>
              Aceptar
          </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.cancel}>
          <Text style={styles.textBtn}>
              Rechazar
          </Text>
          </TouchableHighlight>
      </View>
  )}
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width/2,
  }
});

module.export = FooterComponent;
