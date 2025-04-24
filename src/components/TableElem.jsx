import { useState } from "react";

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
            onClick={() => onRemove(index)}  // This triggers the removal in the parent
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

export default TableElem;
