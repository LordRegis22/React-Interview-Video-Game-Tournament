import "./styles.css";
import { ADJECTIVES } from "../data/constants";
import fetchPlayers from "../data/fetchPlayers";

export default function App() {
  const adjectivesLength = ADJECTIVES.length;
  // create two new vars
  let index1 = Math.floor(Math.random() * adjectivesLength);
  let index2 = index1;

  return (
    <div className="App">
      <h1>{`🎮 ${ADJECTIVES[Math.floor(Math.random() * adjectivesLength)]} ${
        ADJECTIVES[Math.floor(Math.random() * adjectivesLength)]
      } Videogame Scheduling 🎮`}</h1>
    </div>
  );
}
