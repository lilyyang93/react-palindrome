import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState("")
  const userInput = useRef(null)

  function handleClick() {
    setWord(userInput.current.value)
  }

  function checkPalindrome() {
    let lowercaseWord = word.toLowerCase()
    let filteredWord = lowercaseWord.replace(/[\W_]/g,"")//.replace(/[^a-zA-Z]/g,"")
    let reversedWord = filteredWord.split("").reverse().join("")
    return (filteredWord == reversedWord)
  }

  return (
    <div className="App">
      <h2>Is this a palidrome?</h2>
      <input ref={userInput} type="text" id="input-word" placeholder="enter a word" />
      <button onClick={handleClick}>submit</button>
      <p>{word} {checkPalindrome() ? "is" : "is not"} a palindrome</p>
      
    </div>
  )
}

export default App
