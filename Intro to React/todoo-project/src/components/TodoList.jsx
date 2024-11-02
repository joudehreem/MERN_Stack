import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
const sortTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {sortTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
