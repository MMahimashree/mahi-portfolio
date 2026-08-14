/**
 * PORTFOLIO DATA — Edit everything here.
 * This is the single source of truth for all content on the site.
 * Change text, links, projects, skills, teaching topics, and more.
 */

import {
  Code2,
  Sparkles,
  Brain,
  MessageSquareText,
  Layers,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Link as LinkIcon,
  Youtube,
  FileText,
  ArrowRight,
  Lightbulb,
  Search,
  GraduationCap,
  Users,
  Trophy,
  Rocket,
  ShieldCheck,
  Clock,
  Zap,
} from 'lucide-react';

export type FeaturedProject = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  liveDemo: string;
};

/* ============================================================
   PERSONAL INFO
   ============================================================ */
export const personal = {
  name: 'M Mahimashree',
  initials: 'MM',
  roles: ['AI Builder', 'Full-Stack Developer', 'Aspiring AI Native Mentor'],
  roleLine: 'AI Builder • Full-Stack Developer • Aspiring AI Native Mentor',
  badge: 'OPEN TO AI, FULL-STACK & TEACHING OPPORTUNITIES',
  headline1: "I don't just use AI.",
  headline2: 'I build with it, understand it, and explain it.',
  bio: "Computer Science Engineering student who enjoys turning ideas into working products, experimenting with AI-assisted development, and simplifying technical concepts so others can understand them.",
  // Your photo is loaded from the local assets folder
  profileImage: '/src/assets/Mahii.jpeg',
  resume: '/src/assets/resume.pdf',
  currentlyBuilding: ['React', 'Java', 'Python', 'AI'],
  // LeetCode 100 Days Badge — replace with your badge screenshot if needed
  leetcodeBadge: '/src/assets/leetcode-100.png',
};

/* ============================================================
   LINKS
   ============================================================ */
export const links = {
  github: 'https://github.com/MMahimashree',
  linkedin: 'https://linkedin.com/in/mmahimashree',
  leetcode: 'https://leetcode.com/u/MMahimashree_23',
  email: 'mmahimashree@gmail.com',
};

/* ============================================================
   NAVIGATION
   ============================================================ */
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#ai-building' },
  { label: 'Projects', href: '#projects' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

/* ============================================================
   ABOUT
   ============================================================ */
export const about = {
  statement: ['Curious enough to learn.', 'Practical enough to build.', 'Patient enough to explain.'],
  paragraphs: [
    "I'm a Computer Science Engineering student who enjoys building practical software, experimenting with AI tools, learning new technologies, and explaining technical concepts in simple language.",
    'I like taking an idea, breaking it into smaller problems, using the right tools to prototype it, debugging what doesn\u2019t work, and turning it into something people can actually use.',
  ],
  cards: [
    { icon: Code2, title: 'BUILD', text: 'Full-stack applications and practical software' },
    { icon: Search, title: 'EXPLORE', text: 'AI, ML, NLP and emerging developer tools' },
    { icon: MessageSquareText, title: 'EXPLAIN', text: 'Breaking technical concepts into simple ideas' },
    { icon: Users, title: 'LEAD', text: 'Hackathons, entrepreneurship and team projects' },
  ],
};

/* ============================================================
   AI + BUILDING
   ============================================================ */
export const aiBuilding = {
  subtitle: 'AI is my development partner — not a replacement for understanding.',
  statement:
    'I use AI tools to accelerate development, generate ideas, explore approaches, debug problems and prototype faster — while validating and understanding the generated output.',
  cards: [
    { icon: Sparkles, title: 'AI-Assisted Development', text: 'Using AI tools to accelerate development and generate ideas while validating the output.' },
    { icon: Lightbulb, title: 'Prompt-Driven Prototyping', text: 'Turning prompts into working prototypes to explore ideas quickly.' },
    { icon: Brain, title: 'Machine Learning', text: 'Learning and applying ML concepts through hands-on projects and experiments.' },
    { icon: MessageSquareText, title: 'NLP', text: 'Exploring natural language processing for classification and chatbot applications.' },
    { icon: Layers, title: 'Full-Stack Development', text: 'Building end-to-end applications across frontend, backend, and databases.' },
    { icon: FlaskConical, title: 'Rapid Experimentation', text: 'Prototyping, testing, and iterating on ideas to find what works.' },
  ],
  workflow: ['IDEA', 'PROMPT', 'PROTOTYPE', 'UNDERSTAND', 'DEBUG', 'BUILD'],
};

/* ============================================================
   FEATURED PROJECTS
   ============================================================ */
export const featuredProjects = [
  {
    title: 'Mahi Orbit — HR Dashboard',
    // Replace /src/assets/project-1.png with your screenshot
    image: '/src/assets/project-1.png',
    description:
      'Full-stack HR management platform for employee and department operations with salary analytics, search, filtering and data-driven dashboard functionality.',
    tech: ['Java', 'JavaScript', 'React.js', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'REST APIs', 'Swagger/OpenAPI'],
    highlights: ['Employee management', 'Department operations', 'Salary analytics', 'REST APIs', 'PostgreSQL + Hibernate', 'Swagger/OpenAPI'],
    github: 'https://github.com/MMahimashree/mahi-orbit-hr-dashboard-frontend',
    liveDemo: '',
  },
  {
    title: 'MedBot — AI Medical Chatbot',
    // Replace /src/assets/project-2.png with your screenshot
    image: '/src/assets/project-2.png',
    description:
      'NLP-based medical chatbot exploring symptom classification and preliminary disease prediction, with role-based dashboards and appointment/doctor recommendation concepts.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'TF-IDF', 'Naive Bayes'],
    highlights: ['NLP', 'TF-IDF', 'Naive Bayes', 'Symptom classification', 'Streamlit', 'Dashboard concepts'],
    github: 'https://github.com/MMahimashree/Medbot',
    liveDemo: '',
  },
  {
    title: 'Project 3',
    // Replace /src/assets/project-3.png with your screenshot
    image: '/src/assets/project-3.png',
    description: 'Add a short description for your third project here. Edit this in src/data/portfolio.ts.',
    tech: ['Tech 1', 'Tech 2'],
    highlights: ['Highlight 1', 'Highlight 2'],
    github: '',
    liveDemo: '',
  },
  {
    title: 'Project 4',
    // Replace /src/assets/project-4.png with your screenshot
    image: '/src/assets/project-4.png',
    description: 'Add a short description for your fourth project here. Edit this in src/data/portfolio.ts.',
    tech: ['Tech 1', 'Tech 2'],
    highlights: ['Highlight 1', 'Highlight 2'],
    github: '',
    liveDemo: '',
  },
];

export const otherBuilds = [
  {
    title: 'TaskOrbit',
    description: 'Full-stack task management application using React.js, Node.js/Express, MongoDB, JWT and Tailwind CSS.',
    github: 'https://github.com/MMahimashree/taskorbit',
    liveDemo: 'https://taskorbit-nine.vercel.app/',
  },
  { title: 'SAP Hackfest', description: 'Team-led hackathon project at SAP Labs.', github: '', liveDemo: '' },
  { title: 'Srinathon 2.0', description: '24-hour hackathon — built and presented a working technical solution.', github: '', liveDemo: '' },
  { title: 'RescueSync / Inceptio\u201926', description: 'Medical ideathon project — Top 7 among 52 teams.', github: '', liveDemo: '' },
];

/* ============================================================
   TEACHING / EXPLAINING
   ============================================================ */
export const teaching = {
  heading: 'Can I explain it to someone who has never seen it before?',
  subtitle: 'Understanding something is one skill.\nMaking someone else understand it is another.',
  howLabel: 'How I teach',
  howText: 'Start with something familiar → introduce the technical idea → show a practical example → connect it back to the technology.',
  topics: [
    {
      question: 'What is an API?',
      answer:
        "Think of an API like a waiter in a restaurant.\n\nYou don't walk into the kitchen and prepare the food yourself. You tell the waiter what you want. The waiter takes your request to the kitchen and brings the response back.\n\nIn software, the frontend sends a request through an API, the backend processes it, and the API returns the result.",
    },
    {
      question: 'How does a chatbot work?',
      answer:
        "A chatbot reads your message, tries to understand what you're asking, and picks the best response it can find.\n\nSimple chatbots match keywords. Smarter ones use machine learning to understand intent. For example, a medical chatbot might take your symptoms, compare them against trained data, and suggest a possible condition — not to replace a doctor, but to guide you.\n\nThe key idea: it turns messy human language into something a computer can act on.",
    },
    {
      question: 'What is Machine Learning?',
      answer:
        "Machine learning is teaching a computer to recognize patterns from examples instead of giving it step-by-step rules.\n\nImagine showing a child hundreds of photos of cats and dogs. Eventually they learn the difference without you explaining it. ML works the same way — you feed data into a model, and it learns to make predictions on new, unseen data.\n\nThe more relevant the examples, the better it gets.",
    },
    {
      question: 'How does React communicate with a backend?',
      answer:
        "React runs in the browser and handles what you see. The backend runs on a server and handles data.\n\nThey talk through requests — usually using fetch or Axios. React sends a request (like 'give me all employees'), the backend queries the database, and sends back data, often as JSON. React then updates the screen with that data.\n\nIt's a conversation: ask, receive, display.",
    },
    {
      question: 'How can AI tools accelerate development?',
      answer:
        "AI tools help me move faster at every stage — brainstorming ideas, generating boilerplate, exploring different approaches, and debugging errors.\n\nBut speed isn't the whole point. The real value is that I still review, understand, and own what gets built. AI is a collaborator that helps me prototype and learn — not a replacement for understanding the code I ship.",
    },
  ],
};

/* ============================================================
   LEADERSHIP / ENTREPRENEURSHIP
   ============================================================ */
export const leadership = [
  {
    icon: Trophy,
    title: 'Entrepreneurship Development Program — CEC',
    subtitle: '2nd Prize among 49 selected teams',
    badge: 'Final Pitch Day',
    description:
      'Presented a workforce-technology startup idea and communicated the problem, solution and value proposition through a final pitch.',
  },
  {
    icon: Users,
    title: 'SAP Hackfest 2025 — SAP Labs',
    subtitle: 'Team Lead — BiasBreakers',
    badge: 'State Hub Round',
    description: 'Progressed from college round to State Hub Round.',
  },
  {
    icon: Clock,
    title: 'Srinathon 2.0 Hackathon',
    subtitle: '24-hour hackathon',
    badge: 'Built & Presented',
    description: 'Built and presented a working technical solution under a strict time constraint.',
  },
  {
    icon: ShieldCheck,
    title: "Inceptio'26 Medical Ideathon — AIC NITTE",
    subtitle: 'RescueSync — Winner of \u20B92,500',
    badge: 'Top 7 / 52 teams',
    description: 'Top 7 among 52 teams. Winner of \u20B92,500 for RescueSync.',
  },
];

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
export const achievements = [
  {
    stat: 'TOP 7 / 52',
    title: "Inceptio'26 Medical Ideathon",
    org: 'AIC NITTE',
    detail: 'RescueSync — Winner of \u20B92,500',
    icon: Trophy,
    // Optional badge/certificate photo — replace with your image, or leave empty to use the icon
    image: '',
  },
  {
    stat: '2ND PRIZE / 49 TEAMS',
    title: 'Entrepreneurship Development Program',
    org: 'CEC',
    detail: 'Final Pitch Day',
    icon: Rocket,
    image: '',
  },
  {
    stat: 'STATE HUB ROUND',
    title: 'SAP Hackfest 2025',
    org: 'SAP Labs',
    detail: 'Team Lead — BiasBreakers',
    icon: Users,
    image: '',
  },
  {
    stat: '24 HOURS',
    title: 'Srinathon 2.0 Hackathon',
    org: '',
    detail: 'Built and presented a working technical solution.',
    icon: Zap,
    image: '',
  },
];

/* ============================================================
   TECHNICAL STACK
   ============================================================ */
export const skills = {
  categories: [
    {
      name: 'Languages',
      items: ['Java', 'Python', 'JavaScript', 'C', 'SQL'],
    },
    {
      name: 'Frontend',
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Axios', 'React Hooks', 'React Router'],
    },
    {
      name: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'Django basics', 'REST APIs', 'JDBC', 'Hibernate'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      name: 'AI / ML',
      items: ['AI-assisted development', 'Machine Learning', 'NLP', 'Scikit-learn', 'TF-IDF', 'Naive Bayes', 'Streamlit'],
    },
    {
      name: 'Tools',
      items: ['Git', 'GitHub', 'Maven', 'Postman', 'Swagger', 'OpenAPI', 'VS Code'],
    },
  ],
};

/* ============================================================
   CONTACT
   ============================================================ */
export const contact = {
  heading: "LET'S CONNECT",
  text: 'Have an idea worth building, a concept worth explaining, or a problem worth solving?',
  cards: [
    { icon: Mail, label: 'Email', value: 'mmahimashree@gmail.com', href: 'mailto:mmahimashree@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/mmahimashree', href: 'https://linkedin.com/in/mmahimashree' },
    { icon: Github, label: 'GitHub', value: 'github.com/MMahimashree', href: 'https://github.com/MMahimashree' },
    { icon: LinkIcon, label: 'LeetCode', value: 'leetcode.com/u/MMahimashree_23', href: 'https://leetcode.com/u/MMahimashree_23' },
  ],
};

/* ============================================================
   FOOTER
   ============================================================ */
export const footer = {
  name: 'M Mahimashree',
  tagline: 'Building. Learning. Explaining.',
  links: [
    { icon: Github, href: 'https://github.com/MMahimashree', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mmahimashree', label: 'LinkedIn' },
    { icon: LinkIcon, href: 'https://leetcode.com/u/MMahimashree_23', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:mmahimashree@gmail.com', label: 'Email' },
  ],
};

/* ============================================================
   ICON RE-EXPORTS (used across sections)
   ============================================================ */
export const icons = {
  Github,
  Linkedin,
  Mail,
  Youtube,
  FileText,
  ArrowRight,
  GraduationCap,
  ExternalLink: ArrowRight,
};
