import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Kritika", score: 78 },
    { id: 2, name: "Utkarsh", score: 45 },
    { id: 3, name: "Anubhav", score: 90 },
    { id: 4, name: "Yuvraj", score: 68 },
    { id: 5, name: "Aman", score: 92 }
  ]);

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => s.id === id ? { ...s, score: newScore } : s));
  };

  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;
  const avgScore = (students.reduce((acc, s) => acc + s.score, 0) / totalStudents).toFixed(0);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Scoreboard</h1>
      </header>

      {/* Stats Summary Section */}
      <div className="stats-container">
        <div className="stat-card">
          <small>TOTAL</small>
          <div style={{fontSize: '1.5rem', color: '#00f2ff'}}>{totalStudents}</div>
        </div>
        <div className="stat-card">
          <small>PASSED</small>
          <div style={{fontSize: '1.5rem', color: '#39ff14'}}>{passedStudents}</div>
        </div>
        <div className="stat-card">
          <small>AVG SCORE</small>
          <div style={{fontSize: '1.5rem', color: '#00f2ff'}}>{avgScore}</div>
        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow key={student.id} student={student} onUpdate={updateScore} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StudentRow = ({ student, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempScore, setTempScore] = useState(student.score);

  return (
    <tr>
      <td style={{color: '#00f2ff'}}>{student.name}</td>
      <td>{isEditing ? 
        <input type="number" value={tempScore} onChange={(e) => setTempScore(Number(e.target.value))} /> 
        : student.score}
      </td>
      <td>
        <span className={student.score >= 40 ? "status-pass" : "status-fail"}>
          {student.score >= 40 ? "● PASS" : "● FAIL"}
        </span>
      </td>
      <td>
        {isEditing ? (
          <button className="btn-neon" onClick={() => { onUpdate(student.id, tempScore); setIsEditing(false); }}>Save</button>
        ) : (
          <button className="btn-neon" onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default App;