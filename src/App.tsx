import React, {useState, useRef} from "react";
import type {CSSProperties, MutableRefObject, FormEventHandler} from "react";

import "./styles.css";

export default function App() {
  const [toastDisplay, setToastDisplay] = useState<CSSProperties>({display: "none"});
  const [presents, setPresents] = useState<PresentT[]>([
    {name: "Mantecol 🍬", id: 1, quantity: 1},
    {name: "Vinilos 💽", id: 0, quantity: 2},
  ]);

  const presentName = useRef() as MutableRefObject<HTMLInputElement>;
  const presentQuant = useRef() as MutableRefObject<HTMLInputElement>;

  const handleError = () => {
    setToastDisplay({display: "block"});
    setTimeout(() => {
      setToastDisplay({display: "none"});
    }, 5000);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const name = presentName?.current?.value;
    const quantity = Number(presentQuant?.current?.value);

    if (name && quantity) {
      if (presents.find((p) => p.name === name)) {
        setPresents((presents) =>
          presents.map((p) => (p.name === name ? {...p, quantity: p.quantity + quantity} : p)),
        );
      } else {
        setPresents((presents) => [...presents, {name, quantity, id: presents.length}]);
      }
      presentName.current.value = "";
      presentQuant.current.value = "";
    } else {
      handleError();
    }
  };

  const handleDelete = (presentId: number) => {
    setPresents((ps) => ps.filter((p) => p.id !== presentId));
  };

  return (
    <main className="App">
      <div className="toast" style={toastDisplay}>
        ⚠ Por favor, ingrese un regalo y una cantidad validas antes de agregar a la lista!
      </div>
      <div className="container">
        <h1>Regalos:</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control present-name">
            <small>Regalo:</small>
            <input
              ref={presentName}
              className="present-name"
              placeholder="Nombre de regalo"
              type="text"
            />
          </div>
          <div className="form-control present-quantity">
            <small>Cant:</small>
            <input ref={presentQuant} className="present-quantity" placeholder="00" type="number" />
          </div>
          <button className="add-button" type="submit">
            Agregar!
          </button>
        </form>
        <section className="presents-section">
          <ul>
            {presents.map((present: PresentT) => (
              <ol key={present.id} onClick={() => handleDelete(present.id)}>
                {present.quantity} {present.name}
              </ol>
            ))}
          </ul>
        </section>
        <button onClick={() => setPresents([])}>Borrar todos los regalos 😥</button>
      </div>
    </main>
  );
}
