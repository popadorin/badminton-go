import React, {useEffect, useState} from 'react';
import {AddToHomeScreenIos} from './AddToHomeScreenIos';
import {AddToHomeScreenAndroid} from './AddToHomeScreenAndroid';

export function AddToHomeScreen() {
  const [isVisible, setVisibleState] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator['standalone']);

    if (isIos() && !isInStandaloneMode()) {
      setIsIos(true);
      setVisibleState(true);
    }
  }, []);

  return isVisible
    ? (
      <div onClick={() => setVisibleState(false)}>
        <button onClick={() => setVisibleState(false)}>Close</button>
        {isIos ? <AddToHomeScreenIos/> : <AddToHomeScreenAndroid show={() => setVisibleState(true)}/>}
      </div>
    ) : null;
}
