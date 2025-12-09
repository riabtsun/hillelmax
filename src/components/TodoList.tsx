import TodoItem from "./TodoItem.tsx";
import type { TodoType } from "../App.tsx";

type TodoListProps = {
  todoItems: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todoItems, onToggle, onDelete }: TodoListProps) => {
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
            />
          );
        })}
      </li>
    </ul>
  );
};

export default TodoList;
