import './TodoForm.css'
import React, {useState, useEffect} from 'react'



const TodoForm= ({addTask}) => {
  
    const [ value, setValue] = useState('')
    const [checked, setChecked] = useState(true)
  

   
   function handleChange(e) {
    setValue(e.target.value)
    setChecked(!checked)
   }

   function handleSubmit(e) {
       e.preventDefault()
       console.log(value)
       addTask(value)
      
       setValue('')
   }
   return <>

  
   <form 
    className="todo-form"
    onSubmit={handleSubmit}
    >
    
        <input
      
            value={value}
            onChange={handleChange}
           
            type='text'
        />
        <button 
        className='btn-add'
    
        >+</button>
    </form>


    </>
    
}

export default TodoForm  