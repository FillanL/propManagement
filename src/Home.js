import React, {useEffect, useState} from 'react';
import Hero from './Containers/LandingPageComponents/Hero';

const Home =()=> {

  const [color, setColor] = useState("")
  const changeTheme = (currentTheme) => {
    if(currentTheme === "dark"){ 
      localStorage.setItem("appTheme","light"); 
      return "light" 
    }
    localStorage.setItem("appTheme","dark")
    return "dark"
  }
  
  useEffect(() => {
    localStorage.getItem("appTheme") ? setColor(localStorage.getItem("appTheme")) : setColor(localStorage.setItem("appTheme","dark"))
  }, [color])

  return (
    <>
      <Hero theme={color}/>
      <button onClick={()=>setColor(changeTheme(color)) }> change theeme</button>
    </>
  );
}

export default Home;