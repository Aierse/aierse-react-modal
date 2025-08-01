import React, { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  function openEvent() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openEvent}>모달 오픈 {isOpen}</button>
      </header>
      <Modal open={isOpen} onBackdropClick={openEvent}>
        <button onClick={openEvent}>close</button>
        test
      </Modal>
    </div>
  )
}

export default App
