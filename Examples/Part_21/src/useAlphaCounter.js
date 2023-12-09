import React, { useState, useEffect } from "react";

function useAlphaCounter(speed = 1000) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter >= 25) setCounter(counter - 25);
            else setCounter(counter + 1);
        }, speed);
        return () => clearInterval(interval);
    }, [counter]);
    return String.fromCharCode(97 + counter);
}
export default useAlphaCounter;