import { useEffect } from 'react';

const useAnalytics = (pageName) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const event = { event: 'page_view', page: pageName, timestamp: Date.now() };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }, [pageName]);
};

export default useAnalytics;
