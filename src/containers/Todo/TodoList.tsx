import React, { useState } from "react";

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
  showFirstItem: boolean;
}

const TodoList = ({
  todos,
  onToggleComplete,
  onDelete,
  onUpdateText,
  showFirstItem,
}: Props) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const handleEditClick = (item: Todo) => {
    setEditingId(item.id);
    setEditingText(item.text);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.target.value);
  };

  const handleSave = (id: string) => {
    onUpdateText(id, editingText);
    setEditingId(null);
  };

  const renderTodoItem = (item: Todo) => (
    <li key={item.id}>
      {editingId === item.id ? (
        <input
          type="text"
          value={editingText}
          onChange={handleTextChange}
          onBlur={() => handleSave(item.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave(item.id);
          }}
          autoFocus
        />
      ) : (
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          {item.text}
        </span>
      )}
      <button onClick={() => onToggleComplete(item.id)}>
        {item.completed ? "Undo" : "Completed"}
      </button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => handleEditClick(item)}>Edit</button>
    </li>
  );

  const todosToRender = showFirstItem ? todos : todos.slice(1);

  return <div>{todosToRender.map(renderTodoItem)}</div>;
};

export default TodoList;
