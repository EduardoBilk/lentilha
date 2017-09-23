import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CounterText = styled.p`
  font-size: 30px;
  text-align: center;
`;
const MonthConvertedText = styled.p`
  font-size: 15px;
  text-align: center;
`;

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
        <CounterText>
          Lentilha está com {this.state.weeksCount} semanas e {this.state.daysCount} dia{this.state.daysCount > 1 ? 's' : ''}
        </CounterText>

        <MonthConvertedText>
          ( mais ou menos {this.state.monthCount} {this.state.monthCount >= 2 ? 'meses' : 'mês'} )
        </MonthConvertedText>
      </div>
    );
  }
}

export default Counter;
