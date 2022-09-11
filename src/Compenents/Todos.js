import React from 'react'
import { TodosItem } from './TodosItem'

export const Todos = (props) => {
  return (
    <div className='Container'>
      <h3 className='text-center my-3'>
        Todos List
      </h3>
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo)=>{
        return <TodosItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete} />

      })}
      


    </div>
  )
}
