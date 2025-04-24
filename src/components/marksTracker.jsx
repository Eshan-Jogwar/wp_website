import React, { useState, useEffect } from "react";
import TableElem from "./TableElem"; // assuming it's in the same folder or adjust the path accordingly
import { dataUrl } from "./Links";

const MarksTracker = ({ Username }) => {
  const [tables, setTables] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${dataUrl}${Username}/marks-tracker`);
        if (!res.ok) throw new Error("Failed to fetch marksTracker");
        const data = await res.json();
        console.log(data);
        setUserInfo(data);
        setTables(data.marksTracker || []);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
  
    if (Username) {
      fetchData();
    }
  }, [Username]);
  

  useEffect(() => {
    fetch(`${dataUrl}${Username}/marks-tracker`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marksTracker: tables,
      }),
    });
  }, [tables]);

  const handleAddReport = () => {
    const newReport = [
      ["P.S", 14, 15, 56, 95],
      ["I.L.A", 15, 14, 56, 95],
      ["D.S", 14, 15, 56, 95],
      ["A.E", 14, 15, 56, 95],
      ["I.E", 14, 15, 56, 95],
    ];
    setTables([...tables, newReport]);
  };

  const handleRemoveReport = (index) => {
    setTables((previous) => {
      const updated = [];
      for (let i = 0; i < previous.length; i++) {
        if (i != index) updated.push(previous[i]);
      }
      console.log({ updated })
      return updated;  
    });
  };

  const handleUpdateReport = (index, updatedData) => {
    const newTables = [...tables];
    newTables[index] = updatedData;
    setTables(() => newTables);
  };

  return userInfo ? (
    <div className="page-bg-markstracker">
      <div className="container-markstracker">
        <div className="title-markstracker"><h1>My Tests</h1></div>

        <div className="info-cards-markstracker">
          <div className="card-markstracker">
            <i className="fas fa-user"></i>
            <div><p>Candidate Name</p><p className="bold-markstracker">{userInfo.name}</p></div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-award"></i>
            <div><p>Performance</p><p className="bold-markstracker">{userInfo.performance}</p></div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-trophy"></i>
            <div><p>Candidate Rank</p><p className="bold-markstracker">{userInfo.rank}</p></div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-percentage"></i>
            <div><p>Average Percent</p><p className="bold-markstracker">{userInfo.percent}%</p></div>
          </div>
        </div>

        {tables.map((tableData, index) => (
          <TableElem
            key={Date.now() + (200*Math.random())}
            data={tableData}
            index={index}
            onRemove={handleRemoveReport} 
            onUpdate={handleUpdateReport}
          />
        ))}

        <div className="button-group-markstracker">
          <button className="btn-filled-markstracker" onClick={handleAddReport}>
            Add Report
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MarksTracker;
