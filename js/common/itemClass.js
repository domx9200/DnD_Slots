class item {
    // type: itemType, is primarily used to denote what gems can and cannot be placed on this item (currently not used)
    // rarity: integer, defines the rarity of the item, usually also defining the slots on it. 0 = common, 4 = legendary
    // rate: float, defines how likely the first color (blue), is to be randomly generated. accessories will have a seperate class.
    // slots: array, is the list of slots on the item, either can be pre-generated by the user, or will generate if no input given.
    constructor(type, rarity = 0, rate = 0.5, slots = []){
        this.setType(type);
        this.setRarity(rarity);
        this.setRate(rate);
        this.setSlots(slots);
    }

    setType(type){
        if(!itemType.validateItem(type)){
            console.log("item.setType: provided itemType is not valid. defaulting to weapon.");
            this.type = itemType.type.weapon;
            return false;
        }
        this.type = type;
        return true;
    }

    setRarity(rarity){
        if(typeof(rarity) != "number"){
            console.log("item.setRarity: provided rarity isn't a number. defaulting to 0.");
            this.rarity = 0;
        } else if(rarity > 4 || rarity < 0){
            console.log("item.setRarity: rarity must be a number between 0 and 4. defaulting to 0.");
            this.rarity = 0;
        } else {
            this.rarity = Math.round(rarity);
        }
    }

    setRate(rate){
        if(typeof(rate) != "number"){
            console.log("item.setRate: provided rate is not a number. defaulting to 0.5.");
            this.rate = 0.5;
        } else if(rate > 1 || rate < 0){
            console.log("item.setRate: rate must be a number between 0 and 1. defauling to 0.5");
            this.rate = 0.5;
        } else {
            this.rate = rate;
        }
    }

    setSlots(slots){
        if(toString.call(slots) !== "[object Array]"){
            console.log("item.setSlots: provided slots is not an array. generating slots based on rarity.");
            this.slots = [];
            for(let i = 0; i < this.rarity + 1; i++){
                this.slots.push(new Slot(this.type, colorList.randomColor(this.rate)));
            }
        } else if(slots.length == 0) {
            this.slots = [];
            for(let i = 0; i < this.rarity + 1; i++){
                this.slots.push(new Slot(this.type, colorList.randomColor(this.rate)));
            }
        } else {
            this.slots = slots;
        }
    }
}

class weapon extends item {
    constructor(name, dieType = dice.types[4], numberToRoll = 1, damageType = damageTypes.types.slashing, rarity = 0, slots = []){
        super(itemType.types.weapon, rarity, itemRates.rates.weapon, slots);
        this.name = name;
        this.dieType = dice.validateDieType(dieType) ? dieType : dice.types[4];
        this.numToRoll = numberToRoll;
        this.damageType = damageTypes.validateDamageType(damageType) ? damageType : damageTypes.types.slashing;
        this.itemHtml = document.createElement("div");
    }

    updateHTML(){
        this.itemHtml = document.createElement("div");
        this.itemHtml.setAttribute("class", "generatedItem");
        this.itemHtml.innerHTML = "type: " + this.type + "<br>weapon: " + this.name + "<br>rarity: " + rarityList.rarities[this.rarity] +
                                  "<br>damage type: " + this.damageType + "<br>dice: " + this.numToRoll + dice.types[this.dieType] + "<br>" + this.slots;
    }
}