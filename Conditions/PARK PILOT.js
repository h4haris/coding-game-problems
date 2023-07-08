//* PARK PILOT

//? The Goal
// At CarAI, we produce solutions for the automotive industry.In this project, we are developing a parking pilot that can work on different brands of vehicles.

// The system includes ultrasonic sensors placed at the four corners of the vehicle and a control unit to which they are connected.

// Your mission is to develop an algorithm that finds all available park spaces for a vehicle which has just arrived.Below is an illustration for explanation:

// xxxxxxxx
// xxxxxxxx
// xxxxxxxx park space
// xxxxxxxx =============...
// 1------1
// |--car-| --->
// 1------1
// xxxxxxxx =============...
// xxxxxxxx park space
// xxxxxxxx
// xxxxxxxx

// The system can be integrated into different vehicle models.That is why we cannot give you the length of the vehicle.In order for you to calculate it more accurately, a vehicle is not allowed to park near the entrance(denoted as "x" above).

// At the start, the back of the vehicle is at index 0. The sensors collect data at that moment, and every time when the vehicle has moved forward 1 unit.The scanning width of each sensor is 1 unit.You are now provided with all the collected data for your development of the algorithm.

//! Vehicle
// https://ibb.co/QmM5Czf

//! Map
// https://ibb.co/GpjhgH7

//! Calibration Process
// https://ibb.co/dp9h9dp


//? Input
// Line 1: An integer N denoting the number of sensor data strings to read
// Next N lines: A string consisting 4 digits(0 or 1) for sensor data.
// 0 means no obstacle. 1 means an obstacle.
// The first line gives the data at index 0(the point nearest the entrance), and each subsequent line gives the data 1 unit further away(index 1, 2, 3, etc).
// The sensors are located at the four corners of the vehicle, and each string gives the data of the sensors in the order of:
// Front Left - Front Right - Back Right - Back Left

// 0-------------1 Front Left
// |-------------|
// 1-------------0 Front Right


//? Output
// Line 1: An integer denoting the length of the vehicle
// Next lines: A string formatted as explained below for one available park space in each line.The output should be in ascending order of the index where the front of the vehicle can be parked.

// String Format
// 29 : Index of empty park space for the front of the vehicle
// L: L if park space is on the left side, R if park space is on the right side.
//     Examples: 4R, 29L

//? Constraints
// A case where the the same index of park spaces on the left side and the right side are both available e.g. 29L and 29R is not tested.

//? Example

////? Input
// 31
// 1111
// 1111
// 1111
// 1111
// 1111
// 1111
// 0111
// 1111
// 1111
// 1111
// 1110
// 1011
// 0011
// 0011
// 0011
// 0101
// 0100
// 1100
// 1100
// 1010
// 1010
// 1011
// 0011
// 0001
// 0001
// 0101
// 1100
// 1100
// 1100
// 1110
// 1011

////? Output
// 5
// 20L
// 27R
// 28R



/* CODE */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

function main(roadLength, sensorDataList) {

    /**
     * Find empty park lot for current vehicle
     **/

    const N = roadLength // Road length
    let vehicleLength = 0
    let vehicleChecked = false

    let consecutiveSpaceFL = 0
    let consecutiveSpaceFR = 0
    let consecutiveSpaceBL = 0
    let consecutiveSpaceBR = 0

    for (let i = 0; i < N; i++) {
        const sensorData = sensorDataList[i] // Datas from four sensor with values 1 or 0 (e.g 1001)

        if (vehicleChecked == false) {
            if (vehicleLength != 0)
                vehicleLength++

            if ((sensorData[0] == '0' || sensorData[1] == '0') && vehicleLength == 0)
                vehicleLength++
            else if (sensorData[3] == '0' || sensorData[2] == '0')
                vehicleChecked = true
        }

    }

    // Length of vehicle
    console.log(vehicleLength)

    for (let i = 0; i < N; i++) {

        const sensorData = sensorDataList[i]

        if (sensorData[3] == '0')
            consecutiveSpaceBL++
        else consecutiveSpaceBL = 0

        if (sensorData[2] == '0')
            consecutiveSpaceBR++
        else consecutiveSpaceBR = 0

        if (sensorData[1] == '0')
            consecutiveSpaceFR++
        else consecutiveSpaceFR = 0

        if (sensorData[0] == '0')
            consecutiveSpaceFL++
        else consecutiveSpaceFL = 0

        if (consecutiveSpaceBL >= vehicleLength) {
            console.log(i + 'L')
        }

        if (consecutiveSpaceBR >= vehicleLength) {
            console.log(i + 'R')
        }
    }

    if (consecutiveSpaceFL >= vehicleLength) {
        console.log(N + vehicleLength - 2 + 'L')
    }

    if (consecutiveSpaceFR >= vehicleLength) {
        console.log(N + vehicleLength - 2 + 'R')
    }
}

/* TEST CASES */

// Test 1
main(31, [
    "1111",
    "1111",
    "1111",
    "1111",
    "1111",
    "1111",
    "0111",
    "1111",
    "1111",
    "1111",
    "1110",
    "1011",
    "0011",
    "0011",
    "0011",
    "0101",
    "0100",
    "1100",
    "1100",
    "1010",
    "1010",
    "1011",
    "0011",
    "0001",
    "0001",
    "0101",
    "1100",
    "1100",
    "1100",
    "1110",
    "1011"])
// 5
// 20L
// 27R
// 28R

console.log("\n\n")

// Test 2
main(74, [
    "1111",
    "1111",
    "1111",
    "1111",
    "0111",
    "1111",
    "1111",
    "1111",
    "1111",
    "1011",
    "0010",
    "0011",
    "0111",
    "0111",
    "1111",
    "1101",
    "1100",
    "1000",
    "1010",
    "0010",
    "0011",
    "0111",
    "0111",
    "0001",
    "0001",
    "1000",
    "1100",
    "1110",
    "1110",
    "1100",
    "0100",
    "0001",
    "0011",
    "0011",
    "0011",
    "0011",
    "1010",
    "1100",
    "1100",
    "1000",
    "1000",
    "0000",
    "0001",
    "1011",
    "1011",
    "0001",
    "0001",
    "0100",
    "0100",
    "0101",
    "1101",
    "1100",
    "1000",
    "1010",
    "1010",
    "0010",
    "0011",
    "0011",
    "0101",
    "0101",
    "0101",
    "0100",
    "1100",
    "1000",
    "1010",
    "1010",
    "1010",
    "0010",
    "0011",
    "0101",
    "0101",
    "0101",
    "0101",
    "0100"])
// 7
// 51R
// 52R
// 67L
// 79L

console.log("\n\n")

// Test 3
main(74, [
    "1111",
    "1111",
    "1111",
    "1111",
    "0111",
    "1111",
    "1111",
    "1111",
    "1111",
    "1011",
    "0010",
    "0011",
    "0011",
    "0111",
    "0111",
    "1101",
    "1100",
    "1100",
    "1000",
    "1010",
    "0010",
    "0011",
    "0011",
    "0011",
    "0001",
    "0101",
    "1100",
    "1100",
    "1100",
    "1100",
    "1000",
    "0010",
    "0011",
    "0011",
    "0111",
    "0111",
    "0001",
    "0000",
    "0100",
    "1100",
    "1110",
    "1110",
    "1100",
    "1000",
    "0010",
    "0011",
    "0011",
    "1011",
    "1011",
    "0101",
    "1100",
    "1100",
    "1100",
    "1101",
    "1001",
    "0010",
    "0011",
    "0011",
    "0111",
    "1111",
    "1101",
    "0100",
    "0100",
    "0000",
    "0010",
    "0011",
    "0011",
    "0010",
    "1010",
    "1100",
    "1100",
    "1100",
    "1100",
    "0100"])
// 7
// 30R
// 43L
// 44L
// 73L

console.log("\n\n")

// Test 4
main(155, [
    "1111",
    "1111",
    "1111",
    "1111",
    "0111",
    "1111",
    "1111",
    "1111",
    "1111",
    "1011",
    "0010",
    "0011",
    "0011",
    "0011",
    "1111",
    "1101",
    "1100",
    "1100",
    "1100",
    "0000",
    "0011",
    "0011",
    "0011",
    "0011",
    "0011",
    "1100",
    "1100",
    "1100",
    "1100",
    "1100",
    "0000",
    "0011",
    "0011",
    "0011",
    "1111",
    "1111",
    "1000",
    "1000",
    "1000",
    "0100",
    "0111",
    "0111",
    "0101",
    "1101",
    "1001",
    "0010",
    "0010",
    "0010",
    "0010",
    "0111",
    "1101",
    "1100",
    "1100",
    "1100",
    "1000",
    "0010",
    "0011",
    "0011",
    "0111",
    "0111",
    "1101",
    "1100",
    "1100",
    "1000",
    "1010",
    "0010",
    "0011",
    "0011",
    "0011",
    "1101",
    "1101",
    "1100",
    "1100",
    "1100",
    "0000",
    "0011",
    "0011",
    "0011",
    "0011",
    "1111",
    "1100",
    "1100",
    "1100",
    "1100",
    "0000",
    "0011",
    "0011",
    "1011",
    "1011",
    "1111",
    "1100",
    "1100",
    "0100",
    "0101",
    "0001",
    "0011",
    "0011",
    "0111",
    "1110",
    "1010",
    "1000",
    "1000",
    "1000",
    "0110",
    "0111",
    "0101",
    "0101",
    "0101",
    "1001",
    "1010",
    "1010",
    "1010",
    "1010",
    "0110",
    "0101",
    "0101",
    "0101",
    "0101",
    "0001",
    "1010",
    "1010",
    "1010",
    "1010",
    "1010",
    "0100",
    "0101",
    "0101",
    "0101",
    "0101",
    "1001",
    "1010",
    "1010",
    "1010",
    "1010",
    "0110",
    "0101",
    "0101",
    "0101",
    "0101",
    "0001",
    "1010",
    "1010",
    "1010",
    "1010",
    "1010",
    "0000",
    "0101",
    "0101",
    "0101",
    "0101",
    "1101",
    "1000",
    "1010",
    "1010",
    "1010"])
// 7
// 151R

console.log("\n\n")

// Test 5
main(153, [
    "1111",
    "1111",
    "0111",
    "1111",
    "1111",
    "1111",
    "1111",
    "1011",
    "0011",
    "0011",
    "0010",
    "0011",
    "1111",
    "1111",
    "1111",
    "1101",
    "1100",
    "0000",
    "0000",
    "0000",
    "0011",
    "0011",
    "0011",
    "0011",
    "1011",
    "1000",
    "1100",
    "1100",
    "1100",
    "0100",
    "0100",
    "0000",
    "1101",
    "1101",
    "1011",
    "1011",
    "1011",
    "0110",
    "0110",
    "0100",
    "0111",
    "1111",
    "1001",
    "0001",
    "0001",
    "0010",
    "0010",
    "0110",
    "0110",
    "0111",
    "0101",
    "0100",
    "0000",
    "0000",
    "0000",
    "1010",
    "1110",
    "0110",
    "1110",
    "1110",
    "1100",
    "1000",
    "1000",
    "0001",
    "0011",
    "0010",
    "0011",
    "1111",
    "1111",
    "1101",
    "1101",
    "1100",
    "0000",
    "0000",
    "0000",
    "0011",
    "0111",
    "1111",
    "1011",
    "1011",
    "1000",
    "1000",
    "0000",
    "0000",
    "0010",
    "1011",
    "1001",
    "1101",
    "1101",
    "1101",
    "0100",
    "0100",
    "0000",
    "0001",
    "0001",
    "0011",
    "1011",
    "1011",
    "1010",
    "1010",
    "1000",
    "0100",
    "0100",
    "0100",
    "0101",
    "0101",
    "1001",
    "1001",
    "1001",
    "1010",
    "1010",
    "0110",
    "0110",
    "0110",
    "0101",
    "0101",
    "0001",
    "0001",
    "0001",
    "0010",
    "1010",
    "1010",
    "1110",
    "1110",
    "1100",
    "0100",
    "0100",
    "1000",
    "1001",
    "1001",
    "1111",
    "1111",
    "0111",
    "0110",
    "0110",
    "0001",
    "0001",
    "0001",
    "1011",
    "1011",
    "1010",
    "1010",
    "1010",
    "0000",
    "0100",
    "0100",
    "0101",
    "0101",
    "1101",
    "1001",
    "1001",
    "1000",
    "1010"])
// 9
// 33R
// 59L
// 60L
// 61L
// 62L
// 94R
// 108R
// 127L
// 151R