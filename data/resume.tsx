import { CodeIcon, HomeIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Kunal Garg',
   initials: 'KG',
   url: 'http://localhost:3000',
   location: 'Delhi, IND',
   locationLink: 'https://www.google.com/maps/place/delhi',
   description:
    'Motivated software developer with a strong foundation in full-stack development and growing expertise in Web3 technologies.',
   summary:
    'I am a Full-Stack Developer with experience in creating and deploying full-stack applications, open-source contributions, and a passion for blockchain and Web3. \n\n'
    + 'I have worked on notable projects such as aoVest, Learnwell, and Arweave Twitter, contributing to both Web2 and Web3 ecosystems. \n\n'
    + 'In my free time, I enjoy learning new technologies, exploring and contributing to the open-source community. Let\'s connect if you want to discuss coding, Web3, or new ideas!',
   avatarUrl: '/avatar.jpeg',
   skills: [
      'Java',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Solidity',
      'Lua',
      'TailwindCSS',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'kunalgarg054@gmail.com',
      tel: '+917011360446',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/ikunal-04',
            icon: Icons.github,
            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ikunal04/',
            icon: Icons.linkedin,
            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://x.com/kunalg_twt',
            icon: Icons.x,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,
            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'BizOAlly',
         href: '',
         badges: [],
         location: 'Remote',
         title: 'Frontend Engineer',
         logoUrl: '/bizoally_logo.jpeg',
         start: 'Apr 2024',
         end: 'May 2024',
         description:
        'Developed a user-friendly web application using React.js, Redux, and TailwindCSS, improving UI/UX design and increasing user engagement by 20%.',
      },
      {
         company: 'Freelance',
         href: '',
         badges: [],
         location: 'Remote',
         title: 'Full-Stack Developer',
         logoUrl: '/freelance.png',
         start: 'Apr 2024',
         end: 'Present',
         description:
        'Created and deployed multiple full-stack applications, improving client satisfaction by 30% and delivering low-level design solutions for enhanced efficiency.',
      },
   ],
   education: [
      {
         school: 'Maharaja Agrasen Institute of Technology',
         href: 'https://mait.ac.in/',
         degree: 'Bachelor of Technology in Electronics and Communication',
         logoUrl: '/mait_logo.webp',
         start: '2022',
         end: 'Expected July 2026',
      },
   ],
   projects: [
      {
         title: 'aoVest',
         href: 'https://ao-vest.ar-io.net/',
         image: '/aovest.jpeg',
         dates: 'May 2024 - Present',
         active: true,
         description:
        'Developed a vesting application for managing token vesting within the Arweave ecosystem, improving transaction efficiency with AOS and cron jobs.',
         technologies: [
            'Lua',
            'AOS',
            'React.js',
            'TailwindCSS',
            'Zustand',
            'React Hook Form',
         ],
      },
      {
         title: 'Learnwell',
         href: 'https://learn-well-tau.vercel.app/',
         image: '/learnwell.png',
         dates: 'Mar 2024 - Apr 2024',
         active: false,
         description:
        'Built an online learning and peer collaboration platform using the MERN stack, with secure authentication and authorization implemented via JWT.',
         technologies: [
            'React.js',
            'MongoDB',
            'Node.js',
            'Express.js',
            'TailwindCSS',
            'JWT',
         ],
      },
      {
         title: 'Arweave Twitter',
         href: 'https://arweave-twt.vercel.app/',
         image: '/arweavetwt.png',
         dates: 'Jul 2023 - Aug 2023',
         active: true,
         description:
        'Created a Twitter-like application on the Arweave ecosystem, enhancing user interaction through an interactive frontend built with React.js.',
         technologies: [
            'React.js',
            'AOS',
            'Lua',
            'TailwindCSS',
            'ShadcnUI',
         ],
      },
   ],
   achievements: [
      {
         title: 'Arweave India Scholar',
         description: 'Selected among top 30 for the Arweave India scholarship and attended Hackerhouse event.',
      },
      {
         title: 'Arweave India Hacker House Winner',
         description: 'Secured $3,000 bounty as the winner of Arweave India Hacker House 2.',
      },
      {
         title: 'Hacktoberfest 2023',
         description: 'Completed Hacktoberfest by contributing to multiple open-source projects.',
      },
   ],
}