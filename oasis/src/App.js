import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./images/logo-transparent-png.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="title">
        <img src={logo} alt="Oasis"></img>
        <h1>Revolutionary Marketplace</h1>
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