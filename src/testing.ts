import { Player } from './practise';

export function testPlayer() {  
    let player = new Player('John Doe', 30);
    console.log(player.getName()); // Should print: John Doe
    console.log(player.getAge());  // Should print: 30

    player.setName('Jane Doe');
    player.setAge(25);

    console.log(player.getName()); // Should print: Jane Doe
    console.log(player.getAge());  // Should print: 25
}
