import React, { useState } from 'react';
import Container from './components/Container';
import Grid from "./components/Grid";
import Keyboard from './components/Keyboard';
import { GridRow, LetterStates } from "./interfaces/Grid";
import { isValidWord, randomWord } from './words';

const defaultGrid = Array(6).fill(null).map(() => Array(5).fill({ letter: '' }));

const Game = () => {
  const [grid, setGrid] = useState<GridRow[]>(defaultGrid);
  const [letters, setLetters] = useState<LetterStates>({});
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [currentWord, setCurrentWord] = useState(randomWord());
  const [complete, setComplete] = useState(false);

  const onLetterSelected = (letter: string) => {
    if (currentCol <= 5) {
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

    // Don't update anything if the word isn't valid
    if (!isValidWord(grid[currentRow].map(item => item.letter).join('')))
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

    // if all states are correct
    if (Object.values(newLetters).every(state => state === 'correct')) {
      setComplete(true);
    }

    // Move cursor to next row
    if (currentRow < 5) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    } else {
      setComplete(true);
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
      {complete ? <h2>The word was '{currentWord}'</h2> : null }
      <Grid grid={grid} />
      <Keyboard disabled={complete} onSelect={onLetterSelected} onEnter={checkWord} onBackspace={removeLetter} letterStates={letters} />
    </Container>
  );
}

export default Game;
