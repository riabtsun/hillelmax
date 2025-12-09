import type { TodoType } from "../App.tsx";

type TodoStatsProps = {
  todos: Array<TodoType>;
};

const TodoStats = ({ todos }: TodoStatsProps) => {
  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  return (
    <div>
      Загальна статистика:
      <p className="todos-value">✅ Виконано задач: {completedTodos}</p>
      <p className="todos-value">📝 Виконується задач: {activeTodos}</p>
      <p className="todos-value">📖 Всього задач: {totalTodos}</p>
    </div>
  );
};

export default TodoStats;
