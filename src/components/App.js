import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomBar from './BottomBar';
import WeeksPage from './WeeksPage';
import './App.css';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WeeksPage} />
          <MuiThemeProvider>
            <div>
              <BottomBar />
            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}
export default App;
