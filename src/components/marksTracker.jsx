import React, { useState } from "react";

const TableElem = ({ data, index, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleChange = (rowIndex, colIndex, value) => {
    const updated = [...editedData];
    updated[rowIndex][colIndex] = value;
    setEditedData(updated);
  };

  const handleUpdate = () => {
    onUpdate(index, editedData);
    setIsEditing(false);
  };

  return (
    <div
      className="table-wrapper-markstracker"
      style={{
        position: "relative",
        marginBottom: "1.5rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        padding: "1rem",
      }}
    >
      <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
        {isEditing ? (
          <button
            onClick={handleUpdate}
            style={{
              border: "none",
              background: "#4CAF50",
              color: "white",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              border: "none",
              background: "#2196F3",
              color: "white",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onRemove(index)}
          style={{
            border: "none",
            background: "#f44336",
            color: "white",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
      </div>
      <table className="marks-table-markstracker">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Sessional-1</th>
            <th>Sessional-2</th>
            <th>End Semester</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {isEditing ? (
                    <input
                      type={colIndex === 0 ? "text" : "number"}
                      value={cell}
                      onChange={(e) =>
                        handleChange(
                          rowIndex,
                          colIndex,
                          colIndex === 0 ? e.target.value : parseInt(e.target.value)
                        )
                      }
                      style={{
                        width: "100%",
                        padding: "4px",
                        fontSize: "14px",
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MarksTracker = () => {
  const [tables, setTables] = useState([
    [
      ["P.S", 14, 15, 56, 95],
      ["I.L.A", 15, 14, 56, 95],
      ["D.S", 14, 15, 56, 95],
      ["A.E", 14, 15, 56, 95],
      ["I.E", 14, 15, 56, 95],
    ],
  ]);

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
    setTables(tables.filter((_, i) => i !== index));
  };

  const handleUpdateReport = (index, updatedData) => {
    const newTables = [...tables];
    newTables[index] = updatedData;
    setTables(newTables);
  };

  return (
    <div className="page-bg-markstracker">
      <div className="container-markstracker">
        <div className="title-markstracker">
          <h1>My Tests</h1>
        </div>

        <div className="info-cards-markstracker">
          <div className="card-markstracker">
            <i className="fas fa-user"></i>
            <div>
              <p>Candidate Name</p>
              <p className="bold-markstracker">Eshan</p>
            </div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-award"></i>
            <div>
              <p>Performance</p>
              <p className="bold-markstracker">Distinction</p>
            </div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-trophy"></i>
            <div>
              <p>Candidate Rank</p>
              <p className="bold-markstracker">01</p>
            </div>
          </div>
          <div className="card-markstracker">
            <i className="fas fa-percentage"></i>
            <div>
              <p>Average Percent</p>
              <p className="bold-markstracker">95%</p>
            </div>
          </div>
        </div>

        <div className="form-group-markstracker">
          <label htmlFor="subject">Select Subject</label>
          <input type="text" id="subject" />
        </div>

        {tables.map((tableData, index) => (
          <TableElem
            key={index}
            data={tableData}
            index={index}
            onRemove={handleRemoveReport}
            onUpdate={handleUpdateReport}
          />
        ))}

        <div className="button-group-markstracker">
          <button className="btn-outline-markstracker">View Chart</button>
          <button className="btn-filled-markstracker" onClick={handleAddReport}>
            Add Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarksTracker;
