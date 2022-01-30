import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getBackgroundColor, LetterState } from "../interfaces/Grid";

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 0;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  background-color: ${props => props.theme.colors.card.normal};
  color: ${props => props.theme.colors.text};
  margin: 2px;
  text-transform: uppercase;
  font-size: 14px;
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