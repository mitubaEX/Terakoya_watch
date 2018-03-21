/* @flow */
import React, { Component } from 'react';

import {
  Scene,
  Router,
} from 'react-native-router-flux';

import MainPageContainer from './MainPage';
import EventPage from './EventPage';

class Main extends Component<{}, {}> {
  render(): React.Node {
    return (
      <Router>
        <Scene key="root">
          <Scene key="MainPage" initial component={MainPageContainer} title="Top" />
          <Scene key="EventPage" component={EventPage} title="Event" />
        </Scene>
      </Router>
    );
  }
}

export default Main;
