import shuffle from 'lodash.shuffle';
import CardCollection from './cardCollection';

const nroCards = 8;

export default () => {
  const imgCards = CardCollection();
  // console.log(imgCards)
  let cards = [];

  while (cards.length < nroCards) {
    const index = Math.floor(Math.random() * imgCards.length);
    const card = {
      image: imgCards.splice(index, 1)[0],
      found: false
    };

    cards.push(card);
    cards.push({...card});
  }

  return shuffle(cards);
}