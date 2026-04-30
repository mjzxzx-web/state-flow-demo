function Child({ label, data, onUpdate }) {
  return (
    <div>
      <h3>{label}</h3>

      {/* RECEIVING PROPS */}
      <p>Message: {data}</p>

      {/* EVENT HANDLING + CALLBACK */}
      <button onClick={() => onUpdate(`Updated by ${label}`)}>
        Update Parent State
      </button>
    </div>
  );
}

export default Child;