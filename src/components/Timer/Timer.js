const PERIMETER = 811.69;

function Timer({ label, time, max }) {
    const ratio = time / max;
    const negativeRatio = 1 - ratio;

    return (
        <div className='dataTime'>
            <div className='time'>
                {time}
                <svg className="timerProgress" width="262.5" height="262.5" viewBox="0 0 262.5 262.5" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="131.25" cy="131.25" r="129.25" stroke="rgb(156, 155, 155)" fill="none" strokeWidth="3"/>
                    <circle cx="131.25" cy="131.25" r="129.25" stroke="#fff" fill="none" strokeWidth="3" strokeDasharray={`${PERIMETER * negativeRatio} ${PERIMETER * ratio}`}/>
                </svg>
            </div>
            <div className='label'>
              {label}  
            </div>
        </div>
    );
}

export default Timer;