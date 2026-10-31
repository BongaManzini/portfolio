export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  categories: ('AI' | 'Cybersecurity' | 'Database' | 'Software' | 'Frontend' | 'Backend' | 'DevOps')[];
  projectType?: 'Work' | 'Personal' | 'Hackathon';
  company?: string;
  githubUrl: string;
  liveUrl: string;
  demoUrl?: string;
  simulationType: 'zero-trust' | 'network-monitor' | 'asset-hub';
  specs: { label: string; value: string }[];
  stars?: number;
  commits?: number;
  readme?: string;
  architectureTitle?: string;
  architectureHighlights?: string[];
  keyLearnings?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  status?: string;
  date?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  spanClass: string;
  tags: string[];
  iconName: string;
  accentColor: string;
  glowClass: string;
}
