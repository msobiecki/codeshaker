import { createTheming } from '@callstack/react-theme-provider';
import { Colors } from './Variables.style';

const { ThemeProvider, withTheme } = createTheming({
  base: {
    public: {
      section: {
        background: Colors.white,
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
    admin: {
      panel: {
        background: Colors.white,
        navigation: {},
        content: {},
        footer: {}
      }
    }
  },
  aztec: {
    public: {
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
    },
    admin: {
      panel: {
        background: Colors.white,
        navigation: {},
        content: {},
        footer: {}
      }
    }
  }
});

export { ThemeProvider, withTheme };
