import React from "react";
import emojipedia from "./emojipedia";
import Card from "./Card";
var Year = new Date();
var currentYear = Year.getFullYear();
function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
      <div>
        <footer className="footers">
          Copyright @{currentYear}{" "}
          <b>
            <i>Surendra Ediga</i>
          </b>
        </footer>
      </div>
    </div>
  );
}

export default App;
