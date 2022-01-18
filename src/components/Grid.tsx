import { useState } from 'react';
import styled from '@emotion/styled';
import GridSquare from './GridSquare'
import { GridArray } from '../interfaces/Grid';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  width: 600px;
`;

const Grid = (props: { grid: GridArray }) => {
  return (
    <GridContainer>
      {props.grid.flat().map((item, index) => (
        <GridSquare key={index} letter={item.letter} state={item.state} />
      ))}
    </GridContainer>
  )
}

export default Grid;