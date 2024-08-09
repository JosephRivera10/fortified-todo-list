import React, { useState } from "react";

interface Props {
  onAdd: (todo: string) => void;
}

const AddTodo = ({ onAdd }: Props) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
