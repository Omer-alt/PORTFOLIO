import React,{useState, useEffect} from 'react'
import { Waypoint } from "react-waypoint";

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
import ScrollToTop from './components/tools/ScrollToTop';
import Loader from "./components/tools/loader";
// import { magicMouse } from 'magicmouse.js'
import  magicMouse  from 'magicmouse.js'


function App() {
  //ici je recupere tous mes datas
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  console.log(data,"data")
  // la gestion de scrollToTop component
  const [isWayPoint, setIsWaypoint] = useState(false)
    // to handle waypoint
  const handleWayPointEnter = ()=>{
    setIsWaypoint(true)
  }
  const handleWayPointLeave = ()=>{
    setIsWaypoint(false)
  }



  useEffect(()=>{
    magicMouse({
      "cursorOuter": "circle-basic",
      "hoverEffect": "pointer-blur",
      "hoverItemMove": false,
      "defaultCursor": false,
      "outerWidth": 40,
      "outerHeight": 40,
      "color": "#00b074",
      "backgroundColor": "#00b074"
    })
    getData(setData, setLoading)
  },[])
 
  return (
    <div className="App">

    {loading ? <Loader/>:
      <>
        <NavBar/>
        <Banner/>
        <AboutUs handleWayPointLeave={handleWayPointLeave} />
        {/* onLeave={setIsWaypoint(false)} */}
        <Waypoint onEnter={()=>{handleWayPointEnter()}}  />
        {isWayPoint?
          <ScrollToTop/>
        :null
        }
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
