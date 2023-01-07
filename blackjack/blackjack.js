let player = {//player info ke liye object
    name: "Murari Pandey",
    chips: 500
    // ,
    // func: function(){
    //     console.log("creating function in object!")
    // }
}
let cards = []//creating array for storing cards number !  
let hasblackjack = false//to check is the blackjack happens or not 
let isalive = true//to check the condition is alive or not 
let sum = 0//to track sum of cards
let start = false//to restrict the startgame button after the blackjack happens
let money = true//to check whether the particepet has enough money or not !
let messege = "Welcome! To The Blackjake Game"//string for messege paragraph
let cards_msg = ""//string for cards paragraph
// let sum_el=document.querySelector("#sum")
//creating objects in JS
let player_info = document.getElementById("player")//dom for player paragraph
player_info.textContent = player.name + ": $" + player.chips
let sum_el = document.getElementById("sum")//DOM for sum paragraph
let mess_el = document.getElementById("mess")//dom for mess paragraph
let card_el = document.getElementById("cards")//dom for cards paragraph
mess_el.textContent = messege
//Fuction for getting Random value that are rules for BlackJake game !
function getrandom() {
    let ra = Math.floor(Math.random() * 12) + 1
    if (ra === 1) {
        return 11
    }
    else if (ra > 10) {
        return 10;
    }
    else {
        return ra
    }
}
//string game as a start game button ! 
//as a rule for blackjake first picking 2 cards with random in cards array
//updating sum
//and calling rendergame() function
function startgame() {
    if (start === false && money === true) {
        isalive = true
        let x = getrandom()
        let y = getrandom()
        cards.push(x)
        cards.push(y)
        sum = x + y
        rendergame()
        start = true
        previousend = false
    }
}
// main function for the blackjack winning logic 
// if <21 new card 
// ==21 win !
//>21 loose game
//updaing message, Sum , Cards paragraph 
//alse updating money too by some win creteria ! see
function rendergame() {
    if (sum <= 20) {
        messege = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        messege = "cheer you win the game!"
        hasblackjack = true
        iswin = true
    }
    else {
        messege = "you loose the game!"
        isalive = false
    }
    mess_el.textContent = messege
    sum_el.textContent = "Sum:" + " " + sum
    cards_msg = "Cards:"
    for (let index = 0; index < cards.length; index++) {
        cards_msg += " " + cards[index]
    }
    card_el.textContent = cards_msg
    if (hasblackjack === true) {
        player.chips += 200
    }
    else if (hasblackjack === false && isalive === false) {
        player.chips -= 100
    }
    player_info.textContent = player.name + ": $" + player.chips
    if (player.chips === 0) {
        money = false
        document.getElementById("message").textContent = "Sorry! You haven't enough Money to play the game!"
    }
}
//new card function for new card
//update sum and added new card number to array ! and again calling randergame() function
function newcard() {
    if (isalive === true && hasblackjack === false) {
        let ne = getrandom()
        cards.push(ne)
        sum += ne
        rendergame()
    }
}
//new game function for resing all the things used to oringinal state
function newgame() {
        cards.length = 0
        hasblackjack = false
        isalive = false
        iswin = false
        sum = 0
        start = false
        messege = "Welcome! To The Blackjake Game"
        cards_msg = "Cards:"
        sum_el.textContent = "Sum:"
        card_el.textContent = cards_msg
        mess_el.textContent = messege
        previousend = false
}
