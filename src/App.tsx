import { Global, ThemeProvider } from "@emotion/react";
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';
import Game from "./Game";

const getTheme = (dark: boolean) => ({
  colors: {
    background: dark ? '#000' : '#fff',
    text: dark ? '#fff' : '#000',
    card: {
      normal: dark ? '#111' : '#eee',
      correct: dark ? '#00911d' : '#69F0AE',
      partial: dark ? '#E3C000' : '#ff0',
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
            height: '100%'
          },
          'body': {
            backgroundColor: theme.colors.background,
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