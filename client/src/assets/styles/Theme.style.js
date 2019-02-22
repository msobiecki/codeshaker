import { createTheming } from '@callstack/react-theme-provider';

const { ThemeProvider, withTheme } = createTheming({
  base: {
    footer: {
      background: '#000'
    }
  }
});

export { ThemeProvider, withTheme };
