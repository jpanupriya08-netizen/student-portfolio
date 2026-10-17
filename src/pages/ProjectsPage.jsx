import React from 'react';
import { Box, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import projects from '../data/projects.js';
export default function ProjectsPage() {
  return <Container maxWidth="lg"><Box className="inner-page"><SectionHeading eyebrow="STUDENT CONCEPTS & PRACTICE" title="Projects">Starter project concepts based on the themes in the portfolio brief. Replace these with your own work and links when you are ready.</SectionHeading><Box className="project-grid project-grid-page">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</Box></Box></Container>;
}
