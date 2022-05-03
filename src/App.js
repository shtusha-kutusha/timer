import { useEffect, useState } from "react";
import Timer from "./components/Timer/Timer";

const YEAR = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;

const params = document.location.hash ? document.location.hash
  .replace('#', '')
  .split('-')
  .map(component => parseInt(component, 10)) : [2030, 1, 1];

function calculateDifference(date1, date2) {
  let diff = date1.getTime() - date2.getTime();
  if (diff < 0)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    
  const days = Math.floor(diff / (YEAR));
  diff -= days * (YEAR);
  const hours = Math.floor(diff / (HOUR));
  diff -= hours * (HOUR);
  const minutes = Math.floor(diff / (MINUTE));
  diff -= minutes * (MINUTE);
  const seconds = Math.floor(diff / SECOND);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function App() {
  const [date, setDate] = useState(new Date(params[0], params[1] - 1, params[2], 0, 0, 0, 0));
  const [sec, setSec] = useState(0);
  
  useEffect(() => {
    setTimeout(setSec, 1000, sec + 1);
  }, [sec]);
  
  const today = new Date();
  const { days, hours, minutes, seconds } = calculateDifference(date, today);
  return (
    <div> 
      <span className='countdown'>Countdown timer</span>
      <div className='timer'>
        <Timer label="Days" time={days} max={3000} />
        <Timer label="Hours" time={hours} max={24} />
        <Timer label="Minutes" time={minutes} max={60} />
        <Timer label="Seconds" time={seconds} max={60} />
      </div>
    </div>
  );
}

export default App;
