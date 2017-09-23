import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from './Chart';

const Wrapper = styled.div`
  height: 92vh;
  display flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(254, 203, 131, 0.3);
`;
class SexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mHeight: 80,
      mCount: 0,
      fHeight: 60,
      fCount: 0
    };
  }

  render() {
    return (
      <Wrapper>
        <Chart
          height1={this.state.mHeight}
          bg1="rgba(185, 199, 183, 1.0)"
          height2={this.state.fHeight}
          bg2="rgba(239, 193, 187, 1.0)"
        />
      </Wrapper>
    );
  }
}
export default SexPage;
