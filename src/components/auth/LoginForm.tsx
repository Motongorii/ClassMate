import React, { useState } from 'react';
import { UserRole } from '../../types';
import { School } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

const universities = [
  'University of Technology',
  'State University',
  'National College',
  'Technical Institute',
];

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole | null>(null);
  const [university, setUniversity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex items-center justify-center mb-8">
          <School className="w-12 h-12 text-indigo-600" />
        </div>
        
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Welcome to EduConnect</h2>
            <p className="text-center text-gray-600">Choose your role to continue</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setRole('student');
                  setStep(2);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  role === 'student'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                <h3 className="font-semibold text-gray-800">Student</h3>
                <p className="text-sm text-gray-600">Access your courses</p>
              </button>
              
              <button
                onClick={() => {
                  setRole('lecturer');
                  setStep(2);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  role === 'lecturer'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                <h3 className="font-semibold text-gray-800">Lecturer</h3>
                <p className="text-sm text-gray-600">Manage your classes</p>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Select Your University</h2>
            <div className="space-y-4">
              <select
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a university</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setStep(3)}
                disabled={!university}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Complete Your Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}