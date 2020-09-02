import {readJson, brain} from "./deps.ts";

const palettes = await readJson("./palette_collections/colormind/palettes.json");



console.log("Loaded palettes.")

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork();

let trainingData = [];

for(let palette of palettes){
  trainingData.push({"input": [], "output": palette})
}

net.train(palettes, {log: true});

console.log("Trained!")

const output = net.run([]);


console.log(output)