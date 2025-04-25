import React, { useEffect, useState } from "react";
import { dataUrl } from "../Links"; // update if needed

const AdminStudentList = ({ setWebMode, setUsername }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${dataUrl}users`);
        const data = await res.json();
        const studentList = data.filter(user => user.role === "student");
        setStudents(studentList);
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
            key={index}
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
