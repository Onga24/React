import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './features/Welcome'
import UserCard from './features/UserCard'
import UserList from './features/UserList'

function App() {
const addvar = "Suez"
const Users = [
  {name: "mohamed",age: 23, address: "Suez"},
  {name: "ahmed", age: 25, address: "Cairo"},
  {name: "ali", age: 30, address: "Alexandria"}
]
  return (
    <>
    <Welcome/>
    <UserCard name="mohamed" age={19} add={addvar} />
    <UserList Users={Users} />
      <div> hi from App component</div>
   
    </>
  )
}

export default App
