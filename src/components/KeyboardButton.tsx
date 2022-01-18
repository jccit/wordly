import styled from "@emotion/styled";
import { getBackgroundColor, LetterState } from "../interfaces/Grid";

const StyledButton = styled.button`
  width: 40px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #eee;
  margin: 2px;
`;

const KeyboardButton = (props: { letter: string, state?: LetterState, onSelect: (letter: string) => void }) => {
  const { letter, state, onSelect } = props;
  return (
    <StyledButton css={{ backgroundColor: getBackgroundColor(state, true) }} tabIndex="-1" onClick={() => onSelect(letter)}>{letter}</StyledButton>
  );
}

export default KeyboardButton;