import React, { Component } from 'react';
import './App.css';
import { firebaseDb } from './firebase/';
import MyDatePicker from './DatePicker';
import EventList from './EventList';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  async componentDidMount() {
    const value = ((await firebaseDb.ref('data').once('value')).val());
    console.log(value);
    this.state = ({ data: value, pickDate: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TrakoyaWatch</h1>
        </header>
        <EventList data={this.state.data} />
        <MyDatePicker data={this.state.data} />
      </div>
    );
  }
}

export default App;
