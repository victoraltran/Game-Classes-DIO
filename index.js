class hero{
    constructor(name, age, type){
        this.age = age;
        this.name = name;
        this.type = type;
    }

    attack(){
        if(this.type == "mago"){
            console.log(`O ${this.type} ${this.name} atacou usando magia`);
        } else if(this.type == "guerreiro"){
            console.log(`O ${this.type} ${this.name} atacou usando espada`);
        } else if(this.type == "monge"){
            console.log(`O ${this.type} ${this.name} atacou usando artes marciais`);
        } else if(this.type == "ninja"){
            console.log(`O ${this.type} ${this.name} atacou usando shuriken`);
        }
    }
}

let firstHero = new hero("Victor", "20", "ninja");
firstHero.attack();

let secondHero = new hero("Pedro", "3", "guerreiro");
secondHero.attack();