import { Box, Container, Typography } from '@mui/material';
export default function Footer() {
  return <Box component="footer" className="footer"><Container maxWidth="lg" className="footer-inner">
    <Typography variant="body2">© {new Date().getFullYear()} Student Developer Portfolio</Typography>
    <a className="back-top" href="#top">Back to top ↑</a>
  </Container></Box>;
}
