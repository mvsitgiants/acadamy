import { Course, Achiever, StudyMode, BlogItem, StudentReview } from '../types';

export const tickerAnnouncements = [
  'TNPSC GROUP - I, II & II-A OFFICER BATCH ADMISSIONS GOING ON',
  'TNUSRB - SUB INSPECTOR ADMISSIONS GOING ON',
  'SSC, RRB, BANKING CLASSES',
  'RPF - ALP CLASSES'
];

export const coursesData: Course[] = [
  {
    id: 'upsc',
    title: 'UPSC',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS PAPERS',
      'OPTIONAL PAPERS',
      'INTERVIEW GUIDANCE'
    ],
    duration: '1 Year Comprehensive Program',
    eligibility: 'Any Bachelor Degree from a recognized university',
    mode: 'Classroom & Online Live Interactive',
    description: 'Comprehensive coaching covering General Studies (Prelims + Mains), CSAT, Essay writing, choice of Optionals and personality test mock sessions guided by retired bureaucrats and top educators.'
  },
  {
    id: 'tnpsc-group-1',
    title: 'TNPSC GROUP -1',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS EXAMS',
      'INTERVIEW GUIDANCE'
    ],
    duration: '10 Months Intensive Batch',
    eligibility: 'Degree in any discipline (Age: 21 to 34+ for reserved)',
    mode: 'Bilingual (Tamil & English)',
    description: 'Targeted preparation for Deputy Collector, DSP, Commercial Tax Officer, and District Registrar posts under TNPSC Group 1 with dedicated Tamil Nadu specific history, culture, and governance focus.'
  },
  {
    id: 'tnpsc-group-2-2a',
    title: 'TNPSC GROUP -2, 2A',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS'
    ],
    duration: '6 Months Fast-track Batch',
    eligibility: 'Graduate Degree in any discipline',
    mode: 'Regular & Weekend Batches',
    description: 'Structured program for Sub Registrar, Municipal Commissioner, Assistant Section Officer, and Senior Inspectors with rigorous Tamil eligibility test and General Studies test series.'
  },
  {
    id: 'group-4',
    title: 'GROUP 4',
    points: [
      'PRELIMINARY EXAMS'
    ],
    duration: '4 Months Foundation Batch',
    eligibility: 'SSLC / 10th Standard or equivalent',
    mode: 'Offline Classroom / Recorded Video Portal',
    description: 'All-inclusive guidance for VAO, Junior Assistant, Bill Collector, and Typist posts with continuous Samacheer Kalvi school textbook analysis and daily 100-question practice tests.'
  },
  {
    id: 'tnusrb-si-police',
    title: 'TNUSRB - SI & POLICE',
    points: [
      'WRITTEN EXAMS',
      'PHYSICAL TEST',
      'INTERVIEW'
    ],
    duration: '5 Months Integrated Training',
    eligibility: 'Degree for SI / 10th for Constable (Physical criteria applies)',
    mode: 'Theory + Physical Ground Training',
    description: 'Complete training combining classroom syllabus (Psychology, General Knowledge, Tamil test), regular OMR mock tests, and physical endurance test (PET) drills by retired police trainers.'
  },
  {
    id: 'ssc',
    title: 'SSC',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS EXAMS',
      'INTERVIEW'
    ],
    duration: '6 Months Complete Program',
    eligibility: '10th / 12th / Degree (depending on CGL, CHSL, MTS)',
    mode: 'Daily Practice Lab & Classroom',
    description: 'Focused modules on Quantitative Aptitude, Reasoning, General Awareness, and English Language for SSC CGL, CHSL, CPO, and MTS exams with speed-building computer labs.'
  },
  {
    id: 'rrb',
    title: 'RRB',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS EXAMS',
      'INTERVIEW'
    ],
    duration: '5 Months Intensive Batch',
    eligibility: '10th / ITI / Diploma / Any Degree (NTPC, Group D, ALP)',
    mode: 'Bilingual Classroom & CBT Portal',
    description: 'Railway Recruitment Board preparation covering NTPC, ALP, JE, and Group D with CBT computer-based mock tests, General Science workshops, and previous years question bank mastery.'
  },
  {
    id: 'banking',
    title: 'BANKING',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS EXAM',
      'INTERVIEW'
    ],
    duration: '4-6 Months Specialized Training',
    eligibility: 'Any Graduate (Age: 20-30 years)',
    mode: 'Speed Math Workshops & Test Series',
    description: 'Rigorous coaching for IBPS PO, Clerk, SBI PO, SBI Clerk, and RBI Assistant with daily speed-math drills, Data Interpretation masterclasses, Current Banking Affairs, and Mock Interviews.'
  },
  {
    id: 'neet',
    title: 'NEET',
    points: [
      'PRELIMINARY EXAMS',
      'MAINS EXAMS',
      'INTERVIEW'
    ],
    duration: '1 Year Repeaters / 2 Year Foundation Batch',
    eligibility: 'Class 12th with Physics, Chemistry, Biology (PCB)',
    mode: 'Concept Classes & NCERT Line-by-Line',
    description: 'Dedicated Medical Entrance coaching focusing on in-depth NCERT biology, organic chemistry problem-solving, physics numerical sessions, and chapter-wise weekly timed tests.'
  },
  {
    id: 'iit-jee',
    title: 'IIT-JEE (MAIN & ADVANCED)',
    points: [
      'CONCEPTUAL MATHEMATICS',
      'ADVANCED PHYSICS LAB',
      'ORGANIC & INORGANIC CHEMISTRY',
      'NATIONAL TEST SERIES'
    ],
    duration: '1 Year Target / 2 Year Integrated Program',
    eligibility: 'Class 11th / 12th with PCM',
    mode: 'Classroom & Computational Problem Solving Lab',
    description: 'Premier engineering entrance training combining mathematical rigor, multivariable calculus, mechanics, thermodynamic systems, and algorithmic shortcut techniques for top percentile ranks.'
  },
  {
    id: 'foundation-stem',
    title: 'STEM & MATH FOUNDATION (CLASS 8-10)',
    points: [
      'SPEED MATHEMATICS',
      'LOGICAL REASONING',
      'SCIENCE EXPERIMENTS',
      'OLYMPIADS & NTSE'
    ],
    duration: 'Annual Weekend / Evening Program',
    eligibility: 'Students in Classes 8, 9, or 10',
    mode: 'Interactive Hands-on Grid Workshops',
    description: 'Early analytical foundation program building rock-solid quantitative thinking, mental math, scientific reasoning, and preparation for national Olympiads (IMO, NSO) and NTSE.'
  }
];

export const achieversData: Achiever[] = [
  {
    id: '1',
    name: 'S.Poovizhi',
    role: 'Asst In School Education',
    exam: 'TNPSC Group 2 Selection',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    year: '2023 Batch'
  },
  {
    id: '2',
    name: 'E.M.Ambika',
    role: 'Junior Co-Operative Auditor',
    exam: 'TNPSC Officer Cadre',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400',
    year: '2023 Batch'
  },
  {
    id: '3',
    name: 'P.Revathi',
    role: 'Senior Inspector Of Co-Operative',
    exam: 'TNPSC Group 2 Selection',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    year: '2024 Batch'
  }
];

export const studyModesData: StudyMode[] = [
  {
    id: 'class-courses',
    title: 'Class Courses',
    description: 'Dive into prep with our interactive class courses in a dynamic learning environment.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'online-courses',
    title: 'Online Courses',
    description: 'Embrace flexibility and expertise with our online courses, accessible anytime, anywhere.',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'books',
    title: 'Books',
    description: 'Master topics with our meticulously crafted study materials, delivered directly to you.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'test-series',
    title: 'Test Series',
    description: 'Challenge yourself and refine your preparation strategies with our comprehensive and detailed test series.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600'
  }
];

export const resourcesData = {
  daily: [
    { title: '4th April 2024 Heatwaves Across India', link: '#' },
    { title: '4th April 2024 Heatwaves Across India', link: '#' },
    { title: '4th April 2024 Heatwaves Across India', link: '#' }
  ],
  weekly: [
    { title: 'DEC - 2023', link: '#' },
    { title: 'JAN - 2024', link: '#' },
    { title: 'FEB - 2024', link: '#' }
  ],
  monthly: [
    { title: 'DEC - 2023', link: '#' },
    { title: 'JAN - 2024', link: '#' },
    { title: 'FEB - 2024', link: '#' }
  ]
};

export const whyChooseUsFeatures = [
  {
    id: 'faculty',
    title: 'Expert Faculty',
    iconName: 'ShieldCheck',
    description: 'Learn directly from experienced civil service mentors, subject matter experts, and guest IAS/IPS officers.'
  },
  {
    id: 'success',
    title: 'Proven Success',
    iconName: 'Award',
    description: 'Consistent track record of 700+ officers placed across state and central government services.'
  },
  {
    id: 'coaching',
    title: 'Personalized Coaching',
    iconName: 'UserCheck',
    description: 'One-on-one mentorship, regular performance audits, and customized study roadmaps.'
  },
  {
    id: 'materials',
    title: 'Comprehensive Materials',
    iconName: 'BookOpen',
    description: 'Concise, updated Samacheer & NCERT-aligned books, bilingual handouts, and high-yield notes.'
  },
  {
    id: 'methods',
    title: 'Innovative Methods',
    iconName: 'Lightbulb',
    description: 'Mind maps, analytical answer-writing frameworks, visual mnemonics, and real-time CBT simulators.'
  },
  {
    id: 'support',
    title: 'Student Support',
    iconName: 'Headphones',
    description: '24/7 doubt resolution, study hall facilities, test ranking dashboards, and motivational guidance.'
  }
];

export const blogsData: BlogItem[] = [
  {
    id: 'b1',
    title: 'Ultimate Guide to IAS Exam Preparation',
    snippet: 'Preparing for the Indian Administrative Service (IAS) exam is a challenging yet rewarding...',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    date: 'April 2024',
    content: 'Preparing for the Indian Administrative Service (IAS) exam is a challenging yet rewarding journey. From mastering NCERT fundamentals to drafting balanced, multidimensional GS mains answers, consistency and strategic revision define success.'
  },
  {
    id: 'b2',
    title: 'Analyzing the Syllabus',
    snippet: 'The Indian Administrative Service (IAS) examination, conducted by the Union Public Service Commission...',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    date: 'March 2024',
    content: 'The Indian Administrative Service (IAS) examination, conducted by the Union Public Service Commission (UPSC), has a vast and structured syllabus. Breaking down each micro-theme helps aspirants avoid reading unnecessary material.'
  },
  {
    id: 'b3',
    title: "Cracking the IAS Interview: Dos and Don'ts",
    snippet: 'Preparing for the Indian Administrative Service (IAS) exam is a challenging yet rewarding...',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=600',
    date: 'February 2024',
    content: 'The Personality Test assesses mental alertness, critical powers of assimilation, clear and logical exposition, and integrity. Learn the essential dos and donts to face the prestigious UPSC board with calm confidence.'
  }
];

export const studentReviews: StudentReview[] = [
  {
    id: 'r1',
    name: 'Mani Vannan',
    date: '2024-12-08',
    rating: 5,
    comment: 'A gud positive enviroments and best faculity team. The test are conducted regular and properly.',
    avatarBg: 'bg-emerald-700'
  },
  {
    id: 'r2',
    name: 'Shugra Grace',
    date: '2024-12-08',
    rating: 5,
    comment: 'Best coching center with good guidance by experienced faculty...',
    avatarBg: 'bg-amber-600'
  },
  {
    id: 'r3',
    name: 'Ulaganathan 01',
    date: '2024-12-08',
    rating: 5,
    comment: 'Good coaching centre with expert faculty for each and every subject 👍👍👍',
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'r4',
    name: 'Karthik Raja',
    date: '2024-11-20',
    rating: 5,
    comment: 'Very supportive teachers and excellent test series for TNPSC Group 2. Highly recommended for Gummidipoondi and Chennai students!',
    avatarBg: 'bg-indigo-600'
  },
  {
    id: 'r5',
    name: 'Divya Bharathi',
    date: '2024-11-15',
    rating: 5,
    comment: 'Kanchi Valluvan IAS Academy has the best atmosphere and standard materials. Friendly mentors who guide at every step.',
    avatarBg: 'bg-rose-600'
  }
];
