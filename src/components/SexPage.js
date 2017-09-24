import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import { db } from '../firebaseConfig';

const Wrapper = styled.div`
  height: 92vh;
  display flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(254, 203, 131, 0.3);
`;
let votes = [];
class SexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mHeight: 80,
      mCount: 0,
      fHeight: 60,
      fCount: 0
    };
    this.updateVotes = this.updateVotes.bind(this);
  }
  componentWillMount() {
    let choiceRef = db.ref('choices').orderByKey();
    choiceRef.on('child_added', snapshot => {
      votes.push(snapshot.val());
      this.updateVotes();
    });
  }
  updateVotes() {
    const count = {};
    const len = votes.length;

    votes.forEach(i => {
      count[i] = (count[i] || 0) + 1;
    });

    this.setState({
      mHeight: count.M / len * 100,
      mCount: count.M,
      fHeight: count.F / len * 100,
      fCount: count.F
    });
  }

  render() {
    return (
      <Wrapper>
        <Chart
          height1={this.state.mHeight}
          bg1="rgba(185, 199, 183, 1.0)"
          count1={this.state.mCount}
          height2={this.state.fHeight}
          bg2="rgba(239, 193, 187, 1.0)"
          count2={this.state.fCount}
        />
      </Wrapper>
    );
  }
}
export default SexPage;
