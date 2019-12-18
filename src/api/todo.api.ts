import axios from 'axios';


export const getTodos = () => (axios.get('http://localhost:3000/todos/')
  .then(res => {
    
    console.log(res.data);
    return res.data;
  }))

export const addTodos = (title: string) => (axios.post('http://localhost:3000/todos/', {
  title,
  completed: false
})
  .then(res => {
  
  ;
    console.log(res.data);
    return res.data;
  }))

