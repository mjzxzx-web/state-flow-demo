# State Flow Demo (React)

## Unidirectional Data Flow

React uses one-way data flow:
Parent → Child → Display

---

## useState (State Management)

State is created in Parent:

const [message, setMessage] = useState("Hello from Parent");

---

## Props (Data Passing)

Parent → Child:

<Child data={message} onUpdate={updateMessage} />

---

## Callback Function (Child → Parent)

Child updates Parent state:

onUpdate("Updated from Child")

---

## Shared State

Multiple Child components receive the same state from Parent.

---

## Display Component

Displays current state without modifying it.

---

## Summary

✔ useState implemented  
✔ Props used correctly  
✔ Callback function implemented  
✔ Shared state across components  
✔ Clear unidirectional data flow