import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <div className='main'>
        <Header />
        <Navbar />
      </div>
      <RightSideBar />
    </div>
  );
}

export default App;
