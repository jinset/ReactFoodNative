import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


export default class DatePickerComponent extends Component {

  constructor(){
    super()
    this.state = {
      curTime : new Date().toLocaleString(),
      weekLater : Moment(this.curTime).add(7,'day').format("YYYY-MM-DD"),
    }
  }

  sevenDays(){
    return Moment(this.state.date).add(7,'day').format("YYYY-MM-DD")
  }

  render() {
    return (
      <View style={styles.subHeader}>
          <DatePicker
            style={{width: 150}}
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                marginLeft: 0
              },
                dateInput: {
                  marginLeft: 36
                }
            }}
            onDateChange={(date) => {this.setState({date: date}),this.setState({weekLater: this.sevenDays()})}}
         />
         <Text style={styles.subtitle}>
          hasta       {this.state.weekLater}
         </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  ///// VIEW //////
  subHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //// TEXT ///////
  subtitle: {
    margin: 25,
    fontSize: 15,
  },
});

module.export = DatePickerComponent;
