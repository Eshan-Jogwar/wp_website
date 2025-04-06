const NavBar = ({ setWebMode, webMode }) => {
    return (
        <header>
                <div className="container">
                    <h1>Academic Tracker</h1>
                    <nav>
                      <button href="HomePage" className="nav-button" onClick={() => {setWebMode("home")}}>HomePage</button>
                      <button href="MarksTracker" className="nav-button" onClick={() => {setWebMode("markstracker")}}>Marks Tracker</button>
                      <button href="ScopeOfImprovement" className="nav-button" onClick={() => {setWebMode()}}>Scope Of Improvement</button>
                      <button href="AttendanceTracker" className="nav-button" onClick={() => {setWebMode()}}>Attendance Tracker</button>
                      <button href="TimeTable" className="nav-button" onClick={() => {setWebMode("timetable")}}>Time Table</button>
                      <button href="AboutPage" className="nav-button" onClick={() => {setWebMode()}}>AboutPage</button>
                    </nav>
                </div>
                <div class="developer-info">
                    Developed by ESHAN JOGWAR, ATHARV DESHMUKH, SAHIL KURIL
                </div>
        </header>
    );
}

export default NavBar;