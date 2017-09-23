import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import VenusMarsIco from './VenusMarsIcon';
import PregnantIco from 'material-ui/svg-icons/action/pregnant-woman';

const venusMarsIco = <VenusMarsIco />;
const pregnantIco = <PregnantIco />;

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
    this.select = this.select.bind(this);
  }

  select = index => {
    this.setState({
      selectedIndex: index
    });
  };
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem label="sexo" icon={venusMarsIco} onClick={() => this.select(0)} />

          <BottomNavigationItem label="semanas" icon={pregnantIco} onClick={() => this.select(1)} />
        </BottomNavigation>
      </Paper>
    );
  }
}
export default BottomBar;
