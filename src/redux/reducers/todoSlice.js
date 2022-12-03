import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    finishedTodos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    addFinished: (state, action) => {
      const { todo, check } = action.payload;
      state.todos.map((ele) =>
        ele.title === todo.title ? (ele.isFinished = check) : ele
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.title !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    editTodo: (state, action) => {
      const { todo, value } = action.payload;
      state.todos.map((el) =>
        el.title === todo.title ? (el.title = value) : el
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    clearTodos: (state, _) => {
      state.todos = [];
      localStorage.clear();
    },

    getFinished: (state, _) => {
      let isComplete = state.todos.some((el) => el.isFinished);
      if (isComplete) {
        state.todos = state.todos.filter((el) => el.isFinished);
      }
    },

    getTodos: (state, _) => {
      state.todos = JSON.parse(localStorage.getItem('todos'));
    },
  },
});

export const {
  addTodo,
  addFinished,
  deleteTodo,
  editTodo,
  clearTodos,
  getFinished,
  getTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
