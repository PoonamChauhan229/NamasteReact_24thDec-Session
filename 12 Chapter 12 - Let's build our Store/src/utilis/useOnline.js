import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      console.log("The network connection has been lost.");
    };
    const handleOnline = () => {
      setIsOnline(true);
      console.log("The network connection has been lost.");
    };
    window.addEventListener("offline", handleOffline);

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);

      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
