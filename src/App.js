import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Layout from './components/Layout/Layout';
import loadingGif from './assets/img/loading.gif';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: 'ease-out',
    });

    const hasSeenIntro = localStorage.getItem('seenIntro') === 'true';

    if (!hasSeenIntro) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('seenIntro', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <img src={loadingGif} alt="Loading..." />
      </div>
    );
  }

  return <div className="app-shell"><Layout /></div>;
}

export default App;
