import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <div className='main'>
        <Header />
      </div>
      <div className='right-sidebar'>
      </div>
    </div>
  );
}

export default App;
