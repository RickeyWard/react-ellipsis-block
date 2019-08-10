import React, { useState, useEffect } from 'react'

//Holds our lazy listeners
let listeners = {};
//only attach the window event once,
//delay it until first subscribe.
let WindowEventAttached = false;

//create ids 
let lastNowTime = Date.now();
function safeNow() {
    const time = Date.now();
    lastNowTime = lastNowTime || time;
    return lastNowTime = time > lastNowTime ? time : lastNowTime + 1;
}

function getLocallyUniqueID() {
    return safeNow().toString(36);
}

//adds subsciber returns unsubscribe function
export function subscribe(setCallback) {
    if (!setCallback) return;
    if(!WindowEventAttached) {
        window.addEventListener('resize', handleResize);
        WindowEventAttached = true;
    }

    const hash = getLocallyUniqueID();
    listeners[hash] = setCallback;
    return () => { delete listeners[hash] };
}

const settleTime = 750;
let timeoutRef;

// I attempted to optimze this futher, but
// literally everything I tried made it slower.
const handleResize = () => {
    if (Object.keys(listeners).length === 0)
        return;

    if (timeoutRef) {
        clearTimeout(timeoutRef);
        timeoutRef = null;
    }
    timeoutRef = setTimeout(() => {
        const newSize = window.innerWidth;
        Object.values(listeners).forEach(callback => {
            callback(newSize);
        });
        // console.log("resize reconciled for " + Object.keys(listeners).length);
    }, settleTime);
}

export function useLazyWindowWidth() {
    const [width, setWidth] = useState(window.innerHeight);
    useEffect(() => {
        const unsubscribeFunct = subscribe((newWidth) => setWidth(newWidth));
        return unsubscribeFunct;
    }, [setWidth]);//[] is important, only do this on mount.
    return width;
}

//based on react hooks talk, let's us trigger re-renders on windows resizes
export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, [setWidth]);
    return width;
}