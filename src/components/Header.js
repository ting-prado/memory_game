import '../styles/Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <h1>MEMORY GAME</h1>
      <div>
        <p>Current score:</p>
        <p>Best score:</p>
      </div>
    </div>
  );
};

export default Header;
