import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  // STATE MANAGEMENT (Requirement: useState)
  const [message, setMessage] = useState("Hello from Parent");

  // CALLBACK FUNCTION (Child → Parent)
  const updateMessage = (newMessage) => {
    console.log("Updating state:", newMessage);
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      {/* MULTIPLE CHILD COMPONENTS (Shared State) */}
      <Child label="Child 1" data={message} onUpdate={updateMessage} />
      <Child label="Child 2" data={message} onUpdate={updateMessage} />

      {/* DISPLAY COMPONENT */}
      <Display message={message} />
    </div>
  );
}

export default Parent;