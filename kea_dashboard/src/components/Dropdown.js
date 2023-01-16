import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content-top">
          <a href="#">Ajouter un graphique</a>
          <a href="#">Ajouter la vue entière</a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
