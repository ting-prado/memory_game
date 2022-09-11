import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Container from './components/Container';

const App = () => {
  const [score, setScore] = useState({
    best: 0,
    current: 0,
  });

  const changeScore = (status) => {
    if (!status) {
      setScore({
        ...score,
        current: score.current + 1,
      });
    } else {
      setScore({
        best: score.current > score.best ? score.current : score.best,
        current: 0,
      });
    }
  };

  return (
    <div className="app">
      <Header score={score} />
      <Container changeScore={changeScore} />
    </div>
  );
};
export default App;
