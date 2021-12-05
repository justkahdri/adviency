import React, {
  useRef,
  useState,
  FormEventHandler,
  MutableRefObject
} from "react";
import "./styles.css";
import form from "./form.module.css";

export default function App() {
  const [presents, setPresents] = useState([
    "🎮 Jueguitos", 
    "🍫 Chocolates",
    "🥐 Medialunas"
  ]);

  const inputPresent = useRef() as MutableRefObject<HTMLInputElement>;
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (inputPresent?.current) {
      const { value } = inputPresent?.current;
      setPresents((presents) => [value, ...presents]);
      inputPresent.current.value = "";
    } else console.error("Input not defined");
  };

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <form className={form["present-form"]} onSubmit={handleSubmit}>
        <input
          ref={inputPresent}
          className={form["present-input"]}
          type="text"
          placeholder="🎁 nuevo regalo"
        />
        <button
          aria-label="Agregar regalo"
          type="submit"
          className={form.arrow}
        >
          +
        </button>
      </form>
      <ul>
        {presents.map((present) => (
          <li key={present}>{present}</li>
        ))}
      </ul>
    </div>
  );
}
