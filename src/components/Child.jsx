function Child({ onUpdate }) {
  return (
    <div>
      <h3>Child Component</h3>

      {/* STEP 4: Trigger parent update */}
      <button onClick={() => onUpdate("Updated from Child!")}>
        Update Parent State
      </button>
    </div>
  );
}

export default Child;