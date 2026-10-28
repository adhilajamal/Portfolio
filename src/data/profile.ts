// All portfolio content lives here so it can be updated without touching components.

export const profile = {
  name: 'Adhila Jamal K U',
  shortName: 'Adhila Jamal',
  role: 'React Native & Frontend Engineer',
  location: 'Calicut, Kerala',
  phone: '+91 90375 96328',
  email: 'adhilajamal89@gmail.com',
  linkedin: 'https://linkedin.com/in/adhilajamal',
  github: 'https://github.com/adhilajamal',
  // Drop your PDF into /public with this name to enable the download button.
  resumeUrl: '/Adhila_Jamal_Resume.pdf',
  headline: 'I build commerce apps that work on',
  headlineAccent: 'every screen.',
  intro:
    'Over 2 years building and shipping cross-platform apps for Android and iOS. I work across the stack: storefronts, cart and checkout flows, payment gateways, push notifications, and the REST APIs that tie them together.',
  summary: [
    'React and React Native Developer with 2+ years of experience building and shipping web and cross-platform mobile apps for Android and iOS. Skilled in React, React Native, TypeScript, JavaScript, Tailwind CSS, REST API integration, and state management (Zustand, Redux).',
    'Delivered e-commerce product browsing, cart, checkout, and Razorpay payment flows, push notifications, and reusable, performant UI components in Agile, cross-functional teams.',
  ],
}

export const stats = [
  { value: '2+', label: 'Years shipping production apps' },
  { value: '4', label: 'Products & sites built' },
  { value: 'iOS + Android', label: 'From one TypeScript codebase' },
  { value: 'MERN', label: 'Full-stack foundation' },
]

export const strengths = [
  {
    icon: 'cart',
    title: 'E-commerce flows',
    body: 'Product browsing, carts, checkout and subscription flows built for real customers, with an eye on conversion and reliability.',
  },
  {
    icon: 'card',
    title: 'Payments & integrations',
    body: 'Razorpay payments and EMI flows, OneSignal and Firebase notifications, and third-party SDKs wired into production apps.',
  },
  {
    icon: 'phone',
    title: 'Cross-platform mobile',
    body: 'React Native apps for iOS and Android: navigation, state management with Zustand and Redux, and platform-specific polish.',
  },
  {
    icon: 'api',
    title: 'APIs & full-stack',
    body: 'REST API integration and MERN-stack builds with Node.js, Express and MongoDB, working directly with backend teams on API design.',
  },
  {
    icon: 'blocks',
    title: 'Reusable UI systems',
    body: 'Modular, accessible component libraries that cut new-feature time and keep multiple screens and products consistent.',
  },
  {
    icon: 'gauge',
    title: 'Performance & stability',
    body: 'Profiling re-renders, fixing bottlenecks and critical bugs, and refactoring for faster loads and more maintainable code.',
  },
] as const

export type StrengthIcon = (typeof strengths)[number]['icon']

export const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['React Native', 'React.js', 'Redux', 'Zustand', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Integrations',
    items: ['Razorpay', 'OneSignal Push', 'Firebase Messaging', 'Third-party SDKs'],
  },
  {
    title: 'Workflow',
    items: ['Git & GitHub', 'Agile / Scrum', 'Debugging', 'Performance Optimization', 'UI/UX Best Practices'],
  },
]

export const experience = [
  {
    role: 'Mobile App Developer',
    company: 'Codesap Technologies',
    period: 'Jun 2025 — Present',
    current: true,
    points: [
      'Develop and maintain high-performance React Native apps for Android and iOS, improving stability and reducing reported bugs through rigorous testing and debugging.',
      'Built reusable, modular UI components that cut new-feature development time and improved consistency across the codebase.',
      'Integrate REST APIs and third-party libraries to extend app functionality and improve real-time data handling.',
      'Identify and resolve performance bottlenecks and critical bugs, increasing overall application stability.',
      'Collaborate with designers and backend engineers in an Agile workflow to deliver end-to-end features.',
    ],
    tags: ['React Native', 'TypeScript', 'REST APIs', 'iOS', 'Android'],
  },
  {
    role: 'Frontend Developer',
    company: 'Oxmics Private Limited',
    period: 'Oct 2024 — Apr 2025',
    current: false,
    points: [
      'Built and optimized React Native and React applications for seamless functionality across web and mobile.',
      'Designed intuitive, accessible UI components that improved responsiveness and user experience across devices.',
      'Integrated third-party libraries and REST APIs, partnering with cross-functional teams on API design.',
      'Improved performance and load times by refactoring components and enforcing development best practices.',
    ],
    tags: ['React', 'React Native', 'Accessibility', 'Performance'],
  },
  {
    role: 'MERN Stack Intern',
    company: 'ICT Academy of Kerala',
    period: 'Jul 2024 — Aug 2024',
    current: false,
    points: [
      'Built full-stack applications with MongoDB, Express.js, React and Node.js.',
      'Integrated frontend and backend components into dynamic, responsive web applications.',
      'Used Git for version control and team collaboration across full-stack projects.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
]

export type ProjectCategory = 'Commerce' | 'Mobile' | 'Web'

export const projects: {
  name: string
  tagline: string
  categories: ProjectCategory[]
  stack: string[]
  challenge: string
  built: string[]
  accent: 'teal' | 'violet' | 'amber'
  mock: 'shop' | 'lms' | 'site' | 'quiz'
  // 'building' shows an "in development" badge for apps not yet in the stores.
  status: 'live' | 'building'
  links?: { label: string; href: string }[]
}[] = [
  {
    name: 'StudyJam',
    tagline: 'Learning management system — mobile',
    categories: ['Commerce', 'Mobile'],
    stack: ['React Native', 'TypeScript', 'Zustand', 'Firebase', 'Razorpay'],
    challenge:
      'An education platform needed a mobile app for paid course subscriptions, with video lessons, progress tracking and a payment flow learners could trust.',
    built: [
      'Built a full LMS app with course browsing, video lessons, progress tracking and secure auth.',
      'Implemented Razorpay EMI and payment flows for course subscriptions.',
      'Managed app-wide state with Zustand, reducing re-render overhead and improving maintainability.',
      'Integrated Firebase / OneSignal push notifications to lift engagement and retention.',
    ],
    accent: 'violet',
    mock: 'lms',
    status: 'live',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id1515262205' }],
  },
  {
    name: 'DOPA',
    tagline: 'Medical entrance (NEET) prep app',
    categories: ['Mobile'],
    stack: ['React Native', 'TypeScript', 'REST APIs', 'iOS', 'Android'],
    challenge:
      'Started by doctors from Government Medical College Calicut, DOPA guides aspiring medical students through entrance preparation, so the app has to stay fast and reliable for thousands of learners.',
    built: [
      'Develop and maintain features in the React Native app for Android and iOS.',
      'Integrate REST APIs for course content, practice questions and learner progress.',
      'Build reusable UI components shared across screens to speed up new features.',
      'Fix performance bottlenecks and critical bugs to improve app stability.',
    ],
    accent: 'amber',
    mock: 'quiz',
    status: 'live',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id1530031039' }],
  },
  {
    name: 'Guboy',
    tagline: 'Pet care & e-commerce app',
    categories: ['Commerce', 'Mobile'],
    stack: ['React Native', 'React', 'Tailwind CSS', 'Razorpay', 'OneSignal'],
    challenge:
      'A pet care brand needed a mobile storefront where customers could browse products, build a cart and pay securely, and get brought back with timely notifications.',
    built: [
      'Built the React Native frontend: product browsing, cart and full checkout flow.',
      'Integrated Razorpay for secure payments, improving transaction reliability.',
      'Added OneSignal push notifications to drive engagement and repeat orders.',
      'Optimized rendering and navigation for smooth performance across devices.',
    ],
    accent: 'teal',
    mock: 'shop',
    status: 'building',
  },
  {
    name: 'Dept. of Chemical Oceanography',
    tagline: 'University website — CUSAT',
    categories: ['Web'],
    stack: ['HTML', 'CSS', 'Responsive Design'],
    challenge:
      'A university department needed a clear, accessible public website that staff could keep up to date.',
    built: [
      'Designed and deployed a responsive site with structured navigation and dynamic content updates.',
      'Ensured cross-browser compatibility, accessibility and fast page loads.',
    ],
    accent: 'amber',
    mock: 'site',
    status: 'live',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'CCSIT, Calicut University',
    period: '2022 — 2024',
    detail: 'CGPA 8.1 / 10',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    school: 'MHES College of Science and Technology',
    period: '2019 — 2022',
    detail: 'CGPA 7.56 / 10',
  },
]

export const languages = ['English', 'Hindi', 'Tamil']
