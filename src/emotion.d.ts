import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      text: string;
      card: {
        normal: string;
        incorrect: string;
        partial: string;
        correct: string;
      }
    }
  }
}
