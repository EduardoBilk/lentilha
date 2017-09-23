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
class SexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mHeight: 80,
      mCount: 0,
      fHeight: 60,
      fCount: 0,
      user: '',
      choice: ''
    };
  }
  componentWillMount() {
    let choiceRef = db
      .ref('choices')
      .orderByKey()
      .limitToLast(100);
    choiceRef.on('child_added', snapshot => {
      let choice = { text: snapshot.val(), id: snapshot.key };
      this.setState({
        mHeight: this.state.mHeight,
        mCount: this.state.mCount,
        fHeight: this.state.fHeight,
        fCount: this.state.fCount,
        user: snapshot.key,
        choice: snapshot.val()
      });
    });
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
