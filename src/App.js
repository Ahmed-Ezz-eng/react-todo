import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import FormComp from './components/form/FormComp';

const App = () => {
  return (
    <Stack className="col-md-8 mx-auto mt-4 bg-light p-4">
      <Header />
      <FormComp />
      <Todos />
    </Stack>
  );
};

export default App;
