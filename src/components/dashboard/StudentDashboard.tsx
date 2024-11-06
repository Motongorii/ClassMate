import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { Course } from '../../types';

// Mock data for demonstration
const mockCourses: Course[] = [
  { id: '1', name: 'Advanced Mathematics', code: 'MATH301', progress: 65, attendance: 78, nextClass: { date: new Date(Date.now() + 86400000), isOnline: true, link: 'https://meet.google.com/abc-defg-hij' }},
  { id: '2', name: 'Computer Science', code: 'CS101', progress: 82, attendance: 90, nextClass: { date: new Date(Date.now() + 172800000), isOnline: false }}
];

// Main StudentDashboard component
export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Render sections based on activeSection state
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'courses':
        return <CourseList />;
      case 'assignments':
        return <AssignmentList />;
      case 'students':
        return <StudentList />;
      case 'messages':
        return <Messages />;
      case 'announcements':
        return <Announcements />;
      case 'schedule':
        return <Schedule />;
      case 'grades':
        return <Grades />;
      case 'analytics':
        return <Analytics />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="p-8">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      {['dashboard', 'courses', 'assignments', 'students', 'messages', 'announcements', 'schedule', 'grades', 'analytics', 'profile'].map((section) => (
        <button key={section} onClick={() => setActiveSection(section)} className="sidebar-button">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
}

// Individual sections and placeholder components
function DashboardOverview() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <SummaryCards />
      <NotificationFeed />
      <CalendarView />
    </div>
  );
}

function SummaryCards() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="card">Total Courses: 5</div>
      <div className="card">Assignments Due: 2</div>
      <div className="card">Upcoming Meetings: 1</div>
    </div>
  );
}

function NotificationFeed() {
  return (
    <div className="notification-feed mb-8">
      <h3 className="font-semibold text-lg">Recent Notifications</h3>
      <ul>
        <li>New Assignment posted in Mathematics</li>
        <li>Meeting scheduled with advisor</li>
      </ul>
    </div>
  );
}

function CalendarView() {
  return <div className="calendar-view">Calendar component here</div>;
}

function CourseList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <button className="add-button mb-4">+ Add New Course</button>
      {mockCourses.map(course => (
        <CourseCard key={course.id} course={course} onClick={() => console.log(`Selected course: ${course.name}`)} />
      ))}
    </div>
  );
}

function AssignmentList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Assignments</h2>
      <button className="add-button mb-4">+ Create New Assignment</button>
      <div>Assignment list here</div>
    </div>
  );
}

function StudentList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Students</h2>
      <div>List of students and their grades here</div>
    </div>
  );
}

function Messages() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <div>Inbox, chat interface, and group messaging here</div>
    </div>
  );
}

function Announcements() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Announcements</h2>
      <button className="add-button mb-4">+ Create Announcement</button>
      <div>List of announcements here</div>
    </div>
  );
}

function Schedule() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Schedule</h2>
      <div>Schedule overview and meeting requests here</div>
    </div>
  );
}

function Grades() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Grades</h2>
      <div>Grades overview and publish grades functionality here</div>
    </div>
  );
}

function Analytics() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      <div>Course engagement stats, completion rates, and export options here</div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profile and Settings</h2>
      <div>Profile information, notification settings, and privacy options here</div>
    </div>
  );
}
