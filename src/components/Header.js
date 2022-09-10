import '../styles/Header.css';

const Header = ({ score }) => {
  return (
    <div className="header">
      <h1>MEMORY GAME</h1>
      <div>
        <p>
          Current score: <span className="score">{score.current}</span>
        </p>
        <p>
          Best score: <span className="score">{score.best}</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
