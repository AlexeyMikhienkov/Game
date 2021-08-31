import React, {useEffect, useState} from "react";

export const timer = {
    time: 0
};

export function useTimer(start) {
    const [seconds, setSeconds] = useState(start);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        updateTimer(timeoutId, setSeconds, setTimeoutId, start);
    }, [start]);

    useEffect(() => {
        if (!seconds) {
            clearTimeout(Number(timeoutId));
        }
    }, [seconds]);

    return [seconds, setSeconds];
}

function updateTimer(timeoutId, setSeconds, setTimeoutId, start) {
    clearInterval(timeoutId);
    setSeconds(start);
    const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
    }, 1000);

    setTimeoutId(intervalId);
}