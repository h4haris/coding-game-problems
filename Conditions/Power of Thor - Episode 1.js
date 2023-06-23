//* Power of Thor - Episode 1

//? The Goal
// Your program must allow Thor to reach the light of power.

//? Rules
// Thor moves on a map which is 40 wide by 18 high.

//! Note that the coordinates (X and Y) start at the top left! This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".

// Once the program starts you are given:
/// - the variable lightX: the X position of the light of power that Thor must reach.
/// - the variable lightY: the Y position of the light of power that Thor must reach.
/// - the variable initialTX: the starting X position of Thor.
/// - the variable initialTY: the starting Y position of Thor.

// At the end of the game turn, you must output the direction in which you want Thor to go among:

////* N (North)
////* NE (North-East)
////* E (East)
////* SE (South-East)
////* S (South)
////* SW (South-West)
////* W (West)
////* NW (North-West)

// Each movement makes Thor move by 1 cell in the chosen direction.

//? Victory Conditions
// You win when Thor reaches the light of power

//? Lose Conditions
// Thor moves outside the map


//? Game Input
// The program must first read the initialization data from the standard input, then, in an infinite loop, provides on the standard output the instructions to move Thor.

//? Initialization input
// Line 1: 4 integers lightX lightY initialTX initialTY. (lightX, lightY) indicates the position of the light. (initialTX, initialTY) indicates the initial position of Thor.

//? Input for a game round
// Line 1: the number of remaining moves for Thor to reach the light of power: remainingTurns. You can ignore this data but you must read it.

//? Output for a game round
// A single line providing the move to be made: N NE E SE S SW W ou NW

//? Constraints
// 0 ≤ lightX < 40
// 0 ≤ lightY < 18
// 0 ≤ initialTX < 40
// 0 ≤ initialTY < 18
// Response time for a game round ≤ 100ms



/* CODE */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

function main(positions, energy) {

    var inputs = positions.split(' ')
    let lightX = parseInt(inputs[0]) // the X position of the light of power
    let lightY = parseInt(inputs[1]) // the Y position of the light of power
    let initialTx = parseInt(inputs[2]) // Thor's starting X position
    let initialTy = parseInt(inputs[3]) // Thor's starting Y position

    // game loop
    while (initialTx != lightX || initialTy != lightY) {
        const remainingTurns = parseInt(energy) // The remaining amount of turns Thor can move. Do not remove this line.

        // Write an action using console.log()
        // To debug: console.error('Debug messages...');

        var output = ''

        if (initialTx < lightX && initialTy < lightY) {
            output = 'SE'
            initialTx++
            initialTy++
        }
        else if (initialTx < lightX && initialTy > lightY) {
            output = 'NE'
            initialTx++
            initialTy--
        }
        else if (initialTx > lightX && initialTy > lightY) {
            output = 'NW'
            initialTx--
            initialTy--
        }
        else if (initialTx > lightX && initialTy < lightY) {
            output = 'SW'
            initialTx--
            initialTy++
        }
        else if (initialTx > lightX && initialTy === lightY) {
            output = 'W'
            initialTx--
        }
        else if (initialTx < lightX && initialTy === lightY) {
            output = 'E'
            initialTx++
        }
        else if (initialTx === lightX && initialTy < lightY) {
            output = 'S'
            initialTy++
        }
        else if (initialTx === lightX && initialTy > lightY) {
            output = 'N'
            initialTy--
        }

        // A single line providing the move to be made: N NE E SE S SW W or NW
        console.log(output)
    }
}

/* TEST CASES */

// Straight Line
main("31 4 5 4", 100) // E (26 times)

console.log("\n\n")

// Up
main("31 4 31 17", 13) // N (13 times)

console.log("\n\n")

// Easy Angle
main("0 17 31 4", 44) // SW (13 times), W (18 times) 

console.log("\n\n")

// Optimal angle
main("36 17 0 0", 36) // SE (17 times), E (19 times) 