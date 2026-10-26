// Everything factual on the site lives here. Source: CLAUDE.md (verified facts only).
// Anything marked TODO is waiting on Dione. Never fill these with invented content.

export const site = {
  name: 'Dioné',
  fullName: 'Danielle Sellado',
  title: 'Dioné · Executive Assistant, Social Media & Creative Operations',
  description:
    'Danielle "Dione" Sellado, Executive Assistant for founders and leaders. Social media strategy and creative operations, from Davao, working U.S. hours.',
  heroLine: ['Sharp enough to run the day.', 'Creative enough to turn ideas into execution.'],
  positioning: ['Executive Assistant', 'Social Media Strategy', 'Creative Operations'],
  bookingUrl: '', // TODO: Calendly or similar
  email: '', // TODO
};

export const sections = [
  { id: 'intro', num: '01', label: 'Introduction' },
  { id: 'partnership', num: '02', label: 'Executive partnership' },
  { id: 'statement', num: '03', label: 'Statement' },
  { id: 'creative', num: '04', label: 'Socials & creative' },
  { id: 'ai', num: '05', label: 'AI workflows' },
  { id: 'tools', num: '06', label: 'Tools' },
  { id: 'lab', num: '07', label: 'Passion projects' },
  { id: 'contact', num: '08', label: "Let’s meet" },
] as const;

// Lead with the social and creative side. Only facts that describe her own work:
// never present the coaching program's leaders or the real estate team as her clients.
export const stats = [
  { value: '6+', label: 'years of experience' },
  { value: 'Now', label: 'Social Media Manager, global consumer brand' },
  { value: '4 yrs', label: 'running business Facebook pages' },
  { value: '3', label: 'executive coaches supported' },
];

// Section 02 samples: one "module" per engagement.
export const modules = [
  {
    id: 'DIONÉ–OPS–01',
    status: 'ACTIVE',
    role: 'Social Media Manager',
    org: 'D2C Brand (U.S.)',
    dates: 'Jan 2025 – Present',
    trusted: ['Helps bring launches and content ideas to life for a global consumer brand’s social media and creative team'],
  },
  {
    id: 'DIONÉ–OPS–02',
    status: 'COMPLETE',
    role: 'Director of Operations & Brand Specialist',
    org: 'Coast to Coast Property Partners',
    dates: 'Sep 2022 – Dec 2025',
    trusted: ['Created autoplans and email campaigns, built SOPs and VA training'],
  },
  {
    id: 'DIONÉ–OPS–03',
    status: 'COMPLETE',
    role: 'Executive Assistant & CEO Coaching Admin',
    org: 'Livian (U.S.)',
    dates: 'Jan 2021 – Sep 2024',
    trusted: ['Supported three executive coaches and their CEO coaching program'],
  },
  {
    id: 'DIONÉ–OPS–04',
    status: 'COMPLETE',
    role: 'Freelance Executive Assistant',
    org: 'Self-employed',
    dates: 'Jan 2020 – Dec 2023',
    trusted: ['Ran business Facebook pages for U.S. business owners: posting, captions and Canva graphics'],
  },
  {
    id: 'DIONÉ–OPS–05',
    status: 'ACTIVE',
    role: 'Founder, hiring & VA training',
    org: 'Her own small business',
    dates: 'TODO: dates',
    trusted: ['Hires and trains VAs', 'TODO: one more line from Dione'],
  },
];

export const principles = [
  {
    title: 'The Friday reset',
    body: 'Before I log off Friday, I close every loop I can and write down where I stopped. Monday stops being a restart. It becomes a continuation.',
  },
  { title: 'TODO: principle 2', body: 'TODO: waiting on Dione.' },
  { title: 'TODO: principle 3', body: 'TODO: waiting on Dione.' },
];

// Testimonial slots. Never invent quotes.
export const testimonials = [
  { quote: '', name: '', role: '' },
  { quote: '', name: '', role: '' },
  { quote: '', name: '', role: '' },
];

export const statement = ["Creativity isn’t the software.", "It’s the way you see.", 'And the way you see gets better the more you feed it.'];

// Section 05. Steps come from the real Babbi story in CLAUDE.md.
export const aiWorkflow = [
  { step: 'Research', detail: 'TODO: one line on how she researches a topic with Babbi' },
  { step: 'Carousel design', detail: 'Slides built in the Dioné brand style' },
  { step: 'Captions', detail: 'Written to her own copy rules' },
  { step: 'Scheduling', detail: 'LinkedIn posts queued and scheduled' },
  { step: 'Profile optimization', detail: 'Upwork and OnlineJobs.ph profiles' },
];

export const tools = {
  Ops: ['Google Workspace', 'Airtable', 'Calendly', 'Zapier', 'Boomerang', 'Follow Up Boss', 'Brivity', 'BoomTown', 'GoHighLevel', 'Mojo Sells', 'Realtor.com'],
  Creative: ['Canva', 'TODO: more from Dione'],
  AI: ['Claude', 'ChatGPT', 'AssemblyAI'],
};

export const profiles = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danielle-s-b43b4a2a4' }, // TODO: confirm
  { label: 'Upwork', url: '' }, // TODO
  { label: 'OnlineJobs.ph', url: '' }, // TODO
];
