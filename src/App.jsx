import { useState } from "react";
import "./App.css";
import BoiteDeDialogue from "./components/boite-de-dialogue/boite-de-dialogue";

function App() {
  const INITIAL_DATA = [
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "purple" },
    { id: 4, name: "lightgreen" },
    { id: 5, name: "royalblue" },
    { id: 6, name: "crimson" },
    { id: 7, name: "darkgray" },
    { id: 8, name: "darkcyan" },
  ];

  const [listDeCouleurs, setListDeCouleur] = useState(INITIAL_DATA);

  const [estOuver, setEstOuver] = useState(false);

  const supprimeCouleur = (id) => {
    const nouvelleList = listDeCouleurs.filter((couleur) => {
      return couleur.id !== id;
    });
    setListDeCouleur(nouvelleList);
    setEstOuver(false);
  };

  const [idObj, setIdObj] = useState(0);

  const afficherCacherBoiteDeDialogue = (id) => {
    setIdObj(id);
    setEstOuver(!estOuver);
  };

  return (
    <div className="App">
      <ol>
        {listDeCouleurs.map(({ id, name }) => {
          return (
            <li style={{ color: name }} key={id}>
              {name}{" "}
              <button onClick={() => afficherCacherBoiteDeDialogue(id)}>
                supprimer
              </button>
            </li>
          );
        })}
      </ol>
      {estOuver && (
        <BoiteDeDialogue
          valeurOuverture={estOuver}
          fonctionOuverture={setEstOuver}
          fonctionSuppression={() => supprimeCouleur(idObj)}
        />
      )}
    </div>
  );
}

export default App;
