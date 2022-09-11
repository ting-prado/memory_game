import { useState, useEffect } from 'react';
import Loading from './Loading';
import Card from './Card';
import stan from '../images/stan-pines.png';
import '../styles/Container.css';
import cardsInfo from '../cardsInfo';
import Uniqid from 'uniqid';

const Container = ({ changeScore }) => {
  const [mode, setMode] = useState({
    initial: true,
    loading: false,
  });
  const [content, setContent] = useState(null);

  const arrangedCards = () => {
    return cardsInfo.map((cardObj) => {
      return { info: cardObj, isClicked: false, id: Uniqid() };
    });
  };
  const [cards, setCards] = useState(arrangedCards());

  const shuffleCards = (status) => {
    if (!status) {
      // Grabs a copy of the cards array
      // Sort copied array randomly
      setCards(cards.slice().sort(() => Math.round(Math.random()) * 2 - 1)); // Returns 1 or -1
    } else {
      setMode({
        ...mode,
        loading: true,
      });
      setCards(arrangedCards());
    }
  };

  const handleClick = (e) => {
    const card = cards.find((cardObj) => cardObj.id === e.target.id);
    changeScore(card.isClicked);
    shuffleCards(card.isClicked);
    setCards((prevCards) =>
      prevCards.map((cardObj) =>
        cardObj.id === e.target.id ? { ...cardObj, isClicked: true } : cardObj
      )
    );
  };

  useEffect(() => {
    const container = document.querySelector('.container');
    if (mode.initial && !mode.loading) {
      container.classList.add('initial');
      setContent(
        <div>
          <div className="instruction">
            <p>
              Get points by clicking a card, but don't click on the same card
              more than once!
            </p>
            <img src={stan} alt="grunkle stan" />
          </div>
          <button
            onClick={() => {
              setMode({
                initial: false,
                loading: true,
              });
              container.classList.remove('initial');
            }}
          >
            Start Game
          </button>
        </div>
      );
    } else if (!mode.initial && mode.loading) {
      container.classList.add('loading');
      setContent(<Loading />);
      setTimeout(() => {
        container.classList.remove('loading');
        setMode({
          ...mode,
          loading: false,
        });
      }, 2500);
    } else {
      container.classList.add('gridCont');
      setContent(
        cards.map((cardObj) => (
          <Card
            key={cardObj.id}
            id={cardObj.id}
            name={cardObj.info.name}
            imgSrc={cardObj.info.image}
            handleClick={handleClick}
          />
        ))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, cards]);
  return <div className="container">{content}</div>;
};

export default Container;
