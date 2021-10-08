//sets and renders a players life count
const playerLivesCount = document.querySelector('span');
let playerLives = 10;

playerLivesCount.textContent = playerLives;


let cardData = [
  { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

const cardGenerator = () => {
  //We generate the object 

  //We need to shuffle the cards 🃏
  cardData.sort(() => Math.random() - 0.5);

  //We generate the cards ♣️
  cardData.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;

    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      //Run our flip animation
      card.classList.toggle("toggleCard");
      CheckCards(e);
    });
  });
  //
};

//restarts the game
const restart = (text) => {
  cardData.sort(() => Math.random() - 0.5);
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  //section.style.pointerEvents = 'none';
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    //sets a buffer so that the cards flip before resetting
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      faces[index].src = item.imgSrc;
      cards[index].setAttribute('name', item.name);
     // section.style.pointerEvents = 'all';
    }, 1000)
  })
  playerLives = 10;
  playerLivesCount.textContent = playerLives;
  //Shows custom message upon reset
  setTimeout(() => window.alert(text), 100)
};

//checks cards for matches
const CheckCards = (e) => {

  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  const toggleCard = document.querySelectorAll('.toggleCard');

  //logic
  if(flippedCards.length === 2) {
    if(flippedCards[0].getAttribute('name') ===
        flippedCards[1].getAttribute('name')) 
        {
          console.log('match');
          flippedCards.forEach(card => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'none';
        })
    } else {
       console.log('wrong');
       flippedCards.forEach(card => {
            card.classList.remove('flipped');
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
          });

          playerLives--;
          playerLivesCount.textContent = playerLives;
          if(playerLives === 0) {
            restart('Try Again');
          }
      }
    }
     //check for a winner
    if(toggleCard.length === 16){
      restart('You Won!!');
    }
    console.log(toggleCard)
  };
  
cardGenerator();