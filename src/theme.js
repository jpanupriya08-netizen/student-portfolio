import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', primary: { main: '#174c3b', dark: '#103b2e' },
    secondary: { main: '#d0ef75' }, background: { default: '#f7f8f5', paper: '#fff' },
    text: { primary: '#18221d', secondary: '#66716b' },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-.065em' }, h2: { fontWeight: 600, letterSpacing: '-.05em' },
    h3: { fontWeight: 600, letterSpacing: '-.035em' }, button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999, paddingInline: 19, minHeight: 44 } } },
    MuiCard: { styleOverrides: { root: { boxShadow: 'none' } } },
  },
});
export default theme;
