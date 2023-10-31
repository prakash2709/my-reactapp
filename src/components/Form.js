// import React, {useReducer} from 'react';
// import PropTypes from 'prop-types';
// import { v4 as uuid } from 'uuid';

// function Form (props) {
    
//     const init = {taskTitle:'', user:''}

//     const reducer = (state, action) => {
//         switch(action.type) {
//         case 'reset':
//             return init;
//         case 'change':
//             /*eslint-disable */
//             const {name, value} = action.element;
//             /*eslint-enable */
//             return {...state, [name]:value};
//         default:
//             return state;
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, init)
//     const {taskTitle, user} = state
   
//     const {getNewTask} = props

//     const formValidation = errors => {

//         if(taskTitle.length < 2) errors.push('Task name is required')
//         if(user.length < 2) errors.push('User name is required')
//     }

//     const addTask = e => {
//         e.preventDefault()

//         const newTask = {
//             id: uuid(),
//             title: taskTitle,
//             user: user,
//             columnId: 1,
//         }
//         const errors=[]
//         formValidation(errors)

//         if(errors.length === 0) {
//             getNewTask(newTask)
//             dispatch({type:'reset'})
//         } else {
//             alert(errors.join(",\n "))
//         }
//     }

//     return (
//         <form className='form' onSubmit={addTask}>
//             <div className='form__container'>
//             <label for="languages"></label>
//             <select name="" id="languages">
//             <option value="">Display</option>
//                 </select>
                
                
//                 <label> <input name='taskTitle' value={taskTitle} type='text' onChange={e => dispatch({type: 'change', element: e.target})} placeholder='task title...' required/></label>
//                 <label> <input name='user'  value={user} type='text' onChange={e => dispatch({type: 'change', element: e.target})}  placeholder='user name...' required pattern= '^[a-zA-Z –-]+$'/></label>
//                 <input type="submit" value="add" className='form__submit' />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button className='form__submit'>Display By Status</button>
//                 <button className='form__submit'>Display By User</button>
//                 <button className='form__submit'>Display By Priority</button><br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button className='form__submit'>Display User</button>
//                 <button className='form__submit'>Display User</button>
//             </div>
//         </form>
//     )
// }

// Form.propTypes = {
//     getNewTask: PropTypes.func
// }

// export default Form



import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

function Form(props) {
  const init = { taskTitle: '', user: '' };
  const [tasks, setTasks] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'reset':
        return init;
      case 'change':
        const { name, value } = action.element;
        return { ...state, [name]: value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init);
  const { taskTitle, user } = state;

  const { getNewTask } = props;

  const formValidation = (errors) => {
    if (taskTitle.length < 2) errors.push('Task name is required');
    if (user.length < 2) errors.push('User name is required');
  };

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: taskTitle,
      user: user,
      columnId: 1,
      priority: 0, // default priority level
    };
    const errors = [];
    formValidation(errors);

    if (errors.length === 0) {
      getNewTask(newTask);
      setTasks([...tasks, newTask]);
      dispatch({ type: 'reset' });
    } else {
      alert(errors.join(",\n "));
    }
  };

  const displayKanbanBoard = (selectedGroup) => {
    // Logic to display Kanban board based on selectedGroup
    // Populating tasks dynamically based on the selectedGroup
    // You'll need to filter tasks based on selectedGroup (Status or Priority)
    // Update the columns in the Kanban board based on the chosen grouping option

    // This is just an example logic, you'll need to adjust as per your API response
    let filteredTasks = tasks;
    if (selectedGroup === 'status') {
      // Filter tasks by status
      // For demonstration, filtering tasks by user
      filteredTasks = tasks.filter(task => task.user === 'SomeUser');
    } else if (selectedGroup === 'priority') {
      // Filter tasks by priority level
      // For demonstration, filtering tasks by priority (high priority)
      filteredTasks = tasks.filter(task => task.priority >= 3);
    }

    // Render the Kanban board based on the filtered tasks
    // You'll need to map and render the tasks within respective columns
    console.log(filteredTasks); // Use this filtered data to update Kanban board
  };

  return (
    <form className='form' onSubmit={addTask}>
      <div className='form__container'>
        <select id="groupingOptions" onChange={(e) => displayKanbanBoard(e.target.value)}>
          <option value="">Display</option>
          <option value="">Status</option>
          <option value="priority">Priority</option>
        </select>

        <label> <input name='taskTitle' value={taskTitle} type='text' onChange={e => dispatch({ type: 'change', element: e.target })} placeholder='task title...' required /></label>
        <label> <input name='user' value={user} type='text' onChange={e => dispatch({ type: 'change', element: e.target })} placeholder='user name...' required pattern='^[a-zA-Z –-]+$' /></label>
        <input type="submit" value="add" className='form__submit' />
      </div>
    </form>
  );
}

Form.propTypes = {
  getNewTask: PropTypes.func,
};

export default Form;


