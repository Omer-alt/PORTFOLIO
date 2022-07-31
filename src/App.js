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
import My_portfolio from './components/my_portfolio';
import Recommendation from './components/Recommendation';
import Contact from './components/Contact';
import Footer from './components/footer';

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
        <My_portfolio data={data}/>
        <Recommendation data={data}/>
        <Contact data={data} />
        <Footer/>
      </>
    }
      
    </div>
  );
}

export default App;
