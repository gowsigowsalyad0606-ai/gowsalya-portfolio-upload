export const personalInfo = {
  name: 'Gowsalya D',
  title: 'Software Developer',
  location: 'Chennai',
  email: 'gowsigowsalyad0606@gmail.com',
  linkedin: 'https://linkedin.com/in/gowsalya-d-6b19b4281',
  summary: 'I am a Software Developer at Quantzi InfoTech with a background in B.E(ECE) from Sri Bharathi Engineering College for Women (2017 – 2021). I specialize in building scalable web and mobile applications using React.js, Next.js, and React Native.',
  status: 'Currently open to new opportunities in scale-up environments',
  stats: [
    { value: '15+', label: 'Digital Solutions' },
    { value: '2+', label: 'Years of Expertise' }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'Buy My Plot',
    category: 'Full-Stack / Web & Mobile',
    description: 'A property listing platform with modules for buyers, sellers, and admins. Built with React.js and React Native.',
    tech: ['React.js', 'React Native'],
    image: '/projects/buymyplot.webp', // placeholder - user to provide
    link: '' // user to provide if available
  },
  {
    id: 2,
    title: 'Integrata CRM',
    category: 'CRM / Angular',
    description: 'Dynamic CRM platform enabling custom workflows, dynamic form generation, and configurable data handling.',
    tech: ['Angular'],
    image: '/projects/integrata.webp',
    link: ''
  },
  {
    id: 3,
    title: 'Avita PG Mgmt',
    category: 'Management / React Native',
    description: 'PG management system for handling tenant operations. Features an admin dashboard and mobile app.',
    tech: ['React Native'],
    image: '/projects/avita.webp',
    link: ''
  },
  {
    id: 4,
    title: 'Northwood Shipping',
    category: 'Logistics / Next.js',
    description: 'Responsive logistics website with Google Sheets integration for lightweight backend data storage.',
    tech: ['Next.js', 'Google Sheets API'],
    image: '/projects/northwood.webp',
    link: ''
  }
];

export const skills = {
  'Frontend Development': ['React.js', 'React Native', 'Next.js', 'Angular', 'Tailwind CSS', 'Redux Toolkit'],
  'Backend & Integration': ['Golang', 'Node.js (Express)', 'REST APIs', 'API Testing (Postman)', 'Axios/Fetch'],
  'Databases & Tools': ['Oracle 11g/12c', 'RMAN Backup', 'MySQL', 'Git / GitHub', 'Performance Optimization']
};

export const experience = [
  {
    company: 'Quantzi InfoTech Pvt Ltd',
    role: 'Software Developer',
    duration: 'Present', // user to update with actual dates
    description: 'Developing scalable web and mobile apps using React, Next.js, and React Native. Focusing on frontend architecture and API integration.',
    isCurrent: true
  },
  {
    company: 'iSQL Global Training',
    role: 'Trainee – Oracle DBA',
    duration: '', // user to provide
    description: 'Managed Oracle 11g/12c databases, performed backup/recovery with RMAN, and handled database migrations.',
    isCurrent: false
  },
  {
    company: 'Foxconn Hon Hai Technology',
    role: 'Assistant Line Leader',
    duration: '', // user to provide
    description: 'Managed motherboard production processes and quality control in a high-volume manufacturing environment.',
    isCurrent: false
  }
];

export const education = {
  degree: 'B.E (ECE)',
  college: 'Sri Bharathi Engineering College for Women',
  years: '2017 – 2021'
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];
