import React, { useEffect, useState } from "react";
import { studentLink } from "./Links"; // update if needed

const AdminStudentList = ({ setWebMode, setUsername }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(studentLink);
        const data = await res.json();
        setStudents(data.students);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleStudentClick = (email) => {
    setUsername(email);
    setWebMode("markstracker");
  };

  return (
    <div className="admin-student-list">
      <h2>All Students</h2>
      <ul>
        {students.map((student, index) => (
          <li
            key={Date.now() + Math.random() * 200}
            style={{
              cursor: "pointer",
              padding: "8px",
              borderBottom: "1px solid #ccc"
            }}
            onClick={() => handleStudentClick(student.email)}
          >
            {student.name} ({student.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminStudentList;
