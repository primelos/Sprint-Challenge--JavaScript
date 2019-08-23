// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker1{
    constructor (attributes){
        this.length = attributes.length;
        this.width  = attributes.width;
        this.height = attributes.height;
}
volume(){
    return this.length * this.width * this.height
}
surfaceArea (){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}
class Cube extends CuboidMaker1 {
    constructor(childAttr){
        super(childAttr);
    }
cubeVolume(){
    return this.length * this.width * this.height
    }
}

let cuboid1 = new CuboidMaker1({
    length: 4, 
    width: 5, 
    height: 5,
})
let cuboid2 = new Cube({
    length: 5, 
    width: 8, 
    height: 7,
})
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130
console.log(cuboid2.cubeVolume())


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using 
// the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.