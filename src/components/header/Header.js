import React from 'react';
import { useSelector } from 'react-redux';


const Header = () => {
  const {todos} = useSelector(state => state.todoSlice);
  return (
    <header className="h2 text-center p-1 bg-secondary text-light">
        Todos ( {todos.length} )
    </header>
  )
}

export default Header