 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import WeekSchedule from './App/WeekSchedule/weekSchedule'

 ///////////////////////////////  AwesomeProject  ////////////////////////////////
  export default class AwesomeProject extends Component {

   render() {
     return (
       <WeekSchedule />
     );
   }
 }

 AppRegistry.registerComponent('AwesomeProject', () => WeekSchedule);
