import React, {useState, useEffect} from "react";

export default function Counter({className, start, update, onTimeout}) {
        const [seconds, setSeconds] = useState(start);
    const [timeoutId, setTimeoutId] = useState(null);


    useEffect(() => {
        updateTimer(timeoutId, setSeconds, setTimeoutId,start);
    }, [start]);

    useEffect(() => {
        if (!seconds) {
            clearTimeout(timeoutId);
            if (typeof onTimeout === "function") {
                onTimeout();
            }
        }
    }, [seconds]);

    return (
        <div className={`counter ${className}`}>
            <div className={"counter__circle"}>
                <p className={"counter__number"}>{seconds}</p>
            </div>
        </div>
    )
}

function updateTimer(timeoutId, setSeconds, setTimeoutId,start) {
    clearInterval(timeoutId);
    console.log(timeoutId);
    setSeconds(start);
    const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
    }, 1000);

    setTimeoutId(intervalId);
}

//TODO: Timer props: кол-во времени, вызов колбэка, когда время закончилось
// если проп времени поменялся во время отсчета, считать заново
// передать доп компонент, который будет показывать, что нужно начать отсчет заново