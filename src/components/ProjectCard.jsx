import React from 'react';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { Link as RouterLink } from 'react-router-dom';
export default function ProjectCard({ project }) {
  return <Card component={RouterLink} to={`/project/${project.id}`} className="project-card">
    <Box className={`project-art ${project.tone}`}><span className="art-grid" /><span className="art-symbol">{project.symbol}</span><span className="art-index">{project.number} / 03</span></Box>
    <CardContent className="project-content"><Box className="project-card-top"><Typography className="eyebrow">{project.category}</Typography><ArrowOutwardRoundedIcon fontSize="small" /></Box><Typography variant="h5" className="project-title">{project.title}</Typography><Typography color="text.secondary" className="project-description">{project.shortDescription}</Typography><Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.5 }}>{project.tech.slice(0, 3).map((item) => <Chip key={item} label={item} size="small" />)}</Stack></CardContent>
  </Card>;
}
