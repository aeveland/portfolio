'use client';

import { useEffect } from 'react';

exort const GA_MEASUREMENT_ID = 'G-1RZGK6FPN0';

export default function Analytics() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag function
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Initialize with current date
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);

    // Cleanup function to remove the script if component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
