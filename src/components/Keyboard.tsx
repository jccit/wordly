import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FocusTrap from 'focus-trap-react';
import React from 'react';
import { LetterStates } from '../interfaces/Grid';
import KeyboardButton from './KeyboardButton';

const KeyboardContainer = styled.div`
  &:focus {
    outline: none;
  }
`;

const layout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
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

  return (
    <FocusTrap>
      <KeyboardContainer tabIndex="0" onKeyDown={keyPressHandler}>
        <div tabIndex="0" css={css`outline:0;`}></div>
        {layout.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((letter, colIndex) => (
              <KeyboardButton key={colIndex} letter={letter} onSelect={onSelect} state={letterStates[letter]} />
            ))}
          </div>
        ))}

        <button tabIndex="-1" onClick={() => onEnter()}>Enter</button>
        <button tabIndex="-1" onClick={() => onBackspace()}>Backspace</button>
      </KeyboardContainer>
    </FocusTrap>
  );
}

export default Keyboard;