import './App.css';
import Navbar from './components/Navbar';
import oasisImage from './images/oasis.jpg';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='title'>
        <div
          className='title-container'
          style={{ backgroundImage: `url(${oasisImage})` }}
        >
          <h1 id='title'>Oasis</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
