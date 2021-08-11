const team =  {
  get players(){
    return this._players
  },
  _players : [
  {firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11},
  {firstName: 'Hans',
  lastName: 'Lee',
  age: 12},
  {firstName: 'Andrew',
  lastName: 'Sun',
  age: 13}
  ],
  get games(){
    return this._games
  },
  _games   : [],
  addPlayer(firstName,lastName,age){
  let player = {firstName: firstName,
  lastName: lastName,
  age: age};
  this.players.push(player);
  },
  addGame(opponent,teamPoint,opponentPoint){
  let game = {opponent: opponent,
  teamPoint: teamPoint,
  opponentPoint: opponentPoint};
  this.games.push(game);
  }
}
team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);
team.addGame('Eagle',10, 6);
team.addGame('Walf',5,3);
team.addGame('Tiger',2, 1);

console.log(team.players);
console.log(team.games);
