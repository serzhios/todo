import React, {Component} from 'react'
import { useState } from 'react'
// import {nanoid} from 'nanoid'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import './App.css'
import {useLocalStorage} from './useLocalStorage'
function id() {
  nanoid(10)
}



function App(){
  const [ todos, setTodos] = useLocalStorage('newItem')
  // const [todos, setTodos] = useState([])
  // const [checked, setChecked] = useState(true)
  


  const addTask = (value) => {
if(value) {
  const newItem = {
    id:Math.random().toString(36).substring(2,9),
    task:value,
    complete: false,
    
  }
  
  setTodos([...todos, newItem])
}


  }

  
  

  const removeTask = (id) => {
setTodos([...todos.filter((todo) =>todo.id !== id)])
  }
  
  const deleteTask = (index) => {
    setTodos([...todos].splice(index,0))
  }

  

  const handleToggle  = (id) => {
    setTodos([...todos.map((task) =>
  task.id == id ? {...task, complete: !task.complete} : {...task})])
  }

  


const list =   todos.map((todo) =>{ 
  return (<div>

    <TodoItem
    todo={todo}
    // btnAst={btnAst}
    key={todo.id}
    toggleTask={handleToggle }
    removeTask={removeTask}
  />
  
  </div>

)

})

  return <div className='App'>
      <h3 className='todo'>TODO</h3>
      
  <TodoForm addTask={addTask} />
{list}
  {/* {todos.map((todo) =>{ 
    return (<>

      <TodoItem
      todo={todo}
      // btnAst={btnAst}
      key={todo.id}
      toggleTask={handleToggle }
      removeTask={removeTask}
    />
   
    </>
 
  )
  })} */}

  
  <button 
onClick={deleteTask}
 className= {{setTodos}  ? 'btn-delete' : 'none'}

  >delete all
 </button>

 
      </div>
}


 
 


  
    
  


export default App