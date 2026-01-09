import { useDispatch, useSelector } from "react-redux";
import { addTodo as addTodoAction, removeTodo as removeTodoAction } from "./todosSlice";

export const useTodoStore = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const removeTodo = (id) => dispatch(removeTodoAction(id));

  return { todos, addTodo, removeTodo };
};

export default useTodoStore;
