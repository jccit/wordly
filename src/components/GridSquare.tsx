import styled from '@emotion/styled'
import { getBackgroundColor, LetterState } from '../interfaces/Grid';

const GridContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: #eee;
  position: relative;
`;

const SquareText = styled.p`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GridSquare = (props: { letter: string, state?: LetterState }) => {
  const { letter, state } = props;

  const css = !state ? {} : { backgroundColor: getBackgroundColor(state) };

  return (
    <GridContainer css={css}>
      <SquareText>{letter.toUpperCase()}</SquareText>
    </GridContainer>
  )
}

export default GridSquare