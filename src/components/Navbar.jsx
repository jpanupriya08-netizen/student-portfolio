import { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const links = [['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects'], ['/contact', 'Contact']];
export default function Navbar() {
  const { pathname } = useLocation(); const [open, setOpen] = useState(false);
  return <AppBar className="navbar" position="sticky" elevation={0}>
    <Container maxWidth="lg"><Toolbar disableGutters className="nav-toolbar">
      <RouterLink className="brand" to="/" onClick={() => setOpen(false)}><span className="brand-mark">s.</span><span>Student Developer</span></RouterLink>
      <IconButton className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}</IconButton>
      <Box className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {links.map(([path, label]) => <Button key={path} component={RouterLink} to={path} onClick={() => setOpen(false)} className={path === '/' ? pathname === '/' : pathname.startsWith(path) || (path === '/projects' && pathname.startsWith('/project/')) ? 'nav-link active' : 'nav-link'}>{label}</Button>)}
        <Button component={RouterLink} to="/contact" onClick={() => setOpen(false)} variant="contained" className="nav-cta">Let&apos;s talk <span aria-hidden="true">↗</span></Button>
      </Box>
    </Toolbar></Container>
  </AppBar>;
}
