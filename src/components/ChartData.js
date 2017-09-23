import React, { Component } from 'react';
import styled from 'styled-components';

const ChartDataM = styled.span`
  margin: 0 5em;
  display: block;
  background: rgba(209, 236, 250, 0.75);
  animation: draw 1s ease-in-out;
`;
const ChartDataF = styled.span`
  margin: 0 5em;
  display: block;
  background: rgba(247, 75, 229, 0.75);
  animation: draw 1s ease-in-out;
`;

class ChartData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ChartDataF />;
  }
}
export default ChartData;
