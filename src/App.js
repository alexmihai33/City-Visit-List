import "./styles.css";
import CreateArea from "./CreateArea";
import City from "./City";
import { useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);

  const addCities = (newCity) => {
    setCities((prevValues) => {
      return [...prevValues, newCity];
    });
  };

  function handleDelete(city_id) {
    setCities((prevCities) => {
      return prevCities.filter((_, index) => {
        return index !== city_id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Add a City to the Visit List</h1>
      <CreateArea onAdd={addCities} />
      {cities.map((name, index) => {
        return (
          <City onDelete={handleDelete} key={index} id={index} name={name} />
        );
      })}
    </div>
  );
}
