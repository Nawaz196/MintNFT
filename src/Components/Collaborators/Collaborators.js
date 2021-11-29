import React, { useState } from "react";
import "./Styles.css";
import { IoToggleSharp } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";

function Collaborators() {
  const [rows, setRows] = useState([
    {
      name: "",
      role: "",
      royaltySplit: "",
    },
  ]);

  const handleChange = (idx) => (e) => {
    const changeRow = [...rows];
    changeRow[idx] = { ...changeRow[idx], [e.target.name]: e.target.value };
    setRows(changeRow);
  };

  const addRow = () => {
    const newRow = {
      name: "",
      role: "",
      royaltySplit: "",
    };
    setRows((prev) => {
      return [...prev, newRow];
    });
  };

  // console.log(rows);

  return (
    <div className="main">
      <div className="header">
        <IoToggleSharp className="toggle" />

        <h2>ADD COLLABORATORS / CO-CONTRIBUTORS</h2>
        <AiFillInfoCircle className="iButton" />
      </div>

      <div className="mainContainer">
        <div className="row">
          <div className="sno"></div>
          <div className="name">
            <h3>Name of the Creator</h3>
          </div>
          <div className="role">
            <h3>Role</h3>
          </div>
          <div className="royaltySplit">
            <h3>Royality split %</h3>
          </div>
        </div>
        {rows.map((item, idx) => {
          return (
            <div className="row">
              <div className="sno">
                <h3>{idx + 1}</h3>{" "}
              </div>
              <div className="name">
                <input
                  type="text"
                  name="name"
                  label="START WITH @"
                  placeholder="START WITH @"
                  value={rows[idx].name}
                  onChange={handleChange(idx)}
                  className="form"
                />
              </div>
              <div className="role">
                <input
                  type="text"
                  name="role"
                  label="START WITH @"
                  placeholder="START WITH @"
                  value={rows[idx].role}
                  onChange={handleChange(idx)}
                  className="form"
                />
              </div>
              <div className="royaltySplit">
                <input
                  type="text"
                  name="royaltySplit"
                  label="START WITH @"
                  placeholder="START WITH @"
                  value={rows[idx].royaltySplit}
                  onChange={handleChange(idx)}
                  className="form"
                />
              </div>
            </div>
          );
        })}
        <div className="row">
          <div className="sno"> </div>
          <div className="name">
            <div className="buttonContainer">
              <button onClick={addRow} className="addButton">
                + ADD MORE COLLABORATORS
              </button>
            </div>
          </div>
          <div className="role"></div>
          <div className="royaltySplit"></div>
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
