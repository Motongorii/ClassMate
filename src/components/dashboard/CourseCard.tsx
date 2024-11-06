import React from 'react';
import { Course } from '../../types';
import { Calendar, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
          <p className="text-sm text-gray-500">{course.code}</p>
        </div>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
          {Math.round(course.progress)}%
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          {course.nextClass ? (
            <span>Next class: {new Date(course.nextClass.date).toLocaleDateString()}</span>
          ) : (
            <span>No upcoming classes</span>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Attendance: {course.attendance}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}