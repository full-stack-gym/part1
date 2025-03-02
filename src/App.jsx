import { useState } from 'react';

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }
  const handleSwapClick  = () => {
    setAll(allClicks.concat('S'))
    setClicks({left: clicks.right, right: clicks.left})
  }
  return (
    <>
      <div>
        <Button handleClick={handleLeftClick} text="Maya's age" />
        <Button handleClick={handleRightClick} text="Peter's age" />
        <Button handleClick={handleSwapClick} text="Swap" />
      </div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={clicks.left} />
      <Hello name="Peter" age={clicks.right} />
      <History allClicks={allClicks} />
      <Footer />
    </>
  )
}

export default App