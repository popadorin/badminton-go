import React, {useEffect} from 'react';
import {useAddToHomeScreenAndroidPrompt} from './useAddToHomeScreenAndroidPrompt';

export function AddToHomeScreenAndroid({show}: { show: () => void }) {
  const [prompt, promptToInstall] = useAddToHomeScreenAndroidPrompt();

  useEffect(
    () => {
      if (prompt) {
        show();
      }
    },
    [prompt]
  );

  return (
    <div>
      Hello! Wanna add to homescreen?
      <button onClick={promptToInstall}>Add to homescreen</button>
    </div>
  );
}
