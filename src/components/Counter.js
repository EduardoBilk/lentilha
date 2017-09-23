import React, { Component } from 'react';
import moment from 'moment';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weeksCount: 0,
      daysCount: 0
    };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    const magicMoment = moment('2017-08-10');
    const weeks = moment().week() - magicMoment.week();
    const days = moment().dayOfYear() - magicMoment.dayOfYear() - weeks * 7;
    const months = weeks / 4;
    this.setState({
      monthCount: months.toFixed(1),
      weeksCount: weeks,
      daysCount: days
    });
  }
  componentDidMount() {
    // this.CounterIntervalId = setInterval(()=>this.updateCount(),1000)
    this.updateCount();
  }
  componentWillUnmount() {
    // clearInterval(this.CounterIntervalId);
  }
  render() {
    return (
      <div className="counter-wrapper">
        <p>
          {this.state.weeksCount}
          <span> semanas e </span>
          {this.state.daysCount}
          <span> dia{this.state.daysCount > 1 ? 's' : ''} </span>
        </p>

        <p>
          ( aproximadamente {this.state.monthCount} {this.state.monthCount >= 2 ? 'meses' : 'mês'} )
        </p>
      </div>
    );
  }
}

export default Counter;
