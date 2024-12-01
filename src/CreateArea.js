import react, { useState } from "react";
export default function CreateArea(props) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  function handleChange() {
    setText(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={() => props.onAdd(text)}>Add City</button>
    </div>
  );
}
