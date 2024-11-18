import React, { useState, useEffect } from "react";
import display from "../assets/icons/Display.svg";
import down from "../assets/icons/down.svg";
import "../styles/navabar.css";

const Navbar = ({ onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");


  useEffect(() => {
    const savedGrouping = localStorage.getItem("grouping");
    const savedOrdering = localStorage.getItem("ordering");

    if (savedGrouping) {
      setGrouping(savedGrouping);
      onGroupingChange(savedGrouping);
    }

    if (savedOrdering) {
      setOrdering(savedOrdering);
      onOrderingChange(savedOrdering);
    }
  }, [onGroupingChange, onOrderingChange]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleGroupingChange = (value) => {
    setGrouping(value);
    localStorage.setItem("grouping", value);
    onGroupingChange(value);
  };

  const handleOrderingChange = (value) => {
    setOrdering(value);
    localStorage.setItem("ordering", value); 
    onOrderingChange(value);
  };

  return (
    <div className="navbar-container">
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <img src={display} alt="" />
          Display
          <img src={down} alt="" />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-section">
              <label>Grouping</label>
              <select
                className="dropdown-select"
                value={grouping}
                onChange={(e) => handleGroupingChange(e.target.value)}
              >
                <option value="Status">Status</option>
                <option value="Priority">Priority</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="dropdown-section">
              <label>Ordering</label>
              <select
                className="dropdown-select"
                value={ordering}
                onChange={(e) => handleOrderingChange(e.target.value)}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
