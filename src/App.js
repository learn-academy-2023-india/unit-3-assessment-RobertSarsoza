import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) drawCard is the name of the function and the open curly brace tells that the rest of the desired actions and declarations will continue until a closing curly brace signifies the end of what is encapsulated.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]}`
    // 2) the name of the function is draw, its first objective is to call the array named rank and the values within it by interpolating (((originally I put concatenating, but checked it on chatgpt))) the values in the  array into strings (`${}). Next the math.floor method and math.random method is used. Math.floor (with Match.random inside) makes it so when Math.random gives you a random string from rank, it produces a whole number rather than a decimal. Then Match.random (still inside math.floor) is multiplied to the rank array with the .length method, which tells the code to utilize all the elements in the array. 
    // Next, suit is called and uses the exact same methods to give a random value but instead from the suit array. 
    if (hand.indexOf(draw) === -1) {
      // 3) this is the start of an else if statement, which uses the declared container (hand) with the .indexOf method and the logic of the draw function that was recently given. .indexOf(draw) says if** the hand's index that is given from the draw function is equal to -1(which it cannot, making it always false)... then leaves an open curly bracket to continue the statement
      // (((ChatGpt says my description is not entirely correct becuase -1 checks for the absense of draw in the hand array, which i think is the shorter way of saying the samething I tried to)))
      setHand([...hand, draw])
      // 4) (continuing from the if statement).. then continue the array using the draw function. 
    } else if (hand.length !== 52) {
      // 5) A closing curly signifies the end of the if statement, the else if signifies the start of a conditional. hand.length is a method that allows the hand to continue until the entire boundary is met. In this case the boundary given is that the hand CAN NOT reach 52, using !== to create a statement that is false. essentially setting a cap of 53 total uses of hand (52+0). if it hasnt reached 52 then perform the next task.((is checking if the length of the 'hand' array is not equal to 52, meaning there is still space in the hand to draw more cards. It doesn't set a cap of 53 total uses; rather, it allows drawing more cards until the hand reaches a length of 52.)))
      drawCard()
      // 6) the next task is the entire drawCard function.
    } else {
      alert("All cards have been dealt.")
      // 7) A closing curly signifies the end of the else if statement, the else signifies the start of and last conditional. If when the user has reached the limit given by the else if, a draw wont be made and instead the given message of All cards have been dealt is shown to the user. 
    }
  }
  // No need to change anything ABOVE this line ^

 const shuffle =() => {
   setHand([])

 }
  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
    )
}

export default App
