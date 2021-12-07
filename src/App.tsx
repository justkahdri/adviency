import React from "react";
import type {MutableRefObject} from "react";

import "./styles.css";

export default function App() {
  const [presents, setPresents] = React.useState<string[]>(["Auto de juguete"]);
  const inputPresent = React.useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <main className="App">
      <div className="container">
        <h1>Regalos:</h1>
        <section className="fake-form">
          <input ref={inputPresent} placeholder="Nombre de regalo" type="text" />
          <button
            type="button"
            onClick={() => setPresents([inputPresent?.current.value, ...presents])}
          >
            Agregar!
          </button>
        </section>
        <section className="presents-section">
          <ul>
            {presents.map(function (present: string) {
              return (
                <ol
                  key={present}
                  onClick={() => setPresents((ps) => ps.filter((p) => p !== present))}
                >
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
