import React, {useState, useEffect} from "react";
import isFunction from "../../utils/isFunction";
import PropTypes from 'prop-types'

function Counter({className, start, onTimeout, isReset, afterReset}) {
    const [seconds, setSeconds] = useState(start);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        updateTimer(timeoutId, setSeconds, setTimeoutId, start);
    }, [start]);

    useEffect(() => {
        if (!seconds) {
            clearTimeout(timeoutId);
            if (isFunction(onTimeout))
                onTimeout();
        }
    }, [seconds]);

    useEffect(() => {
        if (isReset) {
            updateTimer(timeoutId, setSeconds, setTimeoutId, start);
            if (isFunction(afterReset))
                afterReset();
        }
    }, [isReset]);

    return (
        <div className={`counter ${className}`}>
            <div className={"counter__circle"}>
                <p className={"counter__number"}>{seconds}</p>
            </div>
        </div>
    )
}

function updateTimer(timeoutId, setSeconds, setTimeoutId, start) {
    clearInterval(timeoutId);
    setSeconds(start);
    const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
    }, 1000);

    setTimeoutId(intervalId);
}

Counter.propTypes = {
    className: PropTypes.any,
    start: PropTypes.number,
    onTimeout: PropTypes.func,
};

export default Counter