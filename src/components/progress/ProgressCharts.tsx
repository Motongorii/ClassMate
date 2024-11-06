import React from 'react';
import { Course } from '../../types';

const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    code: 'MATH301',
    progress: 65,
    attendance: 78,
    nextClass: {
      date: new Date(Date.now() + 86400000),
      isOnline: true,
      link: 'https://meet.google.com/abc-defg-hij'
    }
  },
  {
    id: '2',
    name: 'Computer Science',
    code: 'CS101',
    progress: 82,
    attendance: 90,
    nextClass: {
      date: new Date(Date.now() + 172800000),
      isOnline: false
    }
  }
];

export default function ProgressCharts() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Progress Overview</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Course Progress</h2>
          <div className="space-y-6">
            {mockCourses.map(course => (
              <div key={course.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{course.name}</span>
                  <span className="text-sm text-gray-600">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h2>
          <div className="space-y-6">
            {mockCourses.map(course => (
              <div key={course.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{course.name}</span>
                  <span className="text-sm text-gray-600">{course.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${course.attendance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-lg" style={{ height: `${Math.random() * 100}px` }} />
                <span className="text-xs text-gray-600 mt-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Average Score</h3>
              <p className="text-2xl font-bold text-indigo-600">85%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Completed Tasks</h3>
              <p className="text-2xl font-bold text-indigo-600">24/30</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Study Hours</h3>
              <p className="text-2xl font-bold text-indigo-600">45h</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Engagement</h3>
              <p className="text-2xl font-bold text-indigo-600">High</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}