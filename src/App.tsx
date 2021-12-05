// @ts-nocheck
import React, {useState, useRef, MutableRefObject} from "react";
import "./global.css";
import form from './form.module.css';
import listed from './listed.module.css';

export default function App() {
  const [presents, setPresents] = useState(['Jueguitos']);
  const inputPresent = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPresent.current) {
      const {value} = inputPresent.current;
      setPresents(presents => [value, ...presents]);
      inputPresent.current.value = '';
    }
  }

  const handleDelete = (value) => {
    setPresents(presents => presents.filter(p => p !== value))
  }

  return (
    <div className="App">
      <form className={form.container} onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese regalo nuevo" ref={inputPresent} />
        <button className={form.add} type="submit">Agregar</button>
      </form>
      <h1>Regalos:</h1>
      <section className={listed.container}>
        {presents.map((present: string) => (
        <div className={listed.item} key={present}>
          <p>{present}</p>
          <button className={listed.delete} type="button" onClick={() => handleDelete(present)}>
            X
          </button>
        </div>
        ))}
      </section>
    </div>
  );
}
