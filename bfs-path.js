function findNeighbors(node, matrix) {

   let [row,column] = node
    let neighbors = []

    let matrixLength = matrix.length
    let maxtrixColumn = matrix[0].length
        // Up -> subtract 1 from row
        let up = [row-1,column]
        // Down -> add 1 to row
        let down = [row+1,column]
        // Left subtract 1 from column
        let left = [row, column-1]
        // Right -> add 1 to column
        let right = [row,column+1]

    if (row-1 >= 0) {
        neighbors.push(up)
    }
    if (row+1 < maxtrixColumn) {
        neighbors.push(down)
    }
    if (column-1 >= 0) {
        neighbors.push(left)
    }
    if (column+1 < matrixLength) {
        neighbors.push(right)
    }
        return neighbors
        }
        




        // - General Guideline(may need to modify)
// 1. Create a queue and enqueue the starting node
// 2. Create a set to store visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. Dequeue the first node and check if it's been visited
// 5. If not, mark it as visited and DO THE THING
    // - Requires converting the node coordinates array into a string data type
// 6. Put all its neighbors in the back of the queue



function bfsPath(matrix, startNode, endValue) {
// console.log(matrix) // the last element is 16
// console.log(startNode) // start is [0,0]

let queue = [startNode]
let visited = new Set()
visited.add(startNode.join(", "))
let result = [startNode]


let [row1, column1] = startNode
if (matrix[row1][column1] === endValue) return queue

// May need to add the coordinates to the set -> make into string?



while (queue.length > 0) {
    let currentNode = queue.shift() // [0,0]
    let [row, column] = currentNode
    let coordinate = matrix[row][column]
    
// We need to make sure that the set does not already contain the neighbors at not only the currentNode
let neighbors = findNeighbors(currentNode, matrix)
for (let neighbor of neighbors) {
    if (!visited.has(neighbor.join(", "))) {
        // if we visited the neighbor, don't add to queue.
        let string = neighbor.join(", ")
        visited.add(string)
        queue.push(neighbor)
        result.push(neighbor)
    }
}
    if (coordinate === endValue) {
        return result
    }
}
return false
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
