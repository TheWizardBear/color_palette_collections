import {jsdom} from "./deps.ts";

let p = await fetch("http://colormind.io", )//https://www.canva.com/colors/color-palettes/")

console.log(JSON.stringify(await p))


const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window;
const document = window.document;

console.log(document.querySelector("p").textContent); // "Hello world"