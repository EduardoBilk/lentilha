import React from 'react';
import styled from 'styled-components';

import './Chart.css';

const ChartWrapper = styled.ul`
  display: table;
  table-layout: fixed;
  width: 40%;
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
  margin: 0 5em;
  display: block;
  animation: draw 1s ease-in-out;
`;
const Chart = props => (
  <ChartWrapper>
    <ChartItem>
      <ChartData style={{ height: props.height1 + '%', background: props.bg1 }} title="PIPI" />
    </ChartItem>
    <ChartItem>
      <ChartData style={{ height: props.height2 + '%', background: props.bg2 }} title="PEPECA" />
    </ChartItem>
  </ChartWrapper>
);
export default Chart;
