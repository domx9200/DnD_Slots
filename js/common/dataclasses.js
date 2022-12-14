//itemType is a dataclass to make adding item types easier
class itemType {
    static types = {"weapon":"weapon", "armor":"armor", "accessory":"accessory", "wonderous":"wonderous", "staff":"staff"};

    static validateItem(input){
        if(this.types[input] !== undefined){
            return true;
        }
        return false;
    }
}

class dice {
    static types = {
        4:"d4",
        6:"d6",
        8:"d8",
        10:"d10",
        12:"d12",
        20:"d20",
        100:"d100"
    }

    static validateDieType(input){
        return this.types[input] != undefined ? true : false;
    }
}

class damageTypes {
    static types = {
        "slashing":"slashing",
        "bludgeoning":"bludgeoning",
        "piercing":"piercing"
    }

    static validateDamageType(input){
        return this.types[input] != undefined ? true : false;
    }
}

class itemRates {
    static rates = {"weapon":0.3, "armor":0.7, "accessory":1, "wonderous":0.5, "staff": 0.3}
}

class rarityList {
    static rarities = {0:"common", 1:"uncommon", 2:"rare", 3:"very rare", 4:"legendary"}
}

//slotColor is a dataclass to make adding colors to slots and gems easier
class colorList {
    static colors = {"red":"red" , "blue":"blue", "green":"green"};

    static validateColor(input){
        if(this.colors[input] !== undefined){
            return true;
        }
        return false;
    }

    // randomColor takes in a rate to represent how often the first color will show up
    static randomColor(rate = 0.5, clrs = [this.colors.blue, this.colors.red]){
        if(clrs.length != 2){
            console.log("input of clrs in randomColor must be 2.");
            return null;
        }
        return (Math.random() <= rate) ? clrs[0] : clrs[1];
    }
}

class gemList {
    static list = [];

}