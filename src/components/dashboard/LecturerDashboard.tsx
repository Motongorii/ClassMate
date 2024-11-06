import React, { useState } from 'react';
import { Course } from '../../types';
import { Plus, Send, Video, Users } from 'lucide-react';

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
  }
];

export default function LecturerDashboard() {
  const [showNewClassModal, setShowNewClassModal] = useState(false);
  const [classType, setClassType] = useState<'online' | 'offline'>('online');
  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lecturer Dashboard</h1>
          <p className="text-gray-600">Manage your classes and student progress</p>
        </div>
        <button
          onClick={() => setShowNewClassModal(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Schedule Class
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
              <span className="text-gray-700">Broadcast Message</span>
              <Send className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
              <span className="text-gray-700">Start Online Class</span>
              <Video className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
              <span className="text-gray-700">View Attendance</span>
              <Users className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {mockCourses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{course.code}</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Attendance</span>
                <span className="font-medium text-gray-900">{course.attendance}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Course Progress</span>
                <span className="font-medium text-gray-900">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showNewClassModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Schedule New Class</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Course</option>
                  {mockCourses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setClassType('online')}
                    className={`flex-1 p-2 rounded-lg border ${
                      classType === 'online'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-300'
                    }`}
                  >
                    Online
                  </button>
                  <button
                    onClick={() => setClassType('offline')}
                    className={`flex-1 p-2 rounded-lg border ${
                      classType === 'offline'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-300'
                    }`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowNewClassModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowNewClassModal(false)}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}