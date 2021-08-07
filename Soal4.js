class Animal {
    constructor(name,isMammal){
        this.name = name,
        this.isMammal = isMammal
    }
}
class Frog extends Animal {
    constructor (name,isMammal){
        super(name, isMammal)
    }
    jump(){
        console.log(`${this.name} bersuara hop hop`);
    }
}
class Ape extends Animal {
    constructor(name, isMammal){
        super(name, isMammal)
    }
    yell(){
        console.log(`${this.name} bersuara auoo`);
    }
}
let myFrog = new Frog ('ebi', true)
myFrog.jump()
console.log(myFrog);

let myApe = new Ape ('lala', false)
myApe.yell()
console.log(myApe);