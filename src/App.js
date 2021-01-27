import React, {useEffect, useState} from 'react'
import Footer from './Components/Footer';
// import Hero from './Containers/LandingPageComponents/Hero';
import MainNavBar from './Containers/MainNavBar';
import Routing from './Containers/Routing/Routing';
import './App.css'
function App() {

  const [color, setColor] = useState("")

  // const changeTheme = (currentTheme) => {
  //   if(currentTheme === "dark"){ 
  //     localStorage.setItem("appTheme","light"); 
  //     return "light" 
  //   }
  //   localStorage.setItem("appTheme","dark")
  //   return "dark"
  // }
  
  useEffect(() => {
    localStorage.getItem("appTheme") ? setColor(localStorage.getItem("appTheme")) : setColor(localStorage.setItem("appTheme","dark"))
  }, [color])

  return (
    <>
    <MainNavBar theme={color}/>
    <div className="App">
      <Routing></Routing>
      {/* <MainNavBar theme={color}/>
      <Hero theme={color}/>
      <button onClick={()=>setColor(changeTheme(color)) }> change theeme</button>
    */}
    </div>
      <Footer theme={color}/> 
      </>
  );
}

export default App;
