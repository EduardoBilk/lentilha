import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from './CustomTheme';
import BottomBar from './BottomBar';
import WeeksPage from './WeeksPage';
import SexPage from './SexPage';
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
          <Route path="/which-sex" component={SexPage} />
          <MuiThemeProvider muiTheme={CustomTheme}>
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
