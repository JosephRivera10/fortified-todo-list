import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateText: (id: string, newText: string) => void;
  hideFirstItem: boolean;
}

const TodoList = ({
  todos,
  onToggleComplete,
  onDelete,
  onUpdateText,
  hideFirstItem,
}: Props) => {
  // Conditionally remove the first item if hideFirstItem is true
  const visibleTodos = hideFirstItem ? todos.slice(1) : todos;

  return (
    <ul>
      {visibleTodos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdateText={onUpdateText}
        />
      ))}
    </ul>
  );
};

export default TodoList;
