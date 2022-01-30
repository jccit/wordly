import { useTheme } from '@emotion/react';
import styled from '@emotion/styled'
import { getBackgroundColor, LetterState } from '../interfaces/Grid';

const GridContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${props => props.theme.colors.card.normal};
  color: ${props => props.theme.colors.text};
  position: relative;
`;

const SquareText = styled.p`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: min(8vw, 40px);
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GridSquare = (props: { letter: string, state?: LetterState }) => {
  const theme = useTheme()
  const { letter, state } = props;

  const css = !state ? {} : { backgroundColor: getBackgroundColor(state, theme) };

  return (
    <GridContainer css={css}>
      <SquareText>{letter.toUpperCase()}</SquareText>
    </GridContainer>
  )
}

export default GridSquare