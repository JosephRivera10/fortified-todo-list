import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { list } from "./data";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(list);
  const [isAdmin, setIsAdmin] = useState(true); // Assume this is based on user role

  const handleAddTodo = (newTodo: string) => {
    setTodos([
      ...todos,
      { id: (todos.length + 1).toString(), text: newTodo, completed: false },
    ]);
  };

  const handleToggleComplete = (id: string) => {
    const todo = todos.find((item) => item.id === id);
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !todo?.completed } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateText = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo onAdd={(newTodo) => handleAddTodo(newTodo)} />
      <TodoList
        todos={todos}
        onToggleComplete={(id) => handleToggleComplete(id)}
        onDelete={(id) => handleDelete(id)}
        onUpdateText={(id, newText) => handleUpdateText(id, newText)}
        showFirstItem={isAdmin}
      />
    </div>
  );
};

export default Todo;
