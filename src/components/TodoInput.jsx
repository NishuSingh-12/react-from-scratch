function TodoInput({ text, setText, onAdd }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
        placeholder="Enter todo"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
