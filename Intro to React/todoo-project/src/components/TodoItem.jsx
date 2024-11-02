import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete clicked for ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    ));
  }

  const completed = item.done ? styles.completed : "" 
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={completed} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button className={styles.delete} onClick={() => handleDelete(item)}>
            Delete
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
