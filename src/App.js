import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import AboutUs from './components/AboutUs';
import Banner from './components/banner';
import NavBar from './components/navbar';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutUs/>
    </div>
  );
}

export default App;
