import React, {useState,useEffect} from 'react';
const useCurrentTime = ()=>{
    const [time,setTime] =useState(new Date().toLocaleTimeString());
    const [date,setDate] =useState(new Date().toLocaleDateString());
    useEffect(() => {
        const update = ()=>{
            const d= new Date();
            setTime(d.toLocaleTimeString());
            setDate(d.toLocaleDateString());
        }
        const interval = setInterval(update, 1000);
        return () =>{
            clearInterval(interval);
        }
    },[]);
    return [time, date];
}
export default useCurrentTime;
