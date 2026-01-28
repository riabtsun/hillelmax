// initialState
import type { TodoType } from "../App.tsx";

export const initialState: Array<TodoType> = [
  {
    id: 1,
    text: "Вивчити useReducer",
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    text: "Написати редьюсер",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    text: "Пройти курс React",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    text: "Зробити домашнє завдання",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

const generateId = () => Date.now() + Math.random();

export const tasksReducer = (state: Array<TodoType>, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: generateId(),
          text: action.payload.text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ];
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case "CLEAR_COMPLETED": {
      return state.filter((todo) => !todo.completed);
    }
    case "EDIT_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    }
    default:
      return state;
  }
};
