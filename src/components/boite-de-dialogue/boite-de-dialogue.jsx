import React from "react";
import "./boite-de-dialogue.css";
const BoiteDeDialogue = ({
  valeurOuverture,
  fonctionOuverture,
  fonctionSuppression,
}) => {
  return (
    <div className="boite-de-dialogue-container">
      <div className="boite-de-dialogue">
        <h2>Supprimer</h2>
        <div>
          <button onClick={() => fonctionOuverture(!valeurOuverture)}>
            annuler
          </button>
          <button onClick={() => fonctionSuppression()}>supprimer</button>
        </div>
      </div>
    </div>
  );
};

export default BoiteDeDialogue;
