import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import AboutUs from './components/AboutUs';
import Banner from './components/banner';
import NavBar from './components/navbar';
import Services from './components/Services';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
