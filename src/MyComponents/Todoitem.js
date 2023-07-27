import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <div className='mb-10'>
       <div>Name</div>
      <h6 className=''>{todo.name}</h6>
      <div>City</div>
      <h6>{todo.city}</h6>
      <div>Role</div>
      <h6>{todo.role}</h6>
       <div>Do you think people from all backgrounds are treated fairly at our company?</div>
      <h6>{todo.que1}</h6>
      <div>Do you agree working here, you feel that you can live a physically healthy lifestyle?</div>
      <h6>{todo.que2}</h6>
      <div>Do you think your co-workers are supportive of you when you are having a bad day at work?</div>
      <h6>{todo.que3}</h6>
      
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    
  )
}
