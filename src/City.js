import react from "react";

export default function City(props) {
  return (
    <div className="city">
      <textLabel>{props.name}</textLabel>
      <button onClick={() => props.onDelete(props.id)}>X</button>
    </div>
  );
}
