document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'adventure',
      img: 'img/adventure.png',
    },
    {
      name: 'diamond',
      img: 'img/diamond.png',
    },
    {
      name: 'pokeball',
      img: 'img/pokeball.png',
    },
    {
      name: 'fire',
      img: 'img/fire.png',
    },
    {
      name: 'hearth',
      img: 'img/hearth.png',
    },
    {
      name: 'moon',
      img: 'img/moon.png',
    },
    {
      name: 'adventure',
      img: 'img/adventure.png',
    },
    {
      name: 'diamond',
      img: 'img/diamond.png',
    },
    {
      name: 'pokeball',
      img: 'img/pokeball.png',
    },
    {
      name: 'fire',
      img: 'img/fire.png',
    },
    {
      name: 'hearth',
      img: 'img/hearth.png',
    },
    {
      name: 'moon',
      img: 'img/moon.png',
    },
  ]
  cardArray.sort(() => {
    return 0.5 - Math.random()
  })

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'img/blank.png')
      card.setAttribute('class', 'images')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }
  /////////matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      ///alert('Znalazłeś Pasującą Kartę')
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipcard)
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].removeEventListener('click', flipcard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      //alert('Spróbuj Ponownie')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length + ' / 6'
    if (cardsWon.length === 6) {
      resultDisplay.textContent = 'Gratuluję! Znalazłeś wszystkie karty'
    }
  }

  //////////card flip
  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 200)
    }
  }

  createBoard()
})
