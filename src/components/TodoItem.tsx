import { useContext, useState } from "react";
import type { TodoType } from "../App.tsx";
import type { KeyboardEvent, ChangeEvent } from "react";
import { ThemeContext } from "./ThemeContext.ts";

export type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const themeContext = useContext(ThemeContext);
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

  const handleToggleRedact = () => {
    setIsEditing(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    themeContext.editTodo(todo.id, e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") setIsEditing(false);
  };

  return (
    <div
      onDoubleClick={handleToggleRedact}
      className={`todo-item ${todo.completed ? "completed" : ""} ${isDeleted ? "deleted" : ""}`}
    >
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={handleToggle}
        checked={todo.completed}
      />
      {isEditing ? (
        <input
          type="text"
          value={todo.text}
          onChange={handleChange}
          onBlur={handleBlur} // Завершаем редактирование при потере фокуса
          onKeyDown={handleKeyDown} // Завершаем редактирование по Enter
          autoFocus // Автофокус на поле ввода
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

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
