import React, {useEffect} from "react";
import isFunction from "../../utils/isFunction";
import PropTypes from 'prop-types'
import {useTimer} from "../../hooks/timerObject";

function Counter({className, start, onTimeout}) {
 //   const [seconds, setSeconds] = useState(start);
  //  const [timeoutId, setTimeoutId] = useState(null);
   // const [timer, setTimer] = useTimer(start);

    /*
    useEffect(() => {
        updateTimer(timeoutId, setSeconds, setTimeoutId, start);
    }, [start]);

    useEffect(() => {
        if (!seconds) {
            clearTimeout(Number(timeoutId));
            if (isFunction(onTimeout))
                onTimeout();
        }
    }, [seconds]);
     */

    const [timer, ] = useTimer(start);

    useEffect(() => {
        if (!timer) {
            if (isFunction(onTimeout))
                onTimeout();
        }
    });

    return (
        <div className={`counter ${className}`}>
            <div className={"counter__circle"}>
                <p className={"counter__number"}>{timer}</p>
            </div>
        </div>
    )
}
/*
function updateTimer(timeoutId, setSeconds, setTimeoutId, start) {
    clearInterval(timeoutId);
    setSeconds(start);
    const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
    }, 1000);

    setTimeoutId(intervalId);
}

 */

Counter.propTypes = {
    className: PropTypes.any,
    start: PropTypes.number,
    onTimeout: PropTypes.func,
};

export default Counter

/*    useEffect(() => {
        if (isReset) {
            updateTimer(timeoutId, setSeconds, setTimeoutId, start);
            if (isFunction(afterReset))
                afterReset();
        }
    }, [isReset]);

 */