import React from 'react';
import { Box, Typography } from '@mui/material';
export default function SectionHeading({ eyebrow, title, children }) {
  return <Box className="section-heading"><Typography className="eyebrow">{eyebrow}</Typography><Typography variant="h2" className="section-title">{title}</Typography>{children && <Typography className="section-intro">{children}</Typography>}</Box>;
}
