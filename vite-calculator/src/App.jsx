import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './App.module.css'
import Buttons from './components/Buttons'

export default function App() {
  const keypad = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '+' , '-',
    '/' , 'C' , ".",
    '*'
  ]
  return (
  
      <div className={style.calculator}>
      <input className ={style.input}type="text" />
     <Buttons list = {keypad}/>
    </div>

  )
}
