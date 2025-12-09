import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";
import "./styles/App.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Пройти курс React",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      text: "Зробити домашнє завдання",
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ]);
  const [filter, setFilter] = useState("all");

  const completedTodos = todos.filter((todo) => !todo.completed);

  const generateId = () => Date.now() + Math.random();
  // Додавання нового завдання
  const addTodo = (text: string) => {
    const newTodo = {
      id: generateId(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Перемикання статусу завдання
  const toggleTodo = (id: number) => {
    const changeCompleteStatus = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(changeCompleteStatus);
  };

  // Видалення завдання
  const deleteTodo = (id: number) => {
    const removeTodo = todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    setTodos(removeTodo);
  };

  // Очищення виконаних завдань
  const clearCompleted = () => {
    setTodos(completedTodos);
  };

  // Фільтрація завдань
  const getFilteredTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    switch (filter) {
      case "active":
        return activeTodos;
      case "completed":
        return completedTodos;
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <div className="container">
        <h1>📝 My Todo List</h1>

        <TodoForm onAddTodo={addTodo} />

        <TodoFilters filter={filter} onChangeFilter={setFilter} />

        <TodoStats todos={todos} />

        <TodoList
          todoItems={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {completedTodos && (
          <button onClick={clearCompleted}>
            ❌ Видалити виконанні завдання
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
