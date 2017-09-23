import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <FlatButton label="Acho que tem PIPI" primary={true} />
          <FlatButton label="Acho que tem PEPECA" secondary={true} />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ButtonGroup;
