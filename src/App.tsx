import { type ChangeEvent, useReducer, useState } from "react";
import { ThemeContext } from "./components/ThemeContext.ts";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";
import ThemeButton from "./components/ThemeButton.tsx";
import { initialState, tasksReducer } from "./components/todoReducer.ts";
import "./styles/App.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");
  const completedTodos = state.filter((todo) => !todo.completed);

  // Додавання нового завдання
  const addTodo = (text: string) => {
    dispatch({
      type: "ADD_TODO",
      payload: { text },
    });
  };

  // Перемикання статусу завдання
  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  // Видалення завдання
  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  // Редагування завдання
  const editTodo = (id: number, text: string) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text } });
  };

  // Очищення виконаних завдань
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  // Фільтрація завдань
  const getFilteredTodos = () => {
    const activeTodos = state.filter((todo) => !todo.completed);
    const completedTodos = state.filter((todo) => todo.completed);
    switch (filter) {
      case "active":
        return activeTodos;
      case "completed":
        return completedTodos;
      default:
        return state;
    }
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.className = theme === "light" ? "dark-theme" : "light-theme";
  };
  const filteredTodos = getFilteredTodos();

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange, editTodo }}>
      <div className="app">
        <div className="container">
          <div>
            <ThemeButton />
          </div>
          <h1>📝 My Todo List</h1>

          <TodoForm onAddTodo={addTodo} />

          <TodoFilters filter={filter} onChangeFilter={setFilter} />

          <TodoStats todos={state} />

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
    </ThemeContext.Provider>
  );
}

export default App;
