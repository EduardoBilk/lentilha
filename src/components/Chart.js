import React from 'react';
import styled from 'styled-components';
import { db } from '../firebaseConfig';

import './Chart.css';

const ChartWrapper = styled.ul`
  display: table;
  table-layout: fixed;
  width: 60%;
  max-width: 600px;
  height: 65vh;
  margin: 0 auto;
`;
const ChartItem = styled.li`
  position: relative;
  display: table-cell;
  vertical-align: bottom;
  height: 65vh;
`;
const ChartData = styled.span`
  margin: 0 20%;
  display: block;
  animation: draw 1s ease-in-out;
`;
const Tip = styled.p`
  text-align: center;
  font-style: italic;
  font-size: 12px;
`;
const clickHandler = e => {
  const v = e.target.dataset.value;
  db.ref('choices').push(v, () => {
    console.log(`Sucesso no envio de ${v} apra o db.`);
  });
};
const Chart = props => (
  <div>
    <Tip>Cllique para contabilizar seu palpite</Tip>
    <ChartWrapper>
      <ChartItem>
        <ChartData
          style={{ height: props.height1 + '%', background: props.bg1 }}
          title="acho que tem pipi"
          data-value="M"
          data-count={props.count1}
          onClick={clickHandler}
        />
      </ChartItem>
      <ChartItem>
        <ChartData
          style={{ height: props.height2 + '%', background: props.bg2 }}
          title="acho que tem pepeca"
          data-value="F"
          data-count={props.count2}
          onClick={clickHandler}
        />
      </ChartItem>
    </ChartWrapper>
  </div>
);
export default Chart;
