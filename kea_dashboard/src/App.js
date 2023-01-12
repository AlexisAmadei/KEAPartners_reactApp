import './App.css';
import Header from './components/Header';
import LogoKEA from './assets/LogoKEA.png';
import Setting from './assets/settings.svg';

function App() {
  return (
    <div className="App">
      <div className='left-sidebar'>
        <div>
          <img src={LogoKEA} alt='LogoKEA' />
        </div>
        <div className='nav'>
          <ul className='nav'>
            <li className='sidebar-nav-item'>Dashboard</li>
            <li className='sidebar-nav-item'>Vues partagées</li>
            <li className='sidebar-nav-item'>
              <img src={Setting} style={{margin: '2px'}}></img>
              Paramêtres</li>
          </ul>
        </div>
      </div>
      <div className='main'>
        <Header />
      </div>
      <div className='right-sidebar'>
      </div>
    </div>
  );
}

export default App;
