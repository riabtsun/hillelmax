type TodoFiltersProps = {
  filter: string;
  onChangeFilter: (filter: string) => void;
};

const TodoFilters = ({ filter, onChangeFilter }: TodoFiltersProps) => {
  const activeFilter = (newFilter: string) => {
    return filter === newFilter ? "filter-btn active" : "filter-btn";
  };
  return (
    <div className="todo-filters">
      <button
        className={activeFilter("all")}
        onClick={() => {
          onChangeFilter("all");
        }}
      >
        Всі
      </button>
      <button
        className={activeFilter("active")}
        onClick={() => {
          onChangeFilter("active");
        }}
      >
        Активні
      </button>
      <button
        className={activeFilter("completed")}
        onClick={() => {
          onChangeFilter("completed");
        }}
      >
        Виконані
      </button>
    </div>
  );
};

export default TodoFilters;
