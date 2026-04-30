import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  // STEP 4: Callback function
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <p>Message: {message}</p>

      {/* Passing callback to child */}
      <Child onUpdate={updateMessage} />
    </div>
  );
}

export default Parent;