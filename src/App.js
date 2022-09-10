import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  const [score, setScore] = useState({
    best: 0,
    current: 0,
  });
  return (
    <div className="app">
      <Header score={score} />
      <Container />
    </div>
  );
}
export default App;
