// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [errorMessage, setErrorMessage] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  function handleChange(event) {
    const isInputValid = event.target.value === event.target.value.toLowerCase()

    setErrorMessage(isInputValid ? null : 'Nop nop nop!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}}>{errorMessage}</div>
      <button type="submit" disabled={!!errorMessage}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
