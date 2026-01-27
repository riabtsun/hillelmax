import TodoItem from "./TodoItem.tsx";
import { type TodoType } from "../App.tsx";

type TodoListProps = {
  todoItems: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  setTodos: (updater: (todos: Array<TodoType>) => Array<TodoType>) => void;
};

const TodoList = ({
  todoItems,
  onToggle,
  onDelete,
  setTodos,
}: TodoListProps) => {
  if (!todoItems.length) {
    return <h5>Список завдань порожній.</h5>;
  }

  return (
    <ul className="todo-list">
      <li>
        {todoItems.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              todo={todoItem}
              onToggle={onToggle}
              onDelete={onDelete}
              setTodos={setTodos}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default TodoList;
