import React from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import "../public/styles.css"
import AddIcon from '@mui/icons-material/Add';
import Timer from "./components/Timer";

function App()
{
  const [time,setTime]=React.useState(59);
  const totalTime = 59;

  React.useEffect(()=>{
    if(time>0)
    {
      var id=setInterval(function () {
        setTime(time-1);
      }, 1000);
    }
    return () => clearInterval(id);
  },[time]);

  function increaseTime()
  {
    var newTime=time+10;
    if(newTime>=60)
    {
      setTime(59);
    }
    else
      setTime(newTime);
  }
  
  
  const progress = (time / totalTime) * 100;
  const circumference = 2 * Math.PI * 90; // 90 is the radius of our circle
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return <div className="main-div">
    <div style={{fontSize:"30px"}}>Routine starting in...</div>
    <div style={{fontSize:"20px",color:"gray"}}>Subheading here</div>
  

    <Timer time={time} circumference={circumference} strokeDashoffset={strokeDashoffset}/>
  
    <div className="btns">
        <div onClick={increaseTime} className="btn-class">
          <div ><AddIcon fontSize="small"/> </div> <div style={{fontSize:"18px"}}>10 sec</div>
        </div>
      
        <div onClick={()=>{
          setTime(0)
        }} className="btn-class"> 
          <div><SkipNextIcon fontSize="medium"/> </div><div style={{fontSize:"18px"}}> Skip</div>
        </div>
      
    </div>
  </div>

}

export default App;