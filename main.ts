const input = require("prompt-sync")({ sigint: true });
const Factory = require('./factory')
import Builder from './pcBuilder'

// add id de chon
for (let i =0; i < Factory.Main.length; i++){
    Factory.Main[i].id = i + 1
}
for (let i =0; i < Factory.Chip.length; i++){
    Factory.Chip[i].id = i + 1
}
for (let i =0; i < Factory.Ram.length; i++){
    Factory.Ram[i].id = i + 1
}
for (let i =0; i < Factory.PSU.length; i++){
    Factory.PSU[i].id = i + 1
}
for (let i =0; i < Factory.SSD.length; i++){
    Factory.SSD[i].id = i + 1
}
for (let i =0; i < Factory.GPU.length; i++){
    Factory.GPU[i].id = i + 1
}


const pc = new Builder()

console.log(Factory.Main)
const main : number = input("\n\nPick Mainboard id : ")
console.log("\n\n\n\n")
pc.getMain(Factory.Main[main - 1])

// check mainboard vs cpu

const filteredChipList = Factory.Chip.filter((chip: { ChipToMain: () => any; }) => Factory.Main[main - 1].socket.includes(chip.ChipToMain()))
console.log(filteredChipList)
const chip : number = input("\n\nPick Chip id : ")
pc.getChip(Factory.Chip[chip - 1])
   
console.log("\n\n\n\n")      
console.log(Factory.Ram)
const ram : number = input("\n\nPick Ram id : ")
console.log("\n\n\n\n")
pc.getRam(Factory.Ram[ram - 1])

console.log(Factory.GPU)
const gpu : number = input("\n\nPick GPU id : ")
console.log("\n\n\n\n")
pc.getGPU(Factory.GPU[gpu - 1])

console.log(Factory.PSU)
const psu : number = input("\n\nPick PSU id : ")
console.log("\n\n\n\n")
pc.getPSU(Factory.PSU[psu - 1])

console.log(Factory.SSD)
const ssd : number = input("\n\nPick SSD id : ")
console.log("\n\n\n\n")
pc.getSSD(Factory.SSD[ssd - 1])



console.log("\n\n\nYour builded PC :")
console.log(pc.buildedParts)

