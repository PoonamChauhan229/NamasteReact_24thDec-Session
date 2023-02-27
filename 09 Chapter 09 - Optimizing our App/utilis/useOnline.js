import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  // logic to online and offline

  // page loads then eventlistener should be runs once=> empty dependancy
  useEffect(() => {
    const handleOnline = () => {
      console.log("The network connection has been retrieved.");
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log("The network connection has been lost.");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    
  }, []);

  return isOnline;
};

export default useOnline;
