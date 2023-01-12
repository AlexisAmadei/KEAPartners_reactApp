import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <div className='main'>
        <Header />
      </div>
      <RightSideBar />
    </div>
  );
}

export default App;
