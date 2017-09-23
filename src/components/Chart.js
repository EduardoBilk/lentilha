import React from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig';

import './Chart.css';

const ChartWrapper = styled.ul`
  display: table;
  table-layout: fixed;
  width: 60%;
  max-width: 600px;
  height: 75vh;
  margin: 0 auto;
`;
const ChartItem = styled.li`
  position: relative;
  display: table-cell;
  vertical-align: bottom;
  height: 75vh;
`;
const ChartData = styled.span`
  margin: 0 20%;
  display: block;
  animation: draw 1s ease-in-out;
`;
const clickHandler = e => {
  console.log(e.target.dataset.value);
  db.ref('choices').push(e.target.dataset.value, () => {
    console.log(`Sucesso no envio de ${e.target.dataset.value} apra o db.`);
  });
};
const Chart = props => (
  <ChartWrapper>
    <ChartItem>
      <ChartData
        style={{ height: props.height1 + '%', background: props.bg1 }}
        title="ACHO QUE TEM PIPI"
        data-value="M"
        onClick={clickHandler}
      />
    </ChartItem>
    <ChartItem>
      <ChartData
        style={{ height: props.height2 + '%', background: props.bg2 }}
        title="ACHO QUE TEM PEPECA"
        data-value="F"
        onClick={clickHandler}
      />
    </ChartItem>
  </ChartWrapper>
);
export default Chart;
