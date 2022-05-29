import * as React from "react";
import { Todo } from "shared/models/Todo";

export interface TodoListProps {
  todos: Todo[];
  deleteItem: (value: string) => void;
}

export default function TodoList({ todos, deleteItem }: TodoListProps) {
  const handleClick = (item: Todo) => {
    deleteItem(item.id);
  }

  return (
    <ul>
      {todos.map((item: Todo) => (
        <li key={item.id} onClick={() => handleClick(item)}>{item.name}</li>
      ))}
    </ul>
  );
}
