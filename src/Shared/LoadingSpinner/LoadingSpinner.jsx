import React, { useState, useEffect } from 'react';
import { ImSpinner9 } from "react-icons/im";

const LoadingSpinner = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1 second

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9 className="animate-spin text-blue-500 text-6xl" />
      </div>
    );
  }

  return (
    <div className="">
    {children}
    </div>
  );
};

export default LoadingSpinner;
