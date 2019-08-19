import React, {useState} from 'react';
// import { addData } from '../actions/SmurfActions';


const SmurfForm = ({ addSmurf }) => {   //to do form can remain dumb and use useState; it just needs the prop "addTodo"
  const [item, setItem] = useState("");

  const handleChange = event => setItem(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    addSmurf(item);
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="item" 
             placeholder="Add Smurf's Name" 
             value={item.name}
             onChange={handleChange} />
      <input type="text"
             name="age" 
             placeholder="Add Smurf's Age" 
             value={item.age}
             onChange={handleChange} />
        <input type="text"
             name="height" 
             placeholder="Add Smurf's Height" 
             value={item.height}
             onChange={handleChange} />
      <button onClick={addSmurf} type="submit">Add a New Smurf</button>
    </form>
  )
};

export default SmurfForm;



// OLD PROJ CODE FROM TO-DO LIST App
// import React, {useState} from 'react';

// const TodoForm = ({ addTodo, clearCompleted }) => {   //to do form can remain dumb and use useState; it just needs the prop "addTodo"
//   const [item, setItem] = useState("");

//   const handleChange = event => setItem(event.target.value);
//   const handleSubmit = event => {
//     event.preventDefault();
//     addTodo(item);
//     setItem("");
//   }
//   const handleClear = event => {
//     event.preventDefault();
//     clearCompleted();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text"
//              name="item" 
//              placeholder="todo" 
//              value={item}
//              onChange={handleChange} />
//       <button type="submit">Add Todo</button>
//       <button onClick={handleClear}>Clear Completed</button>
//     </form>
//   )
// };

// export default TodoForm;
