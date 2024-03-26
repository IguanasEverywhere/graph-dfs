function isPath(graph, vertexA, vertexB, visited = []) {
  let adjs = graph[vertexA];

  if (adjs.includes(vertexB)) {
    return true;
  }

  while (adjs.length > 0) {
    visited.push(vertexA);
    if (visited.includes(adjs[0])) {
      adjs.splice(0,1)
      continue;
    }
    if (isPath(graph, adjs[0], vertexB, visited)) {
      return true;
    } else {
      adjs.splice(0, 1);
    }
  }
  return false;
}

if (require.main === module) {

  const complexGraph = {
    jan: ["john", "jambaby", "malala"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave", "martin"],
    dave: ["jan"],
    mittens: [],
    martin: ["mittens"],
    malala: ["dave", "carl", "martin", "pirate"],
    pirate: ["shiba", "inu"],
    shiba: [],
    inu: []
  };

  console.log("");
  console.log("Expecting: true");
  console.log("");
  console.log(isPath(complexGraph, "carl", "inu"))


}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution


// add your own tests in here
// let graph = {
//   jan: ["john", "jambaby"],
//   john: ["carl"],
//   jambaby: [],
//   carl: ["jambaby"],
//   dave: []
// };

// console.log("Expecting: true");
// console.log(isPath(graph, "jan", "carl"));

// console.log("");

// console.log("Expecting: false");
// console.log(isPath(graph, "jan", "dave"));