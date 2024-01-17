import React from 'react'
import Todo from './Todo'
import list from './InputData'

export default function TodoList() {
    // const list = [
    //     { todo: "office", date: "12-04-2022" },
    //     { todo: "hotel" , date : "13-04-2022"},
    //     { todo: "bike ride" , date : "14-04-2022"}
    // ];
  return (
    <div>
      {/* <Todo 
      title={list[0].todo} 
      date={list[0].date}/>
      <Todo 
      title={list[1].todo} 
      date={list[1].date}/>
      <Todo 
      title={list[2].todo} 
      date={list[2].date}/> */}
      {
        list.map((item)=>(
           <Todo
           key = {Math.random()} 
           title = {item.todo}
           date = {item.date}
           ></Todo>
        ))
      }
    </div>
  )
}
