import LogoKEA from '../assets/LogoKEA.png';
import Setting from '../assets/settings.svg';
import HomeIcon from '../assets/home.svg';
import EyeIcon from '../assets/eye.svg';

import './LeftSideBar.css';

export default function LeftSideBar() {
  return (
    <div className='left-sidebar'>
      <div style={{ marginTop: "10%"}}>
        <img src={LogoKEA} alt='LogoKEA' />
      </div>
      <div className='nav'>
        <ul className='nav-list.'>
          <li className='sidebar-nav-item'>
            <img src={HomeIcon} alt=""></img>
            Dashboard
          </li>
          <li className='sidebar-nav-item'><img src={EyeIcon} alt=""></img>Vues partagées</li>
          <li className='sidebar-nav-item'>
            <img src={Setting} alt=""></img>
            Paramètres</li>
        </ul>
      </div>
    </div>
  )
}
