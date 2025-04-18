import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/other-pages.css';
import '../css/singleplayer.css';

const GamePage = ({ gameId, onRestart }) => {
  //const { gameId } = useParams();
  const [gameData, setGameData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(100);
  //const [timeLeft, setTimeLeft] = useState(100);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const navigate = useNavigate();

  const question = gameData?.questions[currentQuestionIndex];

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(100);
    setTimeLeft(100);
    setSelectedAnswer(null);
    setShowResult(false);
    setRevealedLetters(0);
    setProgress(100);
    setIsPaused(false);
    setGameOver(false);
  };

  const restartGame = () => {
    resetGame();
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/games/${gameId}`)
      .then(res => setGameData(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/games/${gameId}`)
      .then(res => setGameData(res.data))
      .catch(console.error);
  }, [gameId]);

  useEffect(() => {
    if (!gameData || showResult) return;
    if (isPaused || gameOver) {
      //console.log("Is paused");
      //console.log(question.question)
      return;
    }
  
    const timer = setInterval(() => {
      setScore(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResult(true);
          setSelectedAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [gameData, showResult, isPaused, gameOver]);

  useEffect(() => {
    if (!question) return;

    setRevealedLetters(0);

    const revealTimer = setInterval(() => {
      setRevealedLetters(prev => {
        if (prev + 1 > question.question.length) {
          clearInterval(revealTimer);
        }
        return prev + 1;
      });
    }, 1000); // reveal one letter per second

    return () => clearInterval(revealTimer);
  }, [currentQuestionIndex, question]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer || !question) return;
    //console.log(answer.toLowerCase())
    setSelectedAnswer(answer);
    const correctAnswer = question.correct_answer; // assuming correct is first
    //console.log(correctAnswer)
    if (answer.toLowerCase() === correctAnswer) {
      setIsPaused(true);
      //console.log("setIsPaused(true);")
      setTimeout(() => {
        if (currentQuestionIndex + 1 >= gameData.questions.length) {
          setShowResult(true);
          setGameOver(true);
          setSelectedAnswer(null);
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
          setRevealedLetters(0);
          setSelectedAnswer(null);
          setIsPaused(false);
          //console.log("setIsPaused(false);")
        }
      }, 4000);
    } else {
      setScore(prev => Math.max(0, prev - 10));
      setSelectedAnswer(null); // allow retry
      setIsPaused(false);
      //console.log("setIsPaused(false);")
    }
  };

  if (!gameData) return <p>Loading game...</p>;
  if (showResult) {
    return (<div>
        <h2>Your final oxygen: {score}</h2>
        
        <button onClick={onRestart} disabled={!!selectedAnswer} style={{ margin: '8px', padding: '10px 20px' }}> Play again </button>
        <button onClick={() => navigate("/singleplayer")} disabled={!!selectedAnswer} style={{ margin: '8px', padding: '10px 20px' }}> Return to games </button>
    </div>);
  }
  const answerOptions = question.answers.split(' ');

  return (
    <div className="game-container">
      <h2>{gameData.game_name} - Question {currentQuestionIndex+1} out of {gameData.questions.length}</h2>
      <div className="question-display">
        {gameData.content_module === "GIF" ? (
          <img
            src={`../../../content-modules/GIF/image/${question.question}.gif`}
            alt="GIF Question"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              margin: '10px auto',
              display: 'block'
            }}
            
          />
        ) : (
          [...question.question].slice(0, revealedLetters).map((letter, i) => (
            <img
              key={i}
              src={`../../../content-modules/${gameData.content_module}/image/${letter.toLowerCase()}.png`}
              alt={letter}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `../../../content-modules/${gameData.content_module}/image/${letter.toLowerCase()}.jpg`;
              }}
              style={{
                width: 'calc(100vw / 7 - 8px)',
                maxWidth: '80px',
                height: 'auto',
                margin: '4px'
              }}
            />
          ))
        )}
      </div>

      <div className="answer-buttons">
        {answerOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswerClick(opt)}
            disabled={!!selectedAnswer}
            style={{ margin: '8px', padding: '10px 20px' }}
          >
            {opt.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      <div className="progress-bar" style={{ width: '100%', height: '20px', background: '#eee', marginTop: '20px' }}>
        <div
            style={{
            width: `${score}%`,
            height: '100%',
            background: '#4caf50',
            transition: 'width 1s linear'
            }}
        />
        </div>

      <p>Oxygen: {score}</p>
    </div>
  );
};

export default GamePage;
