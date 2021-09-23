import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function emojiCreater(emojipediaItem) {
  return (
    <Emoji
      key={emojipediaItem.id}
      emoji={emojipediaItem.emoji}
      title={emojipediaItem.name}
      desc={emojipediaItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCreater)}</dl>
    </div>
  );
}

export default App;
