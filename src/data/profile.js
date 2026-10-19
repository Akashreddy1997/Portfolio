// All portfolio content lives here. Edit this file to update the website text.

export const profile = {
  name: 'Akash Reddy',
  role: 'Senior Full Stack Developer',
  focus: ['C# / .NET', 'React', 'WPF / MVVM', 'Industrial Automation'],
  tagline: 'I build software that talks to real machines.',
  intro:
    'Full stack .NET engineer with 4 years 10 months of experience across industrial automation, aerospace test systems, navigation devices and functional safety, from React and WPF user interfaces down to ASP.NET Core APIs, SQL and TCP/IP equipment.',
  location: 'Bengaluru, India',
  email: 'akreddy3339@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akash-reddy-35510721b',
  github: 'https://github.com/Akashreddy1997',
  resumeFile: 'Akash_Reddy_Resume.pdf', // put the PDF in the "public" folder with this name
  // Free key from https://web3forms.com (enter your email there, they mail you the key).
  // Messages from the contact form are delivered to that email. Leave empty to hide the form.
  contactFormKey: '',
  photo: '', // optional: put a square photo in "public" (e.g. 'akash.jpg') and write its name here
};

// Website services. Each one switches on automatically when you fill its value.
// Step-by-step setup for every item is in README.md ("Setup checklist").
export const site = {
  url: 'https://akashreddy1997.github.io/Portfolio', // your live address, e.g. 'https://akashreddy-dev.github.io' (enables Google sitemap + link previews)
  calendly: '', // your Calendly link, e.g. 'https://calendly.com/akashreddy/15min' (adds "Book a call" buttons)
  googleSiteVerification: '', // code from Google Search Console → "HTML tag" method (only the content="..." value)
  goatcounter: '', // your GoatCounter code, e.g. 'akashreddy' for akashreddy.goatcounter.com
  cloudflareAnalyticsToken: '', // token from Cloudflare Web Analytics (use GoatCounter OR Cloudflare, one is enough)
};

// Shown as a badge in the hero and in the "At a glance" card.
// Fill noticePeriod / workMode when you want recruiters to see them; empty values are hidden.
export const availability = {
  status: 'Open to new opportunities',
  lookingFor: '.NET Full Stack roles (C#, ASP.NET Core, React)',
  noticePeriod: '', // e.g. '30 days' or 'Immediate'
  workMode: '', // e.g. 'Hybrid / On-site · open to relocation'
};

export const stats = [
  { value: '4y 10m', label: 'Professional experience' },
  { value: '4 domains', label: 'Automation · Aerospace · Navigation · Safety' },
  { value: 'UI → DB', label: 'End-to-end ownership' },
  { value: 'ISO 26262', label: 'Safety-critical exposure' },
];

// "At a glance" card for recruiters. Empty values are hidden automatically.
export const quickFacts = [
  { label: 'Current role', value: 'Senior Software Engineer · Qusonic Technologies' },
  { label: 'Experience', value: '4 years 10 months' },
  { label: 'Location', value: 'Bengaluru, India' },
  { label: 'Looking for', value: availability.lookingFor },
  { label: 'Core stack', value: 'C# · .NET 8 · ASP.NET Core · React 18 · WPF · SQL' },
  { label: 'Notice period', value: availability.noticePeriod },
  { label: 'Work mode', value: availability.workMode },
  { label: 'Education', value: 'B.E. Electronics & Communication · CGPA 8.26' },
];

// Shown under the hero as "Currently exploring".
export const exploring = ['Agentic AI workflows', 'MCP & A2A', 'Context engineering', 'Azure DevOps CI/CD'];

export const about = [
  'I work across the whole stack: React and WPF interfaces, ASP.NET Core REST services, real-time SignalR updates, EF Core with PostgreSQL and SQL Server, and TCP/IP integration with equipment on the factory floor.',
  'What I enjoy most is reliability: tracing an asynchronous connection-state issue across UI, API, services and equipment layers, keeping an interface responsive under live machine data, and designing code that can be tested without the hardware.',
  'I started in safety-critical engineering (ISO 26262), with traceability, qualification documentation and peer reviews, and I bring that quality mindset to every project. Today I also use AI-assisted engineering for debugging, test design and documentation.',
];

export const skillGroups = [
  {
    title: 'Backend & C#',
    items: ['C#', '.NET 8', '.NET Framework', 'ASP.NET Core Web API', 'REST APIs', 'LINQ', 'Generics', 'Delegates & events', 'async/await', 'Task/TPL', 'Middleware', 'Dependency injection'],
  },
  {
    title: 'Frontend & Desktop',
    items: ['React 18', 'Redux Toolkit', 'Hooks', 'JavaScript', 'HTML5 / CSS3', 'Axios', 'WPF', 'XAML', 'MVVM', 'Data binding', 'ICommand', 'WinForms'],
  },
  {
    title: 'Architecture & Integration',
    items: ['SignalR', 'TCP/IP equipment integration', 'Client/server communication', 'Event-driven workflows', 'OOP', 'SOLID', 'Design patterns', 'Microservices concepts'],
  },
  {
    title: 'Data',
    items: ['Entity Framework Core', 'PostgreSQL', 'SQL Server / T-SQL', 'Query optimization', 'Transactions & concurrency'],
  },
  {
    title: 'Testing & DevOps',
    items: ['NUnit', 'Unit & integration testing', 'Code coverage', 'Git', 'Azure DevOps', 'YAML CI/CD', 'Swagger', 'Postman', 'NLog'],
  },
  {
    title: 'AI-assisted Engineering',
    items: ['AI-assisted debugging', 'Test design', 'Documentation', 'AI agents', 'MCP', 'A2A', 'Context engineering', 'GitHub Copilot / Claude'],
  },
];

export const experience = [
  {
    company: 'Qusonic Technologies',
    title: 'Senior Software Engineer',
    period: 'Oct 2024 – Present',
    summary: 'Halo Line Automation (ALI): an industrial automation platform.',
    stack: ['C#', '.NET 8', 'React 18', 'SignalR', 'EF Core', 'PostgreSQL'],
    points: [
      'Develop ASP.NET Core REST services for equipment commands, operator actions, jobs, alarms, events, interlocks and material tracking, with controllers focused on HTTP and services owning business logic.',
      'Built React/Redux equipment dashboards and operator-control workflows, using REST and SignalR to keep machine state, production data and operator actions in sync in real time.',
      'Implemented SignalR broadcasts with cached-state delivery for newly connected clients, improving consistency between equipment-status services and operator interfaces.',
      'Supported Online/Offline equipment control and TCP/IP / Beckhoff Ethernet communication; traced asynchronous connection-state transitions across UI, API, services and equipment layers.',
      'Delivered load-port door request/cancel/confirm workflows, robot-station validation, equipment-control states, interlocks and event-driven history tracking.',
    ],
  },
  {
    company: 'ALTEN GT',
    title: 'Software Engineer',
    period: 'Oct 2021 – Jul 2024',
    summary: 'Progressed from Engineer Trainee to Software Engineer on Windows engineering, navigation-device and aerospace test applications.',
    stack: ['C#', 'WPF', 'XAML', 'WinForms', '.NET Framework', 'C++', 'NUnit'],
    points: [
      'Developed WPF/XAML features for geospatial map visualization: shapefiles, raster images, Canvas rendering, zoom, navigation, routes and waypoints.',
      'Implemented validation and transfer of routes, waypoints and map files to Android-based navigation devices, with progress and error handling for long-running transfers.',
      'Maintained a Windows aerospace test-stand simulator: UI and workflow enhancements, crash and resource-handling defect fixes, stability improvements.',
      'Contributed implementation, unit tests, qualification documentation and peer reviews for an ISO 26262 functional safety library.',
    ],
  },
];

export const projects = [
  {
    name: 'Halo Line Automation (ALI)',
    kind: 'Industrial automation platform',
    role: 'Full stack developer: REST services, React/Redux dashboards, SignalR state delivery and TCP/IP equipment communication.',
    description:
      'Full stack platform that coordinates production equipment: React operator dashboards, ASP.NET Core services, real-time SignalR state and TCP/IP equipment communication.',
    highlights: ['Real-time equipment state via SignalR', 'Online/Offline equipment control', 'Interlocks, alarms & material tracking'],
    stack: ['.NET 8', 'React 18', 'Redux', 'SignalR', 'EF Core', 'PostgreSQL', 'TCP/IP'],
    link: '',
  },
  {
    name: 'SmartNav Manager',
    kind: 'Windows navigation application',
    role: 'WPF developer: map visualization, route and waypoint features, device transfer workflows.',
    description:
      'WPF desktop application for geospatial map visualization and route planning that prepares and transfers routes and map files to navigation devices.',
    highlights: ['Shapefile & raster map rendering', 'Route and waypoint management', 'Device file transfer with progress'],
    stack: ['C#', 'WPF', 'XAML', 'MVVM', '.NET'],
    link: '',
  },
  {
    name: '777 Audio System Simulator',
    kind: 'Aerospace test stand',
    role: 'Maintenance engineer: workflow enhancements, crash and resource-defect fixes, QA verification support.',
    description:
      'Windows engineering simulator used in an aerospace test environment, maintained for stability and new workflows together with QA verification.',
    highlights: ['Crash & resource-defect fixes', 'Structured root-cause analysis', 'NUnit & code coverage'],
    stack: ['C#', 'WinForms', '.NET Framework', 'NUnit'],
    link: '',
  },
  {
    name: 'ARM Functional Safety Library',
    kind: 'Safety-critical software',
    role: 'Contributor: implementation, unit tests, qualification documentation and peer reviews.',
    description:
      'Contributions to a functional safety library developed under ISO 26262, in a traceable engineering environment with coding and safety standards.',
    highlights: ['Implementation & unit tests', 'Qualification documentation', 'Peer reviews & traceability'],
    stack: ['C++', 'Linux', 'ISO 26262'],
    link: '',
  },
];

export const approach = [
  { title: 'Reliability first', text: 'Connection states, timeouts and failure paths are designed in, not patched later.' },
  { title: 'Root cause over workaround', text: 'Logs, end-to-end tracing and reproduction before any fix.' },
  { title: 'Testable by design', text: 'Interfaces, dependency injection and separation of concerns keep logic testable.' },
  { title: 'Responsive interfaces', text: 'Async I/O and clean threading so live data never freezes the UI.' },
];

export const education = {
  degree: 'Bachelor of Engineering, Electronics and Communication Engineering',
  school: 'Dr. Ambedkar Institute of Technology, Bengaluru',
  year: 'Aug 2021',
  grade: 'CGPA 8.26',
};

// Optional sections: they appear on the site automatically once you add items.
// Only add real certifications and real recommendations.
export const certifications = [
  // { name: 'Microsoft Certified: Azure Developer Associate (AZ-204)', issuer: 'Microsoft', year: '2027',
  //   link: 'https://www.credly.com/badges/...',          // Credly badge page (for the Verify button)
  //   badgeImage: 'https://images.credly.com/...png' },    // badge image (right-click the badge on Credly → Copy image address)
];

export const testimonials = [
  // { quote: 'Akash ...', name: 'Full Name', title: 'Tech Lead, Company' },
];
