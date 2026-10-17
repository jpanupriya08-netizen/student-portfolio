import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material';
import SectionHeading from '../components/SectionHeading.jsx';
const groups = [
  { number: '01', title: 'Interface & front end', copy: 'Building accessible, responsive interfaces with a sharp eye for the details.', skills: ['React', 'JavaScript', 'HTML & CSS', 'Material UI', 'Responsive design'] },
  { number: '02', title: 'Product thinking', copy: 'Connecting user needs, product goals, and a clear path through the experience.', skills: ['Interaction design', 'Prototyping', 'User flows', 'Design systems', 'Accessibility'] },
  { number: '03', title: 'Tools & collaboration', copy: 'Working in the open, sharing early, and making progress together.', skills: ['Git & GitHub', 'Figma', 'Vite', 'REST APIs', 'Agile teamwork'] },
];
export default function SkillsPage() {
  return <Container maxWidth="lg"><Box className="inner-page"><SectionHeading eyebrow="WHAT I BRING" title="Skills & approach">A practical mix of design, development, and curiosity. Always learning, always making.</SectionHeading><Box className="skills-list">{groups.map((group) => <Paper className="skill-row" key={group.number} elevation={0}><Typography className="skill-number">{group.number}</Typography><Box className="skill-main"><Typography variant="h5">{group.title}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{group.copy}</Typography><Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>{group.skills.map((skill) => <Chip key={skill} label={skill} />)}</Stack></Box><Typography className="skill-arrow">↗</Typography></Paper>)}</Box></Box></Container>;
}
