export type UserRole = 'student' | 'lecturer';

export interface Course {
  id: string;
  name: string;
  code: string;
  progress: number;
  attendance: number;
  nextClass?: {
    date: Date;
    isOnline: boolean;
    link?: string;
  };
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  university: string;
  courses: Course[];
  email: string;
  profileImage?: string;
}