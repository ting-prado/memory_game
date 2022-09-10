import { useState, useEffect } from 'react';
import Loading from './Loading';
import Card from './Card';
import stan from '../images/stan-pines.png';
import '../styles/Container.css';
import cardsInfo from '../cardsInfo';
import Uniqid from 'uniqid';

const Container = (props) => {
  const [mode, setMode] = useState({
    initial: true,
    loading: false,
  });
  const [content, setContent] = useState(null);
  const [cards, setCards] = useState(cardsInfo);

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
          <Card key={Uniqid()} name={cardObj.name} imgSrc={cardObj.image} />
        ))
      );
    }
  }, [mode, cards]);
  return <div className="container">{content}</div>;
};

export default Container;
