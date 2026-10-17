// Starter portfolio concepts based on the project themes in the supplied brief.
// Replace these examples with your own work before publishing.
const projects = [
  {
    id: 'courseware-portal', number: '01', title: 'AI Courseware Portal', category: 'STUDENT CONCEPT · EDUCATION',
    shortDescription: 'A course workspace concept for organising learning materials and sharing them across a faculty.',
    description: 'A student portfolio concept for a faculty courseware portal. The prototype explores how course modules, review steps, and role-based views could fit into one clear workspace.',
    approach: 'The main design challenge is balancing a flexible course builder with a straightforward experience for reviewing and sharing material. This concept groups authoring tasks into a simple sequence and makes the intended user role visible throughout the interface.',
    tech: ['React', 'Material UI', 'Node.js', 'MongoDB'], live: '', github: '',
    features: ['Organised course modules and previews', 'Separate views for faculty and reviewers', 'A clear path for sharing and exporting material'],
    tone: 'sage', symbol: '▤',
  },
  {
    id: 'iot-health-monitor', number: '02', title: 'IoT Health Monitor', category: 'STUDENT CONCEPT · DASHBOARD',
    shortDescription: 'A simulated health dashboard concept that turns sample sensor readings into useful signals.',
    description: 'A dashboard concept for exploring how a connected health monitor might present sample vital readings. It uses simulated data to focus on readable trends, status cues, and clear alert states.',
    approach: 'Health data needs to be easy to scan without making normal variation feel alarming. This concept separates the latest readings from historical context and uses clear labels alongside colour so the interface remains understandable.',
    tech: ['React', 'Material UI', 'REST API', 'IoT concepts'], live: '', github: '',
    features: ['Simulated vital readings and history', 'Distinct informational and warning states', 'Responsive layout for dashboard views'],
    tone: 'peach', symbol: '⌁',
  },
  {
    id: 'research-tracker', number: '03', title: 'Research Tracker', category: 'STUDENT CONCEPT · DATA APP',
    shortDescription: 'A research record concept for browsing publications, patents, and funded projects.',
    description: 'A student project concept for bringing research records into one searchable place. The interface explores how publications, patents, and funded projects can be organised for quick review and reporting.',
    approach: 'Research information becomes difficult to compare when it lives in separate lists. This concept uses shared record fields, filters, and compact summary counts to make the collection easier to browse.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'], live: '', github: '',
    features: ['Structured records for different research outputs', 'Filters for date and type', 'Summary counts and export-ready data'],
    tone: 'blue', symbol: '⌕',
  },
];
export default projects;
