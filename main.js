"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input = require("prompt-sync")({ sigint: true });
const age = input("How old are you? ");
const Factory = require('./factory');
const pcBuilder_1 = __importDefault(require("./pcBuilder"));
// tao id de chon
for (let i = 0; i < Factory.Main.length; i++) {
    Factory.Main[i].id = i + 1;
}
for (let i = 0; i < Factory.Chip.length; i++) {
    Factory.Chip[i].id = i + 1;
}
for (let i = 0; i < Factory.Ram.length; i++) {
    Factory.Ram[i].id = i + 1;
}
for (let i = 0; i < Factory.PSU.length; i++) {
    Factory.PSU[i].id = i + 1;
}
for (let i = 0; i < Factory.SSD.length; i++) {
    Factory.SSD[i].id = i + 1;
}
for (let i = 0; i < Factory.GPU.length; i++) {
    Factory.GPU[i].id = i + 1;
}
const pc = new pcBuilder_1.default();
console.log(Factory.Main);
const main = input("\n\nPick Mainboard id : ");
console.log("\n\n\n\n");
pc.getMain(Factory.Main[main - 1]);
// check mainboard vs cpu
if (Factory.Main[main - 1].socket == "A") {
    const filteredChipList = Factory.Chip.filter((chip) => chip.brand == "AMD");
    console.log(filteredChipList);
    const chip = input("\n\nPick Chip id : ");
    pc.getChip(Factory.Chip[chip - 1]);
}
else if (Factory.Main[main - 1].socket == "L") {
    const filteredChipList = Factory.Chip.filter((chip) => chip.brand == "INTEL");
    console.log(filteredChipList);
    const chip = input("\n\nPick Chip id : ");
    pc.getChip(Factory.Chip[chip - 1]);
}
else {
    console.log(Factory.Chip);
    const chip = input("\n\nPick Chip id : ");
    pc.getChip(Factory.Chip[chip - 1]);
}
console.log("\n\n\n\n");
console.log(Factory.Ram);
const ram = input("\n\nPick Ram id : ");
console.log("\n\n\n\n");
pc.getRam(Factory.Ram[ram - 1]);
console.log(Factory.GPU);
const gpu = input("\n\nPick GPU id : ");
console.log("\n\n\n\n");
pc.getGPU(Factory.GPU[gpu - 1]);
console.log(Factory.PSU);
const psu = input("\n\nPick PSU id : ");
console.log("\n\n\n\n");
pc.getPSU(Factory.PSU[psu - 1]);
console.log(Factory.SSD);
const ssd = input("\n\nPick SSD id : ");
console.log("\n\n\n\n");
pc.getSSD(Factory.SSD[ssd - 1]);
console.log("\n\n\nYour builded PC :");
console.log(pc.buildedParts);