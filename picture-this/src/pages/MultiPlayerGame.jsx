import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_WS_BASE_URL);

const MultiplayerGamePage = ({ gameId, onRestart }) => {
  const [gameData, setGameData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(100);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playersRemaining, setPlayersRemaining] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit('joinGame', gameId);
    socket.on('gameData', data => setGameData(data));
    socket.on('nextQuestion', () => {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setRevealedLetters(0);
    });
    socket.on('endGame', () => setShowResult(true));
    return () => {
      socket.off('gameData');
      socket.off('nextQuestion');
      socket.off('endGame');
    };
  }, [gameId]);

  useEffect(() => {
    if (!gameData) return;
    const question = gameData.questions[currentQuestionIndex];
    if (!question) return;
    const revealTimer = setInterval(() => {
      setRevealedLetters(prev => {
        if (prev >= question.question.length) clearInterval(revealTimer);
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(revealTimer);
  }, [currentQuestionIndex, gameData]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    socket.emit('submitAnswer', {
      gameId,
      answer,
      questionIndex: currentQuestionIndex,
    });
  };

  if (!gameData) return <p>Loading...</p>;
  if (showResult) {
    return <div>
      <h2>Final oxygen: {score}</h2>
      <button onClick={onRestart}>Play again</button>
      <button onClick={() => navigate("/singleplayer")}>Return to games</button>
    </div>;
  }

  const question = gameData.questions[currentQuestionIndex];
  const answers = question.answers.split(' ');

  return (
    <div>
      <h2>{gameData.game_name}</h2>
      <div>
        {[...question.question].slice(0, revealedLetters).map((letter, i) => (
          <img
            key={i}
            src={`../../../content-modules/${gameData.content_module}/image/${letter.toLowerCase()}.png`}
            alt={letter}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `../../../content-modules/${gameData.content_module}/image/${letter.toLowerCase()}.jpg`;
            }}
            style={{ width: '100px', margin: '0 4px' }}
          />
        ))}
      </div>
      <div>
        {answers.map((ans, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerClick(ans)}
            disabled={!!selectedAnswer}
          >
            {ans.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
      <div style={{ width: '100%', height: '20px', background: '#eee' }}>
        <div style={{ width: `${score}%`, height: '100%', background: '#4caf50' }} />
      </div>
      <p>Oxygen: {score}</p>
    </div>
  );
};

export default MultiplayerGamePage;