import { AddCircle } from '@mui/icons-material';
import React, {  useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducers/todoSlice';


const FormComp = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState("");
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodos = (e) => {
    e.preventDefault();
    if (/([A-Za-z]\s[A-Za-z])+/.test(inputValue)) {
      dispatch(addTodo({ title: inputValue.toLowerCase(), isFinished: false}));
    } else {
      setIsValid("enter value in pattern [A-Za-z] space [A-Za-z]")
    }
    setInputValue("")
  };

  return (
    <Form className="my-3" onSubmit={addTodos}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter todo here"
          aria-label="Enter todo here"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
        type="submit"
        variant="success"
        id="button-addon2"
        >
        <AddCircle className="mx-1" />
        Add todo
        </Button>
        </InputGroup>
        {!inputValue && (
          <Form.Text className="text-muted">
            {isValid}
          </Form.Text>
        )}
    </Form>
  );
};

export default FormComp;
