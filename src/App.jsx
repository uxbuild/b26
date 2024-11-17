import './App.css'
import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';
// import SelectedContact from './components/SelectedContact'

function App() {
  // const [count, setCount] = useState(0)
const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <h1>Contact List</h1>
      {selectedContactId ? (<SelectedContact selectedContactId={selectedContactId}  />): <ContactList setSelectedContactId={setSelectedContactId} /> }
    </>
  )
}

export default App
