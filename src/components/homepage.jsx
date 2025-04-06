import React from 'react';
import NavBar from './NavBar';
const HomePage = () => {
    return (
        <>
            <main>
                <h2>Track Your Academic Progress</h2>
                <p>Track Your Academic Progress ~ Stay Ahead of the Curve!</p>
                <p>Monitor Assignment, Grade, Overall Performance and Scope of Improvement along with track of your Time Table</p>
            </main>
            <section>
                <div className="card">
                    <h3>Marks Tracker</h3>
                    <p>Your Personal Academic Performance Dashboard</p>
                    <p>The Marks Tracker is a powerful tool designed to help students track, analyze, and improve their academic performance with ease. This tracker ensures that you stay on top of your grades.</p>
                    <p>Students can see their marks in two different forms:</p>
                    <ul>
                        <li>Chart form</li>
                        <li>Report Card form</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Scope Of Improvement</h3>
                    <p>Ultimate guide to academic growth. Designed for students and learners, this platform helps you identify weaknesses, track progress, and enhance skills in a structured way.</p>
                    <p>Helps you to focus on the Subjects which can increase your CGPA.</p>
                </div>
                <div className="card">
                    <h3>Attendance Tracker</h3>
                    <p>The Attendance Tracker is a smart and efficient way to monitor your attendance, avoid penalties, and stay consistent in your academic life.</p>
                    <p>Helps students to keep track of lectures, this tool ensures accuracy and accountability.</p>
                    <p>You can mark present, absent or cancelled as per the class held.</p>
                </div>
                <div className="card">
                    <h3>Time Table</h3>
                    <p>The Timetable Tracker is the ultimate tool for students to plan, manage, and optimize their daily schedules.</p>
                    <p>With a clean and intuitive design, this tracker ensures you never miss a class important task.</p>
                    <p>Can view and update the timetable if there is any change in it. Along with this it also shows in which classroom the particular lecture is being held.</p>
                </div>
            </section>
        </>
    );
};

export default HomePage;
