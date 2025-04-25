import { useState } from 'react'
import './App.css'
import TimeTablePage from './components/TimeTablePage'
import HomePage from './components/homepage'
import NavBar from './components/NavBar'
import MarksTracker from './components/marksTracker'
import "./marksTracker.css"
import Attendance from './components/Attendance'
import  SignIn from './components/loginComponent'
import AdminStudentList from './components/AdminStudentList'
function renderWebsite(mode, role = ""){
  switch (mode) {
    case "home":
      return <HomePage />
      break;
    
    case "timetable":
      return <TimeTablePage role={role}/>
      break;

    case "attendance":
      return <Attendance />

    case "SignIn":
      return 
      break;
  }
}

function App() {
  const [webMode, setWebMode] = useState("home");
  const [role, setRole] = useState("Not Logged In");
  const [username, setUsername] = useState("");
  return (
    <>
      <NavBar setWebMode={setWebMode} webMode={webMode} role={role}/>
      {webMode == "SignIn" ? (<SignIn setRole={setRole} setUsername={setUsername} username={username} setWebMode={setWebMode}/>) 
      : webMode == "markstracker" ? role == "student" ? <MarksTracker Username={username} role={role}/> : <MarksTracker Username={username} role={role}/>
      : webMode == "AdminStudentList" && role=="admin"? <AdminStudentList setUsername={setUsername} setWebMode={setWebMode}/>
      : renderWebsite(webMode, role)}
    </>
  )
}

export default App
