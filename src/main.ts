import { PlayerData } from './playerdata';
import { Game } from './gamer';

// 1. Create a game
let myGame = new Game("Epic Quest");

// 2. Create raw data that matches the interface
let newGamer: PlayerData = {
    name: "Alex",
    age: 30,
    gender: "Male",
    highScore: 9999
};

// 3. Pass the data into the game!
myGame.addPlayerToGame(newGamer);