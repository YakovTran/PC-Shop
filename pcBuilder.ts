const Factory = require('./factory')

export default class PCBuilder {
    buildedParts : any = []
    constructor(){
        this.buildedParts = []
    }

    start(){
        for (let i =0; i < Factory.Mains.length; i++){
            Factory.Mains[i].id = i + 1
        }
        for (let i =0; i < Factory.Chips.length; i++){
            Factory.Chips[i].id = i + 1
        }
        for (let i =0; i < Factory.Rams.length; i++){
            Factory.Rams[i].id = i + 1
        }
        for (let i =0; i < Factory.PSUs.length; i++){
            Factory.PSUs[i].id = i + 1
        }
        for (let i =0; i < Factory.SSDs.length; i++){
            Factory.SSDs[i].id = i + 1
        }
        for (let i =0; i < Factory.GPUs.length; i++){
            Factory.GPUs[i].id = i + 1
        }
        
        console.log(Factory.Mains)
    }

    getMain(i : number){
        this.buildedParts.push(Factory.Mains[i])
        console.log(Factory.Chips.filter((chip: { generate: () => any; }) => Factory.Mains[i].socket.includes(chip.generate())))
    }
    getChip(i : number){
        this.buildedParts.push(Factory.Chips[i])
        console.log(Factory.GPUs)
    }
    getGPU(i : number){
        this.buildedParts.push(Factory.GPUs[i])
        console.log(Factory.Rams)
    }
    getRam(i : number){
        this.buildedParts.push(Factory.Rams[i])
        console.log(Factory.PSUs)
    }
    getPSU(i : number){
        this.buildedParts.push(Factory.PSUs[i])
        console.log(Factory.SSDs)
    }
    getSSD(i : number){
        this.buildedParts.push(Factory.SSDs[i])
    }
}


