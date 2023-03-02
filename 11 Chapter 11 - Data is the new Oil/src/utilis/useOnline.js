import { useEffect, useState } from "react"

export const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true)

    useEffect(()=>{

        const handleonline=(event) => {
            console.log("You are now connected to the network.");
            setIsOnline(true)
        }
        const handleOffline=(event) => {
            console.log("You are now connected to the network.");
            setIsOnline(false)
        }

        window.addEventListener('online', handleonline);

        window.addEventListener('offline',handleOffline );

        return ()=>{
            window.removeEventListener('online', handleonline);

        window.removeEventListener('offline',handleOffline );
        }
    },[])

    return isOnline;
}
// How we do in JS Online:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event
// window.addEventListener('online', (event) => {
//     console.log("You are now connected to the network.");
// });


