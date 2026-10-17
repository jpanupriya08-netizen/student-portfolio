import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
export default function AboutPage() {
  return <Container maxWidth="lg"><Box className="inner-page"><SectionHeading eyebrow="A LITTLE CONTEXT" title="About me">I like making technology feel a little more like it was made for people.</SectionHeading>
    <Grid container spacing={6} className="about-layout"><Grid size={{ xs: 12, md: 7 }}><Typography className="about-lead">I&apos;m a student developer building my skills through hands-on projects and steady practice.</Typography><Typography className="body-copy">I enjoy taking an idea from a rough sketch to a working interface. Along the way, I&apos;m learning how thoughtful design, accessible components, and clear code come together to make a useful product.</Typography><Typography className="body-copy">This portfolio brings together practice projects and concepts across web development, dashboards, and community tools. Each one is an opportunity to try something new, solve a problem, and improve my craft.</Typography><Button component={RouterLink} to="/projects" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 2 }}>See the projects</Button></Grid>
      <Grid size={{ xs: 12, md: 5 }}><Paper elevation={0} className="info-card"><Typography className="eyebrow">CURRENT FOCUS</Typography>{[['Learning', 'Modern web development'], ['Building', 'Responsive React projects'], ['Exploring', 'Accessible, useful interfaces'], ['Approach', 'Curiosity, practice, iteration']].map(([a,b]) => <Box className="info-row" key={a}><Typography>{a}</Typography><Typography>{b}</Typography></Box>)}</Paper><Box className="about-aside-art"><span>LEARN</span><b>+</b><span>BUILD</span><b>=</b><span>GROW</span></Box></Grid></Grid>
  </Box></Container>;
}
