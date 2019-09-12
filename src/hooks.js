import { useState, useEffect } from 'react';

export function useIsMobile(){
    const [isMobile, setIsMobile] = useState(false);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth >= 768 ? false : true);
    };
    useEffect(() => {
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    });
    return isMobile
  }