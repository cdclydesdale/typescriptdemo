// 1. Defining the Interface
// We use the keyword 'interface' followed by the name (usually capitalized)
export interface PlayerData {
    name: string;
    age: number;
    // The '?' makes this property OPTIONAL. 
    // A player can have a high score, but they don't have to.
    highScore?: number; 
}

function displayPlayerInfo(player: PlayerData){
    console.log(`Player Name: ${player.name}`);
    console.log(`Player Age: ${player.age}`);
    if(player.highScore !== undefined){
        console.log(`Player High Score: ${player.highScore}`);
    } else {
        console.log("Player High Score: N/A");
    }
}

// 2. Using the Interface for a raw object
// Notice we use a colon `:` to apply the interface to the variable
let newPlayer: PlayerData = {
    name: "Sarah",
    age: 28,
    highScore: 5000 
};

let rookiePlayer: PlayerData = {
    name: "Leo",
    age: 19
    // highScore is missing, but TypeScript allows it because of the '?'
};


 let badPlayer: PlayerData = {
     name: "Oops",
     age: 27,
     highScore: 3000
     // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'PlayerData'.
 };

 displayPlayerInfo(newPlayer);
 displayPlayerInfo(rookiePlayer);