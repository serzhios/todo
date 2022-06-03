// import TodoForm from './TodoForm'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import {useState} from 'react'
// import TodoItem from './TodoItem'
import {useLocalStorage} from './useLocalStorage'

function id() {
  nanoid(10)
}
const  TodoItem =({todo, toggleTask, removeTask})=> {
  // const [ value, setValue] = useLocalStorage('value', '')
    // const [checked, setChecked] = useState(false)
    const [checked, setChecked] = useLocalStorage("checked", false);

   
    function handleChange(e) {
  
     setChecked(!checked)
     
    }
    
  
return <div key={id() + todo.key} className="item-todo">
 <input
      className='item-input'
           type='checkbox'
      checked={checked}
      onChange={handleChange}
      toggleTask={checked ? "item-text strike" : "item-text"}
      />
<div

     
   
        onClick={() => toggleTask(todo.id)}
        className={checked ? "item-text strike" : "item-text"}
        
      >
     
        {todo.task}
      </div>
    <div className='item-delete'
    onClick={() => removeTask(todo.id)}>
X
    </div>
    
</div>
}

export default TodoItem