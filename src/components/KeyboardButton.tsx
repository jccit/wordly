import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getBackgroundColor, LetterState } from "../interfaces/Grid";

const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.card.normal};
  color: ${props => props.theme.colors.text};
  margin: 3px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

const KeyboardButton = (props: { letter: string, state?: LetterState, onSelect: (letter: string) => void }) => {
  const theme = useTheme();
  const { letter, state, onSelect } = props;
  return (
    <StyledButton css={{ backgroundColor: getBackgroundColor(state, theme, true) }} tabIndex="-1" onClick={() => onSelect(letter)}>{letter}</StyledButton>
  );
}

export default KeyboardButton;