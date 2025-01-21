import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FunctionalComponents from "./components/FunctionalComponents.jsx";
import ClassComponents from "./components/ClassComponents.jsx";
import PropsExemple from "./components/PropsExemple.jsx";

function App() {


  return (
    <>
        <h1>Hello worlr REACT</h1>
        <FunctionalComponents />
        <ClassComponents />
        <PropsExemple nome = "José Malcher" anos = {40}/>
    </>
  )
}

export default App
