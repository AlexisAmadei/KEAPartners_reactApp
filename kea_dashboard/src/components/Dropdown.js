import { useState } from "react";
import "./Dropdown.css";
import PlusIcon from '../assets/Plus.svg';
import CloseIcon from '../assets/CloseIcon.svg';

const options = [
  { value: 'Ajouter la vue entière', label: 'Option 1' },
  { value: 'Ajouter un graphique', label: 'Option 2' },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown" >
      <button className="dropdown__button"
        onClick={() => setIsOpen(!isOpen)} >
          <img src={PlusIcon} alt=""></img>
      </button>
        {isOpen && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div className="dropdown__option">
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}