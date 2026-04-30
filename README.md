# State Flow Demo (React)

## 1. Unidirectional Data Flow

React follows one-way data flow:
Parent → Child → Display

- Parent holds the state
- Data is passed down using props
- Updates are sent back using callback functions

---

## 2. State Management

State is created in Parent component:

const [message, setMessage] = useState("Hello from Parent");

This state controls all child components.

---

## 3. Props Passing

Parent passes data to children:

<Child data={message} onUpdate={updateMessage} />

Child receives:

function Child({ data, onUpdate })

---

## 4. Child to Parent Communication

Child updates parent state using:

onUpdate("Updated message")

This triggers re-render in all components.

---

## 5. Shared State

Multiple Child components use the same state from Parent.

All components update when state changes.

---

## 6. Display Component

Display component is used only for rendering state.

It does not modify state.

---

## 7. Debugging

console.log() is used in Parent component to track state updates.

React DevTools can also be used to observe state changes.

---

## 8. Prop Drilling

Prop drilling happens when data is passed through many components.

Solution:
- Context API
- State management libraries (Redux)

---

## Conclusion

✔ useState implemented  
✔ Props used for data flow  
✔ Callback used for updates  
✔ Shared state across components  
✔ Demonstrates React unidirectional data flow  