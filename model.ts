abstract class Part {
    brand: string
    type: string
    price : number
    constructor(brand : string, type : string, price : number){
        this.brand = brand
        this.type = type
        this.price = price
    }
}

interface Integration{}

interface ChipToMainIntegration extends Integration {
    generate() : any
}

//interface ChipToGPU, MainToGPU, ...

exports.PSU = class PSU extends Part{}
exports.SSD = class SSD extends Part{}
exports.GPU = class GPU extends Part{}
exports.Ram = class Ram extends Part{}


exports.Main = class Main extends Part {
    socket : string

    constructor (brand : string, type : string, socket : string, price: number){
        super(brand, type, price)
        this.socket = socket
    }
}

exports.Chip = class Chip extends Part implements ChipToMainIntegration {
    generate() {
        let r
        switch (this.brand){
            case "AMD" : r = "A"
            break
            case "INTEL" : r = "L"
        }
        return r
    }
}

