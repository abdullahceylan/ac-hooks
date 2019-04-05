import { useState, useEffect } from 'react';

function useConnectivity() {
  const [isOnline, setOnline] = useState(window ? window.navigator.onLine : false);

  const onlineHandler = () => setOnline(true);

  const offlineHandler = () => setOnline(false);

  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return { isOnline };
}

export default useConnectivity;
