import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='title'>
        <div className='title-container'>
          <h1 id='title'>Oasis</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

// HomeWork:
// The'title' div currently has two things:
// logo & Text
// We want the logo to the left and text to the right
// Resize image to match text size
// center on page and have some padding from navbar t
