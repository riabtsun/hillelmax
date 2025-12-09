import { useState } from "react";
import type { FormEvent } from "react";

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      onAddTodo(inputValue);
      setError("");
    } else {
      setError("Поле не може бути порожнім");
    }
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        name="todo-text"
        type="text"
        placeholder="Що потрібно зробити?"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-button">
        Додати
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TodoForm;
