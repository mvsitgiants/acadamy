export type PageType = 
  | 'home' 
  | 'about' 
  | 'courses' 
  | 'admissions' 
  | 'exams' 
  | 'resources' 
  | 'blog' 
  | 'gallery' 
  | 'faq' 
  | 'contact';

export interface Course {
  id: string;
  title: string;
  badge?: string;
  points: string[];
  duration?: string;
  eligibility?: string;
  mode?: string;
  description?: string;
}

export interface Achiever {
  id: string;
  name: string;
  role: string;
  image: string;
  exam: string;
  year?: string;
}

export interface StudyMode {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ResourceItem {
  date: string;
  title: string;
  category: 'Daily' | 'Weekly' | 'Monthly';
}

export interface BlogItem {
  id: string;
  title: string;
  snippet: string;
  image: string;
  category?: string;
  date?: string;
  content?: string;
}

export interface StudentReview {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatarBg?: string;
}
