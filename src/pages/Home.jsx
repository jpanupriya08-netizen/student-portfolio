import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import projects from '../data/projects.js';

export default function Home() {
  return <>
    <Container maxWidth="lg"><Box className="hero">
      <Box className="hero-copy"><Typography className="eyebrow"><span className="status-dot" /> LEARNING · BUILDING · EXPLORING</Typography>
        <Typography variant="h1" className="hero-title">Curious by nature, <span>building for people.</span></Typography>
        <Typography className="hero-description">I&apos;m a student developer learning by making useful, thoughtful web experiences. Here are a few projects and skills I&apos;ve been exploring.</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="hero-actions"><Button component={RouterLink} to="/projects" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Explore my work</Button><Button className="text-action" component={RouterLink} to="/about" endIcon={<NorthEastRoundedIcon />}>A little about me</Button></Stack>
      </Box>
      <Box className="hero-visual" aria-label="Abstract green and lime shapes"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-sun" /><div className="hero-blob" /><div className="hero-caption"><span>MADE WITH CURIOSITY</span><span>✳</span></div><div className="hero-stamp">LEARN<br />MAKE<br /><span>REPEAT</span></div></Box>
      <Box className="hero-bottom"><span>A STUDENT PORTFOLIO · PROJECTS IN PROGRESS</span><a href="#selected-work">SCROLL TO EXPLORE ↓</a></Box>
    </Box></Container>
    <Box component="section" id="selected-work" className="section-band"><Container maxWidth="lg"><Box className="section-head-row"><SectionHeading eyebrow="PRACTICE PROJECTS & CONCEPTS" title="Selected projects" /><Button component={RouterLink} to="/projects" className="all-work-link" endIcon={<ArrowForwardRoundedIcon />}>All projects</Button></Box><Box className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</Box></Container></Box>
    <Container maxWidth="lg"><Box className="home-note"><Typography className="eyebrow">ALWAYS LEARNING</Typography><Typography variant="h3">Every project is a chance to get a little better.</Typography><Button component={RouterLink} to="/contact" variant="contained" endIcon={<NorthEastRoundedIcon />}>Get in touch</Button></Box></Container>
  </>;
}
