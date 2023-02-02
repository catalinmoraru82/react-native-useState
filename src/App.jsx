import React, { useState } from 'react'

function App() {

  const[count, setCount] = useState(0)

  const [list, setList] = useState(['name1', 'name2'])
  const [name, setName] = useState('')

  function increaseCount() {
    setCount(prevState => {
      return prevState + 1
    })
  }

  function getName(e) {
    setName(e.target.value)
  }

  function addName() {
    setList([...list, name])
    setName('')
  }

  return (
    <>
      <button onClick={increaseCount}>Count is: {count}</button>
      <ul>
        {
          list.map(item => <li key={item}>{item}</li>)
        }
      </ul>
      <input type='text' value={name} onChange={getName}/>
      <button onClick={addName}>Add name</button>
    </>
  )
}

export default App
