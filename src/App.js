import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { getData } from './components/tools/tools'
import AboutUs from './components/AboutUs';
import Banner from './components/banner';
import Experiences from './components/experiences';
import NavBar from './components/navbar';
import Services from './components/Services';
import Knowledges from './components/knowledge';

function App() {
  //ici je recupere tous mes datas
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  console.log(data,"data")

  useEffect(()=>{
    getData(setData, setLoading)
  },[])
 
  return (
    <div className="App">
    {!loading &&
      <>
        <NavBar/>
        <Banner/>
        <AboutUs/>
        <Services data={data}/> 
        <Experiences data={data}/> 
        <Knowledges data={data}/>
      </>
    }
      
    </div>
  );
}

export default App;
