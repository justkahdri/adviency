import React, {useState} from "react";
import type {MouseEventHandler, CSSProperties, FormEventHandler} from "react";

import "./styles.css";

export default function App() {
  const [presents, setPresents] = useState<string[]>(["Mantecol 🍬", "Helicoptero de juguete"]);
  const [inputPresent, setInputPresent] = useState<string>("");
  const [toastDisplay, setToastDisplay] = useState<CSSProperties>({display: "none"});

  const handleError = () => {
    setToastDisplay({display: "block"});
    setTimeout(() => {
      setToastDisplay({display: "none"});
    }, 5000);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (inputPresent && !presents.includes(inputPresent)) {
      setPresents((presents) => [...presents, inputPresent]);
      setInputPresent("");
    } else {
      handleError();
    }
  };

  const handleDelete: MouseEventHandler = (e) => {
    const {id} = e.currentTarget;

    setPresents((ps) => ps.filter((p) => p !== id));
  };

  return (
    <main className="App">
      <div className="toast" style={toastDisplay}>
        ⚠ Por favor, ingrese un regalo que no se encuentre en la lista!
      </div>
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nombre de regalo"
            type="text"
            value={inputPresent}
            onChange={({target: {value}}) => setInputPresent(value)}
          />
          <button type="submit">Agregar!</button>
        </form>
        <section className="presents-section">
          <ul>
            {presents.map(function (present: string) {
              return (
                <ol key={present} id={present} onClick={handleDelete}>
                  {present}
                </ol>
              );
            })}
          </ul>
        </section>
        <button onClick={() => setPresents([])}>Borrar todos los regalos 😥</button>
      </div>
    </main>
  );
}
