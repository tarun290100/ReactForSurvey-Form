import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <div className='mb-10'>
      <h5 className=''>{todo.title}</h5>
      <h6>{todo.desc}</h6>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    
  )
}
