export type LetterState = 'partial' | 'correct' | 'incorrect';

export type LetterStates = { [key: string]: LetterState };

export interface GridItem {
  letter: string;
  state?: LetterState;
}

export type GridRow = GridItem[];

export type GridArray = GridRow[];

export const getBackgroundColor = (state: LetterState, isKeyboard?: boolean): string => {
  if (isKeyboard && state === 'incorrect') {
    return '#999';
  }

  switch (state) {
    case 'partial':
      return 'yellow';
    case 'correct':
      return 'green';
    default:
      return '#eee';
  }
}