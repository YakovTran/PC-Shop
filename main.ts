const input = require("prompt-sync")({ sigint: true });
import Builder from './pcBuilder'

const pc = new Builder()

pc.start()

const main : number = input("\nPick Mainboard id : ")
console.log("\n\n\n")
pc.getMain(main - 1)
const chip : number = input("\nPick Chip id : ")
console.log("\n\n\n")
pc.getChip(chip - 1)
const gpu : number = input("\nPick GPU id : ")
console.log("\n\n\n")
pc.getGPU(gpu - 1)
const ram : number = input("\nPick Ram id : ")
console.log("\n\n\n")
pc.getRam(ram - 1)
const psu : number = input("\nPick PSU id : ")
console.log("\n\n\n")
pc.getPSU(psu - 1)
const ssd : number = input("\nPick SSD id : ")
console.log("\n\n\n")
pc.getSSD(ssd - 1)

console.log("\n\n\nYour builded PC :")
console.log(pc.buildedParts)

