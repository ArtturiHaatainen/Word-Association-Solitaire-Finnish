import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Welcome from './screens/Welcome';

export default function App() {
  const [screen, setScreen] = useState("welcome")

  if (screen == "welcome"){
    return <Welcome onStartGame={() => setScreen("game")}/>
  }
  return <GameScreen onGoBack={() => setScreen('welcome')} />;

}
