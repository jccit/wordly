import { Global, ThemeProvider } from "@emotion/react";
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';
import Game from "./Game";

const getTheme = (dark: boolean) => ({
  colors: {
    background: dark ? '#000' : '#fff',
    text: dark ? '#fff' : '#000',
    card: {
      normal: dark ? '#222' : '#eee',
      correct: dark ? '#538d4e' : '#9afd91',
      partial: dark ? '#b59f3b' : '#ffe575',
      incorrect: dark ? '#666' : '#bbb'
    }
  }
});

const App = () => {
  const preferredColorScheme = usePrefersColorScheme();
  const isDark = preferredColorScheme === 'dark';
  const theme = getTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box'
          },
          'html': {
            backgroundColor: theme.colors.background,
            margin: 0,
            padding: 0,
            height: '100%',
            touchAction: 'manipulation'
          },
          'body': {
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            margin: 0,
            padding: 12,
            height: '100%',
            fontFamily: 'sans-serif'
          },
          '#root': {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      />
      <Game />
    </ThemeProvider>
  )
}

export default App;