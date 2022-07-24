import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { getData } from './components/tools/tools'
import AboutUs from './components/AboutUs';
import Banner from './components/banner';
import Experiences from './components/experiences';
import NavBar from './components/navbar';
import Services from './components/Services';

function App() {
  //ici je recupere tous mes datas
  const [data, setData] = useState({})

  useEffect(()=>{
    getData(setData)
  },[])
 
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <Services data={data}/>
      <Experiences data={data}/>
    </div>
  );
}

export default App;
