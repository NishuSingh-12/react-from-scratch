function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li onClick={onToggle} style={{ cursor: "pointer" }}>
      {todo.done ? "☑️ " : ""}
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
