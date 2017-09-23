import React, { Component } from 'react';
import Title from './Title';
import Counter from './Counter';

class WeeksPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Thay'
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Title name={this.state.name} />
        <Counter />
      </div>
    );
  }
}
export default WeeksPage;
