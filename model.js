"use strict";
class Part {
    constructor(brand, type, price) {
        this.brand = brand;
        this.type = type;
        this.price = price;
    }
}
//interface ChipToGPU, MainToGPU, ...
exports.PSU = class PSU extends Part {
};
exports.SSD = class SSD extends Part {
};
exports.GPU = class GPU extends Part {
};
exports.Ram = class Ram extends Part {
};
exports.Main = class Main extends Part {
    constructor(brand, type, socket, price) {
        super(brand, type, price);
        this.socket = socket;
    }
};
exports.Chip = class Chip extends Part {
    generate() {
        let r;
        switch (this.brand) {
            case "AMD":
                r = "A";
                break;
            case "INTEL": r = "L";
        }
        return r;
    }
};
