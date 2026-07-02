// 1. Import the interface from the other file
import { PlayerData } from './playerdata';

export class Game {
    gameName: string;
    
    constructor(name: string) {
        this.gameName = name;
    }

    // 2. We use the imported interface to force this method 
    // to only accept properly formatted player data!
    addPlayerToGame(player: PlayerData): void {
        console.log(`Welcome to ${this.gameName}, ${player.name}!`);
        console.log(`Your age is ${player.age}.`);
        
        if (player.gender) {
            console.log(`Your gender is ${player.gender}`);
        } else {
            console.log("Gender not specified.");
        }

        if (player.highScore !== undefined) {
            console.log(`Wow, a high score of ${player.highScore}!`);
        } else {
            console.log("You haven't set a high score yet.");
        }
    }
}