import { RatingStar } from './components/selected-category/rating/star';
import { Card } from './components/selected-category/cards/cards';

export const listenForAudio: () => void = () => {
  const CARDS_FIELD = <HTMLElement>document.getElementById('cards-field');
  CARDS_FIELD.addEventListener('click', async (event) => {
    if ((<Element>event.target).classList.contains('card__image-front')
    || (<Element>event.target).classList.contains('card')
    || (<Element>event.target).classList.contains('card__title-front')) {
      const selectedCardID = (<Element>event.target).id.split('-')[0];
      const cardAudio = <HTMLAudioElement>document.getElementById(`${selectedCardID}-audio`);
      cardAudio.currentTime = 0;
      cardAudio.play();
    }
  });
};

function setCardBlockStyleTransform(param: string): void {
  const block = document.querySelectorAll('.card-block');
  block.forEach((cardBlock) => {
    const blockFront = <HTMLElement>cardBlock;
    blockFront.style.transform = param;
  });
}

export function setCardImageWidthHeight(paramWidth: string, paramHeight: string): void {
  const images = document.querySelectorAll('.card__image-front');
  images.forEach((image) => {
    const cardImage = <HTMLElement>image;
    cardImage.style.width = paramWidth;
    cardImage.style.height = paramHeight;
  });
}

export function setCardTitleStyleDisplay(param: string): void {
  const titles = document.querySelectorAll('.card__title-front');
  titles.forEach((title) => {
    const cardTitle = <HTMLElement>title;
    cardTitle.style.display = param;
  });
}

export function setBtnTurnStyleBlock(param: string): void {
  const btnTurn = document.querySelectorAll('.card-turn-over');
  btnTurn.forEach((button) => {
    const cardBtnTurn = <HTMLElement>button;
    cardBtnTurn.style.display = param;
  });
}

export function checkPlayTrain(): void {
  const btnPlayTrain = <HTMLInputElement>document.getElementById('checkbox');
  const btnStart = <HTMLButtonElement>document.getElementById('btn-start');
  if (btnPlayTrain.checked) {
    setBtnTurnStyleBlock('none');
    setCardTitleStyleDisplay('none');
    setCardImageWidthHeight('82%', '92%');
    setCardBlockStyleTransform('rotateY(0)');
    btnStart.style.display = 'block';
  }
}

export function cardHandler(image: string, card: Card): void {
  const btnTurn = <HTMLElement>document.getElementById(`btn-turn-${image.split('/')[1].split('.')[0]}`);
  btnTurn.addEventListener('click', async () => {
    await card.flipToBack();
  });
}

export function switchModeHandler(): void {
  const btnPlayTrain = <HTMLInputElement>document.getElementById('checkbox');
  btnPlayTrain.addEventListener('click', () => {
    if (btnPlayTrain.checked) {
      const btnStart = <HTMLButtonElement>document.getElementById('btn-start');
      const cardsField = document.getElementById('cards-field');
      if (cardsField) {
        setBtnTurnStyleBlock('none');
        setCardTitleStyleDisplay('none');
        setCardBlockStyleTransform('rotateY(0)');
        setCardImageWidthHeight('82%', '92%');
        btnStart.style.display = 'block';
      } else {
        // console.log('cards is not here');
      }
    } else {
      const btnStart = <HTMLButtonElement>document.getElementById('btn-start');
      setBtnTurnStyleBlock('block');
      setCardTitleStyleDisplay('block');
      setCardBlockStyleTransform('rotateY(180deg)');
      setCardImageWidthHeight('70%', '80%');
      btnStart.style.display = 'none';
    }
  });
}

function cardsFieldsGameListen(sortingSounds: HTMLAudioElement[]) {
  let currentAudio = sortingSounds[sortingSounds.length - 1];
  const CARDS_FIELD = <HTMLElement>document.getElementById('cards-field');
  const btnRepeat = <HTMLButtonElement>document.getElementById('btn-repeat');
  const correctSound = <HTMLAudioElement>document.getElementById('correct-audio');
  const errorSound = <HTMLAudioElement>document.getElementById('error-audio');
  const successSound = <HTMLAudioElement>document.getElementById('success-audio');
  const loseSound = <HTMLAudioElement>document.getElementById('lose-audio');
  const rating = <HTMLElement>document.getElementById('rating');
  let badStarsCounter = 0;
  btnRepeat.style.display = 'block';
  btnRepeat.addEventListener('click', () => {
    currentAudio.currentTime = 0;
    currentAudio.play();
  });
  CARDS_FIELD.addEventListener('click', (event) => {
    if ((<Element>event.target).classList.contains('card-block')) {
      const selectedCardID = (<Element>event.target).id.split('-')[0];
      const currentCard = <HTMLElement>document.getElementById(`${selectedCardID}-block`);
      const cardAudio = <HTMLAudioElement>document.getElementById(`${selectedCardID}-audio`);
      if (cardAudio === currentAudio) {
        sortingSounds.pop();
        correctSound.currentTime = 0;
        correctSound.play();
        const starGood = new RatingStar('star');
        rating.appendChild(starGood.element);
        currentAudio = sortingSounds[sortingSounds.length - 1];
        currentCard.setAttribute('class', 'card-block-inactive');
        currentCard.style.backgroundColor = 'green';
        setTimeout(() => {
          currentAudio.currentTime = 0;
          currentAudio.play();
        }, 1000);
      } else {
        errorSound.currentTime = 0;
        errorSound.play();
        const starBad = new RatingStar('white-star');
        rating.appendChild(starBad.element);
        badStarsCounter++;
        currentCard.style.backgroundColor = 'red';
        currentCard.style.opacity = '0.4';
        setTimeout(() => {
          currentCard.style.backgroundColor = 'transparent';
        }, 1000);
      }
    }
    if (sortingSounds.length === 0) {
      const winImage = <HTMLImageElement>document.getElementById('win-image');
      const loseImage = <HTMLImageElement>document.getElementById('lose-image');
      CARDS_FIELD.style.display = 'none';
      btnRepeat.style.display = 'none';
      rating.style.display = 'none';
      if (badStarsCounter === 0) {
        winImage.style.display = 'block';
        successSound.currentTime = 0;
        successSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        const message = <HTMLElement>document.getElementById('message');
        loseImage.style.display = 'block';
        loseSound.currentTime = 0;
        loseSound.play();
        message.innerHTML = `
          <p style="font-size: 35px; font-weight: 500; text-align: center;">${badStarsCounter} errors</p>
        `;
        setTimeout(() => {
          window.location.reload();
        }, 7000);
      }
    }
  });
}

export function startGame(): void {
  const btnStart = <HTMLButtonElement>document.getElementById('btn-start');
  const sounds = document.querySelectorAll('.sounds');
  const sortingSounds: HTMLAudioElement[] = [];

  for (let i = 0; i < sounds.length; i++) {
    sortingSounds[i] = <HTMLAudioElement>sounds[i];
  }

  sortingSounds.sort(() => Math.random() - 0.5);

  btnStart.addEventListener('click', () => {
    btnStart.style.display = 'none';
    const startAudio = sortingSounds[sortingSounds.length - 1];
    startAudio.currentTime = 0;
    startAudio.play();
    cardsFieldsGameListen(sortingSounds);
  });
}
