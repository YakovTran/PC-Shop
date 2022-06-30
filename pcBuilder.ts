export default class PCBuilder {
    buildedParts : any = []
    constructor(){
        this.buildedParts = []
    }

    getMain(main : {}){
        this.buildedParts.push(main)
    }
    getChip(chip : {}){
        this.buildedParts.push(chip)
    }
    getRam(ram : {}){
        this.buildedParts.push(ram)
    }
    getPSU(psu : {}){
        this.buildedParts.push(psu)
    }
    getGPU(gpu : {}){
        this.buildedParts.push(gpu)
    }
    getSSD(ssd : {}){
        this.buildedParts.push(ssd)
    }
}


