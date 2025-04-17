import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GamePage from '../pages/SingePlayerGame';
import '../css/other-pages.css';
import '../css/singleplayer.css';

const GamePageWrapper = () => {
  const { gameId } = useParams();
  const [instanceId, setInstanceId] = useState(0);

  const restartGame = () => {
    setInstanceId(prev => prev + 1); // change key to force remount
  };

  return <GamePage key={instanceId} gameId={gameId} onRestart={restartGame} />;
};

export default GamePageWrapper;