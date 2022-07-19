import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Banner from './components/banner';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
