let player = {
    name: "Simon",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

/* function addChips() {
    player.chips += 10
    playerEl.textContent = player.name + ": $" + player.chips
}

function removeChips() {
    player.chips -= 10
    playerEl.textContent = player.name + ": $" + player.chips
} */

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (player.chips >= 10) {
        hasBlackJack = false
        isAlive = true
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    } else {
        message = "You don't have enough chips to play Blackjack!"
        messageEl.textContent = message
        cardsEl.textContent = "Cards: ";
        sumEl.textContent = "Sum: ";
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack and have won 10 chips!"
        player.chips += 10;
        playerEl.textContent = player.name + ": $" + player.chips
        hasBlackJack = true
    }
    else {
        isAlive = false
        message = "You're out of the game and have lost 10 chips!"
        player.chips -= 10;
        playerEl.textContent = player.name + ": $" + player.chips
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}