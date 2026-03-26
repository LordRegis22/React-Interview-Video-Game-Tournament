import players from "./playerData";

export default function () {
  if (Math.floor(Math.random() * 100) <= 7) {
    if (Math.random() < 0.7) {
      return Promise.reject({ error: 500 });
    } else {
      return Promise.reject({ error: 408 });
    }
  } else {
    return Promise.resolve(players);
  }
}
