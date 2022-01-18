import React, { useState } from 'react';
import Container from './components/Container';
import Grid from "./components/Grid";
import Keyboard from './components/Keyboard';
import { GridRow, LetterStates } from "./interfaces/Grid";

const defaultGrid = Array(5).fill(null).map(() => Array(5).fill({ letter: '' }));

const currentWord = 'famed'.split('');

const Game = () => {
  const [grid, setGrid] = useState<GridRow[]>(defaultGrid);
  const [letters, setLetters] = useState<LetterStates>({});
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const onLetterSelected = (letter: string) => {
    if (currentCol <= 4) {
      const newGrid = [...grid];
      newGrid[currentRow][currentCol] = { letter };
      setGrid(newGrid);
      setCurrentCol(currentCol + 1);
    }
  };

  const checkWord = () => {
    // Don't do anything if current row isn't filled
    if (grid[currentRow].some(item => !item.letter))
      return;
    
    const updatedRow = grid[currentRow].map((item, index) => {
      const letterPos = currentWord.indexOf(item.letter);
      
      if (letterPos === index) {
        return { ...item, state: 'correct' };
      }
      if (letterPos !== -1) {
        return { ...item, state: 'partial' };
      }
      return { ...item, state: 'incorrect' };
    });

    const newGrid = [...grid];
    newGrid[currentRow] = updatedRow;
    setGrid(newGrid);

    // Update letter states
    const newLetters = { ...letters };
    updatedRow.forEach(letter => {
      newLetters[letter.letter] = letter.state;
    });
    setLetters(newLetters);

    // Move cursor to next row
    if (currentRow < 4) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
  }

  const removeLetter = () => {
    const newGrid = [...grid];
    const newCol = currentCol - 1;

    if (newCol < 0)
      return;
    
    newGrid[currentRow][newCol] = { letter: '' };
    setGrid(newGrid);
    setCurrentCol(newCol);
  }

  return (
    <Container>
      <Grid grid={grid} />
      <Keyboard onSelect={onLetterSelected} onEnter={checkWord} onBackspace={removeLetter} letterStates={letters} />
    </Container>
  );
}

export default Game;
