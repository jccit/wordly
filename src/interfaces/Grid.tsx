import type { Theme } from "@emotion/react";

export type LetterState = 'partial' | 'correct' | 'incorrect';

export type LetterStates = { [key: string]: LetterState };

export interface GridItem {
  letter: string;
  state?: LetterState;
}

export type GridRow = GridItem[];

export type GridArray = GridRow[];

export const getBackgroundColor = (state: LetterState, theme: Theme, isKeyboard?: boolean): string => {
  if (isKeyboard && state === 'incorrect') {
    return theme.colors.card.incorrect;
  }

  switch (state) {
    case 'partial':
      return theme.colors.card.partial;
    case 'correct':
      return theme.colors.card.correct;
    default:
      return theme.colors.card.normal;
  }
}