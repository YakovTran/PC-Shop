const MakePart = require('./model')

var ramList : any  = []
var mainList : any = []
var chipList : any = []
var ssdList : any = []
var psuList : any = []
var gpuList : any = []

mainList.push(new MakePart.Main("ASUS", "CROSSHAIR VI HERO", "A/L",252))
mainList.push(new MakePart.Main("ASUS", "PRIME X370-PRO", "A/L",130))
mainList.push(new MakePart.Main("ASUS", "970 PRO GAMING/AURA", "A",255))
mainList.push(new MakePart.Main("ASUS", "CROSSHAIR V FORMULA-Z","A",144))
mainList.push(new MakePart.Main("ASUS", "Z170 PRO GAMING","L",139))
mainList.push(new MakePart.Main("ASUS", "Z170-A","L",150))
mainList.push(new MakePart.Main("GIGABYTE", "AB350-Gaming 3-CF", "A/L",125))
mainList.push(new MakePart.Main("GIGABYTE", "Z170X-Gaming 7","A/L",200))
mainList.push(new MakePart.Main("MSI", "970 GAMING","A/L",345))
mainList.push(new MakePart.Main("MSI", "B350 TOMAHAWK","A/L",300))

chipList.push(new MakePart.Chip("AMD", "Ryzen 5 5600X",178))
chipList.push(new MakePart.Chip("AMD", "Ryzen 7 5800X",380))
chipList.push(new MakePart.Chip("AMD", "Ryzen 9 5900X",416))
chipList.push(new MakePart.Chip("INTEL", "Core i5-8250U",200))
chipList.push(new MakePart.Chip("INTEL", "Core i5-12600K",280))
chipList.push(new MakePart.Chip("INTEL", "Core i7-8750H",395))
chipList.push(new MakePart.Chip("INTEL", "Core i7-12700KF",378))
chipList.push(new MakePart.Chip("INTEL", "Core i9-9900K",607))
chipList.push(new MakePart.Chip("INTEL", "Core i9-12900K",590))


gpuList.push(new MakePart.GPU("NVIDIA", "GeForce RTX 2060",350))
gpuList.push(new MakePart.GPU("NVIDIA", "GeForce GTX 1070 Ti",400))
gpuList.push(new MakePart.GPU("NVIDIA", "GeForce GTX 1080",600))
gpuList.push(new MakePart.GPU("NVIDIA", "GeForce RTX 3070",500))
gpuList.push(new MakePart.GPU("AMD", "Radeon RX 6600",330))
gpuList.push(new MakePart.GPU("AMD", "Radeon RX 5700",350))
gpuList.push(new MakePart.GPU("AMD", "Radeon RX 6700 XT",480))
gpuList.push(new MakePart.GPU("AMD", "Radeon VII",700))

ramList.push(new MakePart.Ram("CORSAIR", "Vengeance RGB Pro LED 16GB",85))
ramList.push(new MakePart.Ram("CORSAIR", "Vengeance LPX 32GB",125))
ramList.push(new MakePart.Ram("PARTIOT", "Viper Elite 8GB",35))
ramList.push(new MakePart.Ram("PARTIOT", "Viper Steel 16GB",100))
ramList.push(new MakePart.Ram("GSKILL", "TridentZ RGB 16GB",78))
ramList.push(new MakePart.Ram("GSKILL", "Trident Z5 RGB Series 32GB",200))

ssdList.push(new MakePart.SSD("SAMSUNG","870 EVO 500GB",65))
ssdList.push(new MakePart.SSD("SAMSUNG","980 EVO 1TB",100))

psuList.push(new MakePart.PSU("CORSAIR","RMX 750W",135))
psuList.push(new MakePart.PSU("CORSAIR","RMX 850W",140))

class Factory{
    Mains = []
    Chips = []
    GPUs = []
    Rams = []
    PSUs = []
    SSDs = []

    constructor ( m : [] , c : [], g : [], r : [],p : [],s :[]){
        this.Mains = m
        this.Chips = c
        this.GPUs = g
        this.Rams = r
        this.PSUs = p
        this.SSDs = s
    }
}

module.exports = new Factory(mainList, chipList, gpuList, ramList,psuList,ssdList)



