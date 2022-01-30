import { useState } from 'react';
import styled from '@emotion/styled';
import GridSquare from './GridSquare'
import { GridArray } from '../interfaces/Grid';

const GridContainer = styled.div`
  height: min(430px, 50vh);
  justify-content: center;
  display: flex;
`;

const GridInner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  aspect-ratio: 0.8 / 1;
  height: 100%;
`;

const Grid = (props: { grid: GridArray }) => {
  return (
    <GridContainer>
      <GridInner>
        {props.grid.flat().map((item, index) => (
          <GridSquare key={index} letter={item.letter} state={item.state} />
        ))}
      </GridInner>
    </GridContainer>
  )
}

export default Grid;