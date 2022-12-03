import { Create, DeleteOutline } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button, Form, ListGroup, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  addFinished,
  deleteTodo,
  editTodo,
} from '../../../redux/reducers/todoSlice';

const Todo = ({ todo }) => {
  
  const [check, setCheck] = useState(todo.isFinished);
  const [mode, setMode] = useState('edit');
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = () => {
    setCheck(!check);
    dispatch(
      addFinished({
        todo,
        check: !check,
      })
    );
  };

  const handleDelete = (name) => {
    dispatch(deleteTodo(name));
  };

  const handleEdit = (todo) => {
    if (mode === 'edit') {
      setEdit((prev) => !prev);
      setMode('update');
    } else {
      if (newValue !== '') {
        dispatch(
          editTodo({
            todo,
            value: newValue,
          })
        );
      }

      setNewValue('');
    }
  };

  return (
    <ListGroup.Item
      className="my-2"
      action
      variant="secondary"
    >
      <Stack direction='horizontal' className={mode === "update" && "mb-3"}>
        <Form.Group>
          <Form.Check
            className="d-inline-block me-2"
            type="checkbox"
            checked={check}
            onChange={handleChange}
            id={todo.title}
          />
          <label
            style={{
              textDecoration: check && 'line-through',
              cursor: 'pointer',
            }}
            htmlFor={todo.title}
          >
            {todo.title}
          </label>
        </Form.Group>
        <Button
          variant="success"
          onClick={() => handleEdit(todo)}
          className="ms-auto me-3"
        >
          <Create /> {edit ? 'Update' : 'Edit'}
        </Button>
        <Button variant="danger" onClick={() => handleDelete(todo.title)}>
          <DeleteOutline />
          Delete
        </Button>
      </Stack>
      {edit && (
        <Form.Group className="d-block" controlId="exampleForm.ControlInput1">
          <Form.Control
            placeholder="Enter todo here"
            aria-label="Enter todo here"
            onChange={(e) => setNewValue(e.target.value)}
            defaultValue={todo.title}
          />
        </Form.Group>
      )}
    </ListGroup.Item>
  );
};

export default Todo;
