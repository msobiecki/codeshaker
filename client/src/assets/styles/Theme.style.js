import { createTheming } from '@callstack/react-theme-provider';
import { Colors } from './Variables.style';

const { ThemeProvider, withTheme } = createTheming({
  base: {
    section: {
      section: {
        background: Colors.white
      },
      category: {
        color: Colors.violet
      },
      title: {
        color: Colors.black
      },
      content: {
        color: Colors.grey
      }
    }
  },
  aztec: {
    section: {
      section: {
        background: Colors.white
      },
      category: {
        color: Colors.green
      },
      title: {
        color: Colors.black
      },
      content: {
        color: Colors.grey
      }
    }
  }
});

export { ThemeProvider, withTheme };
