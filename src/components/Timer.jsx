import React from "react";

function Timer(props)
{
 return <>
    <div className="timer-div">
    <svg className="timer-circle" width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="10"
        />
        {/* Progress circle (purple) */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="purple"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={props.circumference}
          strokeDashoffset={props.strokeDashoffset}
          transform="rotate(-90 100 100)"
        />
      </svg>
        <div className="time">00 : {props.time<10 ? `0${props.time}`: props.time }</div>
    </div>
 </>
}


export default Timer;