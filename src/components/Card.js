import '../styles/Card.css';

const Card = (props) => {
  const { id, name, imgSrc, handleClick } = props;
  return (
    <div className="Card">
      <div onClick={handleClick} className="cover" id={id}></div>
      <img src={imgSrc} alt={name.toLowerCase()} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
