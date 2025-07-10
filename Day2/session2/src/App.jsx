import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClick from './components/ButtonClick'
import Counter from './components/Counter'
import SimpleForm from './components/SimpleForm'
import LifitingStateUp from './components/LifitingStateUp'

function App() {

  return (
    <>
    <Counter />
    <br />
    <SimpleForm />
    <br />
     <ButtonClick />
     <br />
      <LifitingStateUp/>

    </>
  )
}

export default App
