/*Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

*/ 

const team = {
  _players: [],
  _games: [],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
  }
};

team.addPlayer("Biro", "Biro", 32);
console.log(team.players);

team.addGame("Corinthians", 3, 5);
console.log(team.games);
