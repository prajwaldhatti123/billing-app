import React from 'react'
import style from './Buttons.module.css'

export default function Buttons(props) {
   const key = props.list;
   const css = `btn btn-outline-dark ${style.buttons}`
   
  return (
    <>
     {/* <div className={style.buttons}>
        {
            key.map((item) =>(
                <button className={css}>{item}</button>
            ))
        }
     </div> */}
     <div class="container">
  <div class="row">
    <div class="col">
      <button className={css}>7</button>
    </div>
    <div class="col">
     <button className={css}>8</button>
    </div>
    <div class="col">
     <button className={css}>9</button>
    </div>
    <div class="col">
     <button className={css}>x</button>
    </div>
  </div>
   <div class="row">
    <div class="col">
     <button className={css}>4</button>
    </div>
    <div class="col">
     <button className={css}>5</button>
    </div>
    <div class="col">
    <button className={css}>6</button>
    </div>
    <div class="col">
      <button className={css}>-</button>
    </div>
  </div>
   <div class="row">
    <div class="col">
     <button className={css}>1</button>
    </div>
    <div class="col">
     <button className={css}>2</button>
    </div>
    <div class="col">
     <button className={css}>3</button>
    </div>
    <div class="col">
     <button className={css}>+</button>
    </div>
  </div>
  </div>
  <div className='row'>
    <div className='col'>
         <button className={css}>/</button>
    </div>
     <div className='col'>
         <button className={css}>C</button>
    </div>
  </div>
    </>
  )
}
