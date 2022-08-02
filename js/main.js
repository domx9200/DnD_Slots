var currentItemType = itemType.types.weapon;
var currentRarity = 0

function test(){
    
    let items = new Map();
    let colors = new Map();
    colors[colorList.colors.red] = "testing";
    colors[colorList.colors.blue] = "testing blue";
    items[itemType.types.weapon] = colors;
    items[itemType.types.armor] = colors;
    
    tst = new gem("fire", 3, 1, items);
    console.log(tst);
    armor = new item(itemType.types.armor, 4, 0.7);
    weapon = new item(itemType.types.weapon, 2, 0.3);
    console.log(armor);
    console.log(weapon);
}

function changeItemType(newType){
    if(newType == itemType.types.accessory){
        document.getElementById("rarityList").setAttribute("disabled", "");
    } else {
        document.getElementById("rarityList").removeAttribute("disabled");
    }
    currentItemType = newType;
}

function changeRarity(newRarity){
    currentRarity = Number(newRarity);
}

function generateItem(){
    newItem = undefined;
    if(currentItemType == itemType.types.weapon || currentItemType == itemType.types.staff)
        newItem = new item(currentItemType, currentRarity, 0.3);
    else if(currentItemType == itemType.types.armor)
        newItem = new item(currentItemType, currentRarity, 0.7);
    else if(currentItemType == itemType.types.wonderous)
        newItem = new item(currentItemType, currentRarity, 0.5);
    else
        newItem = new item(currentItemType, 0, 1, [new Slot(currentItemType, colorList.colors.green)]);
    console.log(newItem);
}

function generateRandomItem(){
    itemTypeKeys = Object.keys(itemType.types);
    type = itemType.types[itemTypeKeys[itemTypeKeys.length * Math.random() << 0]];
    if(type == itemType.types.accessory)
        newItem = new item(type, 0, 1, [new Slot(currentItemType, colorList.colors.green)]);
    else
        newItem = new item(type, 5 * Math.random() << 0, itemRates.rates[type]);
    console.log(newItem);
}