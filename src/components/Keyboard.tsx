import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FocusTrap from 'focus-trap-react';
import React from 'react';
import { LetterStates } from '../interfaces/Grid';
import KeyboardButton from './KeyboardButton';

const KeyboardContainer = styled.div`
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

const KeyboardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const layout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ent', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'bksp']
];

const Keyboard = (props: { onSelect: (letter: string) => void, onEnter: () => void, onBackspace: () => void, letterStates: LetterStates }) => {
  const { onSelect, onEnter, onBackspace, letterStates } = props;

  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key.toLowerCase();
    if (key === 'enter') {
      onEnter();
    }
    else if (key === 'backspace') {
      onBackspace();
    }
    else if (key.length === 1) {
      onSelect(key);
    }
  };

  const onButtonPress = (letter: string) => {
    if (letter === 'ent') {
      onEnter();
    } else if (letter === 'bksp') {
      onBackspace();
    } else {
      onSelect(letter);
    }
  };

  return (
    <FocusTrap>
      <KeyboardContainer tabIndex="0" onKeyDown={keyPressHandler}>
        <div tabIndex="0" css={css`outline:0;`}></div>
        {layout.map((row, rowIndex) => (
          <KeyboardRow key={rowIndex}>
            {row.map((letter, colIndex) => (
              <KeyboardButton key={colIndex} letter={letter} onSelect={onButtonPress} state={letterStates[letter]} />
            ))}
          </KeyboardRow>
        ))}
      </KeyboardContainer>
    </FocusTrap>
  );
}

export default Keyboard;