import { useState } from "react";
import type { TodoType } from "../App.tsx";

export type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    const confirmDelete = confirm(
      `Ви впевнені, що хочете видалити завдання ${todo.text}?`,
    );
    if (confirmDelete) {
      setIsDeleted(true);
      setTimeout(() => onDelete(todo.id), 500);
    }
  };

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""} ${isDeleted ? "deleted" : ""}`}
    >
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={handleToggle}
        checked={todo.completed}
      />
      <span className="todo-text">{todo.text}</span>
      {todo.completed && "✔"}
      <button className="delete-button" onClick={handleDelete}>
        ✕
      </button>
      <p className="created-date">
        Створено: {todo.createdAt.substring(0, 10)}
      </p>
    </div>
  );
}

export default TodoItem;
