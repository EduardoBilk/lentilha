import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(254, 203, 131, 0.5);
`;

const WeeksPage = () => (
  <Wrapper>
    <Counter />
  </Wrapper>
);

export default WeeksPage;
