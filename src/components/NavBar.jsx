const NavBar = ({ setWebMode, webMode }) => {
    return (
        <header>
                <div className="container">
                    <h1>Academic Tracker</h1>
                    <nav>
                      <button href="HomePage" className="nav-button" onClick={() => {setWebMode("home")}}>HomePage</button>
                      <select
                        className="nav-button pill-dropdown"
                        onChange={(e) => setWebMode(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>Features</option>
                        <option value="markstracker">Marks Tracker</option>
                        <option value="attendance">Attendance Tracker</option>
                        <option value="timetable">Time Table</option>
                    </select>
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