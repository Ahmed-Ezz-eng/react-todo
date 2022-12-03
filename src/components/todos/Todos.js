import { DeleteOutline } from '@mui/icons-material';
import React, { useState } from 'react';
import { Stack, Form, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearTodos,
  getFinished,
  getTodos,
} from '../../redux/reducers/todoSlice';
import Todo from './todo/Todo';

const Todos = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoSlice);
  const filteredTodos = todos.filter((el) =>
    searchValue === '' ? el : el.title.includes(searchValue.toLowerCase()) && el
  );

  const handleClear = () => {
    dispatch(clearTodos());
  };

  const handleFinish = () => {
    dispatch(getFinished());
  };

  const handleAll = () => {
    if (todos.length > 0) {
      dispatch(getTodos());
    }
  };

  return (
    <Stack className="bg-light">
      {
        todos.length > 0 && (<Stack direction="horizontal" gap={3}>
        <Form.Label htmlFor="inputPassword5">Search</Form.Label>
        <Form.Control
          type="search"
          aria-describedby="search input"
          placeholder="search for todo"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={handleAll}>All</Button>
        <Button variant="success" onClick={handleFinish}>
          Finished
        </Button>
        <Button
          variant="danger"
          onClick={handleClear}
          style={{ width: '140px' }}
        >
          <DeleteOutline /> Clear
        </Button>
      </Stack>
  )}
      <ListGroup className="mt-4">
        {filteredTodos.map((ele) => (
          <Todo
            todo={ele}
            key={ele.title}
            searchValue={searchValue.toLowerCase()}
          />
        ))}
      </ListGroup>
    </Stack>
  );
};

export default Todos;
