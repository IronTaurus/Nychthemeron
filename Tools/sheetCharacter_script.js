var profileArt = document.getElementById("ProfileArt");
// var parentUrl = window.location.origin + "/Etharia_Wiki";
var parentUrl = window.location.origin + "";
const artHeight = profileArt.height;
const artWidth = profileArt.width;
var fNr = 0;
var eNr = 0;
// var bag1Nr = 0;
// var bag2Nr = 0;
var dmgTypeList = [
  "S: Slashing",
  "P: Piercing",
  "B: Bludgeon",
  "F: Fire",
  "C: Cold",
  "R: Radiant",
  "N: Necrotic",
  "T: Toxic",
];

function getDamageTypeInfo() {
  var typeList = [];
  typeList.push(document.createTextNode("S: Slashing"));
  typeList.push(document.createTextNode("P: Piercing"));
  typeList.push(document.createTextNode("B: Bludgeon"));
  typeList.push(document.createTextNode("F: Fire"));
  typeList.push(document.createTextNode("C: Cold"));
  typeList.push(document.createTextNode("R: Radiant"));
  typeList.push(document.createTextNode("N: Necrotic"));
  typeList.push(document.createTextNode("T: Toxic"));
  return typeList;
}

function getFeatures() {
  console.log("fNr is:" + fNr);
  if (fNr > 0) {
    var features = [];
    for (let index = 1; index <= fNr; index++) {
      const feature = {
        title: document.getElementById("f" + index + "_name").value,
        text: document.getElementById("f" + index + "_text").value,
      };
      features.push(feature);
    }
    return features;
  } else {
    return [];
  }
}

function getBagInventory(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  console.log("Entering " + bagId + " inventory...");
  console.log("Number in bag..." + bagNr);
  if (bagNr > 0) {
    var bagInventory = [];
    for (let index = 1; index <= bagNr; index++) {
      console.log("index..." + index + " out of " + bagNr);
      console.log(
        "The item is:" + document.getElementById(bag + "_item" + index)
      );
      console.log(
        "...item is of type: " +
          document.getElementById(bag + "_item" + index).getAttribute("tag") +
          " and is in bag..." +
          bag
      );
      if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "ranged"
      ) {
        const ranged = {
          tag: "ranged",
          name: document.getElementById(bag + index + "_name").value,
          type: document.getElementById(bag + index + "_type").value,
          hand: document.getElementById(bag + index + "_hand").value,
          dmg: document.getElementById(bag + index + "_dmg").value,
          dmgTypes: document.getElementById(bag + index + "_dmgTypes").value,
          range: document.getElementById(bag + index + "_range").value,
          initiative: document.getElementById(bag + index + "_init").value,
          reload: document.getElementById(bag + index + "_reload").value,
          penalty: document.getElementById(bag + index + "_penalty").value,
        };
        bagInventory.push(ranged);
      } else if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "melee"
      ) {
        const melee = {
          tag: "melee",
          name: document.getElementById(bag + index + "_name").value,
          type: document.getElementById(bag + index + "_type").value,
          hand: document.getElementById(bag + index + "_hand").value,
          dmg: document.getElementById(bag + index + "_dmg").value,
          dmgTypes: document.getElementById(bag + index + "_dmgTypes").value,
          range: document.getElementById(bag + index + "_range").value,
          initiative: document.getElementById(bag + index + "_init").value,
          penalty: document.getElementById(bag + index + "_penalty").value,
        };
        bagInventory.push(melee);
      } else if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "armor"
      ) {
        const armor = {
          tag: "armor",
          name: document.getElementById(bag + index + "_name").value,
          type: document.getElementById(bag + index + "_type").value,
          material: document.getElementById(bag + index + "_material").value,
          armor: document.getElementById(bag + index + "_armor").value,
          armInit: document.getElementById(bag + index + "_armInit").value,
          penalty: document.getElementById(bag + index + "_penalty").value,
        };
        bagInventory.push(armor);
      } else if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "item"
      ) {
        const item = {
          tag: "item",
          name: document.getElementById(bag + index + "_name").value,
          quantity: document.getElementById(bag + index + "_quantity").value,
        };
        bagInventory.push(item);
      } else if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "specialItem"
      ) {
        const specialItem = {
          tag: "specialItem",
          name: document.getElementById(bag + index + "_name").value,
          description: document.getElementById(bag + index + "_description")
            .value,
        };
        bagInventory.push(specialItem);
      } else if (
        document.getElementById(bag + "_item" + index).getAttribute("tag") ==
        "container"
      ) {
        const container = {
          tag: "container",
          name: document.getElementById(bag + index + "_name").value,
          description: document.getElementById(bag + index + "_description")
            .value,
        };
        bagInventory.push(container);
      }
    }
    return bagInventory;
  } else {
    return [];
  }
}

function createBagMeleeWeapon(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;

  const elementNr = bagNr;
  var bagList = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "melee");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Sword of Glory";

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = "Light";
  var hand = document.createElement("input");
  hand.setAttribute("type", "text");
  hand.setAttribute("class", "bag_smallDigit");
  hand.setAttribute("id", bag + elementNr + "_hand");
  hand.value = "1H";
  typeDiv.appendChild(hand);
  typeDiv.appendChild(type);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var dmgDiv = document.createElement("div");
  dmgDiv.setAttribute("class", "bagRow");

  var dmgImg = document.createElement("img");
  //   dmgImg.src = `${parentUrl}/Art/BaseDmg.png`;
  dmgImg.src = "../Art/BaseDmg.png";
  dmgImg.setAttribute("class", "bag_icons");
  dmgDiv.appendChild(dmgImg);

  var damage = document.createElement("input");
  damage.setAttribute("type", "text");
  damage.setAttribute("class", "bag_smallDigit");
  damage.setAttribute("id", bag + elementNr + "_dmg");
  damage.value = "2";
  dmgDiv.appendChild(damage);

  var damageType = document.createElement("input");
  damageType.setAttribute("type", "text");
  damageType.setAttribute("class", "b_dmgTypes");
  damageType.setAttribute("id", bag + elementNr + "_dmgTypes");
  damageType.value = "Slashing";
  damageType.onmouseenter = function () {
    console.log("Mouse Enter");
    var dmgTypeInfo = document.createElement("p");
    dmgTypeInfo.setAttribute("type", "text");
    dmgTypeInfo.setAttribute("class", "dmgTypesInfo");
    dmgTypeInfo.setAttribute("id", "dmgTypesInfo");
    dmgTypeList.forEach((element) => {
      dmgTypeInfo.appendChild(document.createTextNode(element));
      dmgTypeInfo.appendChild(document.createElement("br"));
    });
    dmgDiv.appendChild(dmgTypeInfo);
  };
  damageType.onmouseleave = function () {
    var dmgTypesElement = document.getElementById("dmgTypesInfo");
    dmgDiv.removeChild(dmgTypesElement);
  };

  dmgDiv.appendChild(damageType);
  itemInfo.appendChild(dmgDiv);
  //#endregion stats

  var rangeDiv = document.createElement("div");
  rangeDiv.setAttribute("class", "bagRow");
  var rangeTxt = document.createElement("p");
  rangeTxt.setAttribute("type", "text");
  rangeTxt.setAttribute("class", "b_attributeTitle");
  rangeTxt.textContent = "Range: ";
  rangeDiv.appendChild(rangeTxt);
  var range = document.createElement("input");
  range.setAttribute("type", "text");
  range.setAttribute("class", "bag_smallDigit");
  range.setAttribute("id", bag + elementNr + "_range");
  range.value = "1";
  rangeDiv.appendChild(range);
  itemInfo.appendChild(rangeDiv);

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var wepInitative = document.createElement("input");
  wepInitative.setAttribute("type", "text");
  wepInitative.setAttribute("class", "bag_smallDigit");
  wepInitative.setAttribute("id", bag + elementNr + "_init");
  wepInitative.value = "+0";
  bonusesDiv.appendChild(wepInitative);
  itemInfo.appendChild(bonusesDiv);

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "text");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.textContent = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode("-1 Inititive");
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  bagList.appendChild(equippment);
}
function createBagRangedWeapon(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;

  const elementNr = bagNr;
  console.log("The bag is..." + bag + " and the item number is..." + elementNr);
  var bagList = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "ranged");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Long Bow";

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = "Light";

  var hand = document.createElement("input");
  hand.setAttribute("type", "text");
  hand.setAttribute("class", "b_attribute");
  hand.setAttribute("id", bag + elementNr + "_hand");
  hand.value = "2H";
  typeDiv.appendChild(hand);
  typeDiv.appendChild(type);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var dmgDiv = document.createElement("div");
  dmgDiv.setAttribute("class", "bagRow");

  var dmgImg = document.createElement("img");
  //   dmgImg.src = `${parentUrl}/Art/BaseDmg.png`;
  dmgImg.src = "../Art/BaseDmg.png";
  dmgImg.setAttribute("class", "bag_icons");
  dmgDiv.appendChild(dmgImg);

  var damage = document.createElement("input");
  damage.setAttribute("type", "text");
  damage.setAttribute("class", "bag_smallDigit");
  damage.setAttribute("id", bag + elementNr + "_dmg");
  damage.value = "2";
  dmgDiv.appendChild(damage);

  var damageType = document.createElement("input");
  damageType.setAttribute("type", "text");
  damageType.setAttribute("class", "b_dmgTypes");
  damageType.setAttribute("id", bag + elementNr + "_dmgTypes");
  damageType.value = "Piercing";
  damageType.onmouseenter = function () {
    console.log("Mouse Enter");
    var dmgTypeInfo = document.createElement("p");
    dmgTypeInfo.setAttribute("type", "text");
    dmgTypeInfo.setAttribute("class", "dmgTypesInfo");
    dmgTypeInfo.setAttribute("id", "dmgTypesInfo");
    dmgTypeList.forEach((element) => {
      dmgTypeInfo.appendChild(document.createTextNode(element));
      dmgTypeInfo.appendChild(document.createElement("br"));
    });
    dmgDiv.appendChild(dmgTypeInfo);
  };
  damageType.onmouseleave = function () {
    var dmgTypesElement = document.getElementById("dmgTypesInfo");
    dmgDiv.removeChild(dmgTypesElement);
  };

  dmgDiv.appendChild(damageType);
  itemInfo.appendChild(dmgDiv);
  //#endregion stats

  var rangeDiv = document.createElement("div");
  rangeDiv.setAttribute("class", "bagRow");
  var rangeTxt = document.createElement("p");
  rangeTxt.setAttribute("type", "text");
  rangeTxt.setAttribute("class", "b_attributeTitle");
  rangeTxt.textContent = "Range: ";
  rangeDiv.appendChild(rangeTxt);
  var range = document.createElement("input");
  range.setAttribute("type", "text");
  range.setAttribute("class", "bag_smallDigit");
  range.setAttribute("id", bag + elementNr + "_range");
  range.value = "1";
  rangeDiv.appendChild(range);
  itemInfo.appendChild(rangeDiv);

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var wepInitative = document.createElement("input");
  wepInitative.setAttribute("type", "text");
  wepInitative.setAttribute("class", "bag_smallDigit");
  wepInitative.setAttribute("id", bag + elementNr + "_init");
  wepInitative.value = "+0";
  bonusesDiv.appendChild(wepInitative);

  var reloadTxt = document.createElement("p");
  reloadTxt.setAttribute("type", "text");
  reloadTxt.setAttribute("class", "b_attributeTitle");
  reloadTxt.textContent = "Reload Penalty: ";
  bonusesDiv.appendChild(reloadTxt);
  var reloadPenalty = document.createElement("input");
  reloadPenalty.setAttribute("type", "text");
  reloadPenalty.setAttribute("class", "bag_smallDigit");
  reloadPenalty.setAttribute("id", bag + elementNr + "_reload");
  reloadPenalty.value = "0";
  bonusesDiv.appendChild(reloadPenalty);
  itemInfo.appendChild(bonusesDiv);

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "text");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.textContent = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode("-1 Inititive");
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  bagList.appendChild(equippment);
}

function createBagArmor(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;

  const elementNr = bagNr;
  console.log("Enter create armor...");

  var bag1List = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "armor");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bag1List.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Armor of Demise";

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = "Heavy";
  typeDiv.appendChild(type);
  var material = document.createElement("input");
  material.setAttribute("type", "text");
  material.setAttribute("class", "b_armAttribute");
  material.setAttribute("id", bag + elementNr + "_material");
  material.value = "Scale Mail";
  typeDiv.appendChild(material);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var armDiv = document.createElement("div");
  armDiv.setAttribute("class", "bagRow");

  var armTxt = document.createElement("p");
  armTxt.setAttribute("type", "text");
  armTxt.setAttribute("class", "b_attributeTitle");
  armTxt.textContent = "Armor: ";
  armDiv.appendChild(armTxt);

  var armor = document.createElement("input");
  armor.setAttribute("type", "text");
  armor.setAttribute("class", "bag_smallDigit");
  armor.setAttribute("id", bag + elementNr + "_armor");
  armor.value = "2";
  armDiv.appendChild(armor);

  itemInfo.appendChild(armDiv);
  //#endregion stats

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var armInitative = document.createElement("input");
  armInitative.setAttribute("type", "text");
  armInitative.setAttribute("class", "bag_smallDigit");
  console.log("Bag id is..." + bag);
  armInitative.setAttribute("id", bag + elementNr + "_armInit");
  armInitative.value = "-2";
  console.log("armInit has value set to..." + armInitative.value);
  bonusesDiv.appendChild(armInitative);
  itemInfo.appendChild(bonusesDiv);

  var penaltiesDiv = document.createElement("div");
  penaltiesDiv.setAttribute("class", "bagRow");

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "text");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.textContent = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode("-1 Inititive");
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  bag1List.appendChild(equippment);
}
function createBagItem(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;
  console.log("The new element is of type: Item and is the number..." + bagNr);
  const elementNr = bagNr;
  var bagList = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "item");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    iNr--;
    return false;
  };
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_itemName");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Rations";
  title.appendChild(name);
  var quantityTxt = document.createElement("p");
  quantityTxt.setAttribute("type", "text");
  quantityTxt.setAttribute("class", "b_itemTitle");
  quantityTxt.textContent = "Qty: ";
  title.appendChild(quantityTxt);
  var quantity = document.createElement("input");
  quantity.setAttribute("type", "text");
  quantity.setAttribute("class", "bag_smallDigit");
  quantity.setAttribute("id", bag + elementNr + "_quantity");
  quantity.value = "2";
  title.appendChild(quantity);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  bagList.appendChild(equippment);
}
function createBagSpecialItem(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;
  const elementNr = bagNr;
  var bagList = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "specialItem");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Note from the Balrog";

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  var description = document.createElement("textarea");
  description.setAttribute("class", "b_penaltyText");
  description.setAttribute("id", "b1" + elementNr + "_description");
  var t = document.createTextNode("Write here...");
  description.appendChild(t);
  description.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(description);
  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  bagList.appendChild(equippment);
}
function createBagContainer(bag, bagId) {
  let bagNr = document.getElementById(bagId).children.length;
  bagNr++;

  const elementNr = bagNr;
  var bagList = document.getElementById(bagId);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "container");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = "Bag of Holding";

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  var description = document.createElement("textarea");
  description.setAttribute("class", "b_penaltyText");
  description.setAttribute("id", "b1" + elementNr + "_description");
  var t = document.createTextNode("Write here...");
  description.appendChild(t);
  description.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(description);
  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  bagList.appendChild(equippment);
}

function loadBag(info_Bag, bagId, bag) {
  console.log("Loading bag..." + bagId + "!");
  var bagList = document.getElementById(bagId);
  console.log(bagList);
  bagList.replaceChildren([]);
  let bagNr = document.getElementById(bagId).children.length;

  console.log(bagList);
  info_Bag?.forEach((element) => {
    bagNr++;
    if (element.tag == "melee") {
      bagList.appendChild(loadBagMeleeWeapon(bagNr, element, bagList, bag));
    } else if (element.tag == "ranged") {
      bagList.appendChild(loadBagRangedWeapon(bagNr, element, bagList, bag));
    } else if (element.tag == "armor") {
      bagList.appendChild(loadBagArmor(bagNr, element, bagList, bag));
    } else if (element.tag == "item") {
      bagList.appendChild(loadBagItem(bagNr, element, bagList, bag));
    } else if (element.tag == "specialItem") {
      bagList.appendChild(loadBagSpecialItem(bagNr, element, bagList, bag));
    } else if (element.tag == "container") {
      bagList.appendChild(loadBagContainer(bagNr, element, bagList, bag));
    }
  });
}

function loadBagMeleeWeapon(elementNr, element, bagList, bag) {
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "melee");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = element.type;
  var hand = document.createElement("input");
  hand.setAttribute("type", "text");
  hand.setAttribute("class", "b_attribute");
  hand.setAttribute("id", bag + elementNr + "_hand");
  hand.value = element.hand;
  typeDiv.appendChild(hand);
  typeDiv.appendChild(type);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var dmgDiv = document.createElement("div");
  dmgDiv.setAttribute("class", "bagRow");

  var dmgImg = document.createElement("img");
  //   dmgImg.src = `${parentUrl}/Art/BaseDmg.png`;
  dmgImg.src = "../Art/BaseDmg.png";
  dmgImg.setAttribute("class", "bag_icons");
  dmgDiv.appendChild(dmgImg);

  var damage = document.createElement("input");
  damage.setAttribute("type", "text");
  damage.setAttribute("class", "bag_smallDigit");
  damage.setAttribute("id", bag + elementNr + "_dmg");
  damage.value = element.dmg;
  dmgDiv.appendChild(damage);

  var damageType = document.createElement("input");
  damageType.setAttribute("type", "text");
  damageType.setAttribute("class", "b_dmgTypes");
  damageType.setAttribute("id", bag + elementNr + "_dmgTypes");
  damageType.value = element.dmgTypes;
  damageType.onmouseenter = function () {
    console.log("Mouse Enter");
    var dmgTypeInfo = document.createElement("p");
    dmgTypeInfo.setAttribute("type", "text");
    dmgTypeInfo.setAttribute("class", "dmgTypesInfo");
    dmgTypeInfo.setAttribute("id", "dmgTypesInfo");

    dmgTypeList.forEach((element) => {
      dmgTypeInfo.appendChild(document.createTextNode(element));
      dmgTypeInfo.appendChild(document.createElement("br"));
    });

    dmgDiv.appendChild(dmgTypeInfo);
  };
  damageType.onmouseleave = function () {
    var dmgTypesElement = document.getElementById("dmgTypesInfo");
    dmgDiv.removeChild(dmgTypesElement);
  };

  dmgDiv.appendChild(damageType);
  itemInfo.appendChild(dmgDiv);
  //#endregion stats

  var rangeDiv = document.createElement("div");
  rangeDiv.setAttribute("class", "bagRow");
  var rangeTxt = document.createElement("p");
  rangeTxt.setAttribute("type", "text");
  rangeTxt.setAttribute("class", "b_attributeTitle");
  rangeTxt.textContent = "Range: ";
  rangeDiv.appendChild(rangeTxt);
  var range = document.createElement("input");
  range.setAttribute("type", "text");
  range.setAttribute("class", "bag_smallDigit");
  range.setAttribute("id", bag + elementNr + "_range");
  range.value = element.range;
  rangeDiv.appendChild(range);
  itemInfo.appendChild(rangeDiv);

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var wepInitative = document.createElement("input");
  wepInitative.setAttribute("type", "text");
  wepInitative.setAttribute("class", "bag_smallDigit");
  wepInitative.setAttribute("id", bag + elementNr + "_init");
  wepInitative.value = element.initiative;
  bonusesDiv.appendChild(wepInitative);
  itemInfo.appendChild(bonusesDiv);

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "text");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.value = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode(element.penalty);
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  return equippment;
}
function loadBagRangedWeapon(elementNr, element, bagList, bag) {
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "ranged");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;
  title.appendChild(name);

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = element.type;
  var hand = document.createElement("input");
  hand.setAttribute("type", "text");
  hand.setAttribute("class", "b_attribute");
  hand.setAttribute("id", bag + elementNr + "_hand");
  hand.value = element.hand;
  typeDiv.appendChild(hand);
  typeDiv.appendChild(type);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var dmgDiv = document.createElement("div");
  dmgDiv.setAttribute("class", "bagRow");

  var dmgImg = document.createElement("img");
  //   dmgImg.src = `${parentUrl}/Art/BaseDmg.png`;
  dmgImg.src = "../Art/BaseDmg.png";
  dmgImg.setAttribute("class", "bag_icons");
  dmgDiv.appendChild(dmgImg);

  var damage = document.createElement("input");
  damage.setAttribute("type", "text");
  damage.setAttribute("class", "bag_smallDigit");
  damage.setAttribute("id", bag + elementNr + "_dmg");
  damage.value = element.dmg;
  dmgDiv.appendChild(damage);

  var damageType = document.createElement("input");
  damageType.setAttribute("type", "text");
  damageType.setAttribute("class", "b_dmgTypes");
  damageType.setAttribute("id", bag + elementNr + "_dmgTypes");
  damageType.value = element.dmgTypes;
  damageType.onmouseenter = function () {
    console.log("Mouse Enter");
    var dmgTypeInfo = document.createElement("p");
    dmgTypeInfo.setAttribute("type", "text");
    dmgTypeInfo.setAttribute("class", "dmgTypesInfo");
    dmgTypeInfo.setAttribute("id", "dmgTypesInfo");
    dmgTypeList.forEach((element) => {
      dmgTypeInfo.appendChild(document.createTextNode(element));
      dmgTypeInfo.appendChild(document.createElement("br"));
    });
    dmgDiv.appendChild(dmgTypeInfo);
  };
  damageType.onmouseleave = function () {
    var dmgTypesElement = document.getElementById("dmgTypesInfo");
    dmgDiv.removeChild(dmgTypesElement);
  };

  dmgDiv.appendChild(damageType);
  itemInfo.appendChild(dmgDiv);
  //#endregion stats

  var rangeDiv = document.createElement("div");
  rangeDiv.setAttribute("class", "bagRow");
  var rangeTxt = document.createElement("p");
  rangeTxt.setAttribute("type", "text");
  rangeTxt.setAttribute("class", "b_attributeTitle");
  rangeTxt.textContent = "Range: ";
  rangeDiv.appendChild(rangeTxt);
  var range = document.createElement("input");
  range.setAttribute("type", "text");
  range.setAttribute("class", "bag_smallDigit");
  range.setAttribute("id", bag + elementNr + "_range");
  range.value = element.range;
  rangeDiv.appendChild(range);
  itemInfo.appendChild(rangeDiv);

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var wepInitative = document.createElement("input");
  wepInitative.setAttribute("type", "text");
  wepInitative.setAttribute("class", "bag_smallDigit");
  wepInitative.setAttribute("id", bag + elementNr + "_init");
  wepInitative.value = element.initiative;
  bonusesDiv.appendChild(wepInitative);

  var reloadTxt = document.createElement("p");
  reloadTxt.setAttribute("type", "text");
  reloadTxt.setAttribute("class", "b_attributeTitle");
  reloadTxt.textContent = "Reload Penalty: ";
  bonusesDiv.appendChild(reloadTxt);
  var reloadPenalty = document.createElement("input");
  reloadPenalty.setAttribute("type", "text");
  reloadPenalty.setAttribute("class", "bag_smallDigit");
  reloadPenalty.setAttribute("id", bag + elementNr + "_reload");
  reloadPenalty.value = element.reload;
  bonusesDiv.appendChild(reloadPenalty);
  itemInfo.appendChild(bonusesDiv);

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "textarea");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.value = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode(element.penalty);
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  return equippment;
}
function loadBagArmor(elementNr, element, bagList, bag) {
  console.log("Armor element number is..." + elementNr);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "armor");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    console.log("Element number is..." + elementNr);
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  //#region type
  var typeDiv = document.createElement("div");
  typeDiv.setAttribute("class", "bagRow");

  var typeTxt = document.createElement("p");
  typeTxt.setAttribute("type", "text");
  typeTxt.setAttribute("class", "b_attributeTitle");
  typeTxt.textContent = "Type: ";
  typeDiv.appendChild(typeTxt);

  var type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("class", "b_attribute");
  type.setAttribute("id", bag + elementNr + "_type");
  type.value = element.type;
  typeDiv.appendChild(type);
  var material = document.createElement("input");
  material.setAttribute("type", "text");
  material.setAttribute("class", "b_armAttribute");
  material.setAttribute("id", bag + elementNr + "_material");
  material.value = element.material;
  typeDiv.appendChild(material);
  itemInfo.appendChild(typeDiv);
  //#endregion type

  //#region stats
  var armDiv = document.createElement("div");
  armDiv.setAttribute("class", "bagRow");

  var armTxt = document.createElement("p");
  armTxt.setAttribute("type", "text");
  armTxt.setAttribute("class", "b_attributeTitle");
  armTxt.textContent = "Armor: ";
  armDiv.appendChild(armTxt);

  var armor = document.createElement("input");
  armor.setAttribute("type", "text");
  armor.setAttribute("class", "bag_smallDigit");
  armor.setAttribute("id", bag + elementNr + "_armor");
  armor.value = element.armor;
  armDiv.appendChild(armor);

  itemInfo.appendChild(armDiv);
  //#endregion stats

  var bonusesDiv = document.createElement("div");
  bonusesDiv.setAttribute("class", "bagRow");

  var initiativeTxt = document.createElement("p");
  initiativeTxt.setAttribute("type", "text");
  initiativeTxt.setAttribute("class", "b_attributeTitle");
  initiativeTxt.textContent = "Initative: ";
  bonusesDiv.appendChild(initiativeTxt);
  var armInitative = document.createElement("input");
  armInitative.setAttribute("type", "text");
  armInitative.setAttribute("class", "bag_smallDigit");
  armInitative.setAttribute("id", bag + elementNr + "_armInit");
  armInitative.value = element.armInit;
  bonusesDiv.appendChild(armInitative);
  itemInfo.appendChild(bonusesDiv);

  var penaltiesDiv = document.createElement("div");
  penaltiesDiv.setAttribute("class", "bagRow");

  var penaltyTitle = document.createElement("p");
  penaltyTitle.setAttribute("type", "text");
  penaltyTitle.setAttribute("class", "b_attributeTitle");
  penaltyTitle.textContent = "Penalties: ";
  itemInfo.appendChild(penaltyTitle);
  var penalty = document.createElement("textarea");
  penalty.setAttribute("class", "b_penaltyText");
  penalty.setAttribute("id", bag + elementNr + "_penalty");
  var t = document.createTextNode(element.penalty);
  penalty.appendChild(t);
  penalty.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(penalty);

  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  return equippment;
}
function loadBagItem(elementNr, element, bagList, bag) {
  console.log("Item element number is..." + elementNr);
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "item");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  //#region button
  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = "-";
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };

  //#endregion button
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_itemName");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;
  title.appendChild(name);
  var quantityTxt = document.createElement("p");
  quantityTxt.setAttribute("type", "text");
  quantityTxt.setAttribute("class", "b_itemTitle");
  quantityTxt.textContent = "Qty: ";
  title.appendChild(quantityTxt);
  var quantity = document.createElement("input");
  quantity.setAttribute("type", "text");
  quantity.setAttribute("class", "bag_smallDigit");
  quantity.setAttribute("id", bag + elementNr + "_quantity");
  quantity.value = element.quantity;
  title.appendChild(quantity);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  return equippment;
}
function loadBagSpecialItem(elementNr, element, bagList, bag) {
  console.log("Loading special item...");

  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "specialItem");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  var description = document.createElement("textarea");
  description.setAttribute("class", "b_penaltyText");
  description.setAttribute("id", bag + elementNr + "_description");
  var t = document.createTextNode(element.description);
  description.appendChild(t);
  description.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(description);
  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  return equippment;
}
function loadBagContainer(elementNr, element, bagList, bag) {
  var equippment = document.createElement("div");
  equippment.setAttribute("tag", "container");
  equippment.setAttribute("class", "item");
  equippment.setAttribute("id", bag + "_item" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "b_title");

  var btn = document.createElement("button");
  btn.setAttribute("class", "b_button");
  btn.setAttribute("id", bag + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showDiv(bag, elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "b_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById(bag + "_item" + elementNr);
    bagList.removeChild(removableElement);
    return false;
  };
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("class", "b_name");
  name.setAttribute("id", bag + elementNr + "_name");
  name.value = element.name;

  var itemInfo = document.createElement("div");
  itemInfo.setAttribute("id", bag + elementNr + "_info");
  itemInfo.setAttribute("class", "b_info_div");

  var description = document.createElement("textarea");
  description.setAttribute("class", "b_penaltyText");
  description.setAttribute("id", "b1" + elementNr + "_description");
  var t = document.createTextNode(element.description);
  description.appendChild(t);
  description.oninput = function () {
    auto_grow(this);
  };
  itemInfo.appendChild(description);
  title.appendChild(btn);
  title.appendChild(name);
  title.appendChild(btnRemove);
  equippment.appendChild(title);
  equippment.appendChild(itemInfo);
  return equippment;
}

function loadFeatures(infoFeatures) {
  var featureList = document.getElementById("info_Features");
  featureList.replaceChildren([]);
  fNr = 0;
  infoFeatures?.forEach((element) => {
    fNr++;
    const elementNr = fNr;
    console.log("element: " + elementNr);
    var feature = document.createElement("div");
    feature.setAttribute("id", "feature" + elementNr);
    feature.setAttribute("class", "feature");
    var title = document.createElement("div");
    title.setAttribute("id", "f" + elementNr + "_title");
    var txt = document.createElement("input");
    txt.value = element.title;
    txt.setAttribute("class", "f_name");
    txt.setAttribute("id", "f" + elementNr + "_name");
    var txtArea = document.createElement("textarea");
    var t = document.createTextNode(element.text);
    txtArea.appendChild(t);
    txtArea.setAttribute("id", "f" + elementNr + "_text");
    txtArea.setAttribute("class", "f_txtArea");
    txtArea.oninput = function () {
      auto_grow(this);
    };
    var btn = document.createElement("button");
    btn.setAttribute("class", "f_button");
    btn.setAttribute("id", "f" + elementNr + "_btn");
    btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
    btn.onclick = function () {
      showText(elementNr);
      auto_grow(txtArea);
      return false;
    };
    var btnRemove = document.createElement("button");
    btnRemove.setAttribute("class", "f_button");
    btnRemove.setAttribute("id", "btn_remove");
    btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
    btnRemove.onclick = function () {
      var removableElement = document.getElementById("feature" + elementNr);
      featureList.removeChild(removableElement);
      fNr--;
      return false;
    };

    title.appendChild(btn);
    title.appendChild(txt);
    title.appendChild(btnRemove);
    feature.appendChild(title);
    feature.appendChild(txtArea);
    featureList.appendChild(feature);
    listCharacter.push(txtArea);

    auto_grow(txtArea);
  });
}

function createFeature() {
  fNr++;
  const elementNr = fNr;
  var featureList = document.getElementById("info_Features");
  var feature = document.createElement("div");
  feature.setAttribute("class", "feature");
  feature.setAttribute("id", "feature" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "f_title");

  var txtArea = document.createElement("textarea");
  var t = document.createTextNode("Write here...");
  txtArea.appendChild(t);
  txtArea.setAttribute("id", "f" + elementNr + "_text");
  txtArea.setAttribute("class", "f_txtArea");
  txtArea.oninput = function () {
    auto_grow(this);
  };
  var btn = document.createElement("button");
  btn.setAttribute("class", "f_button");
  btn.setAttribute("id", "f" + elementNr + "_btn");
  btn.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
  btn.onclick = function () {
    showText(elementNr);
    return false;
  };
  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "f_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = `<img src="${parentUrl}/Art/icon_remove.png"/>`;
  btnRemove.onclick = function () {
    var removableElement = document.getElementById("feature" + elementNr);
    featureList.removeChild(removableElement);
    fNr--;
    return false;
  };
  var txt = document.createElement("input");
  txt.setAttribute("type", "text");
  txt.setAttribute("class", "f_name");
  txt.setAttribute("id", "f" + elementNr + "_name");
  txt.value = "Title";
  title.appendChild(btn);
  title.appendChild(txt);
  title.appendChild(btnRemove);
  feature.appendChild(title);
  feature.appendChild(txtArea);
  featureList.appendChild(feature);
}

function showText(id) {
  console.log(id);
  var textElement = document.getElementById("f" + id + "_text");
  var buttonElement = document.getElementById("f" + id + "_btn");
  console.log("f" + id + "_text");

  if (textElement.style.display === "none") {
    buttonElement.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;

    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
    buttonElement.innerHTML = `<img src="${parentUrl}/Art/icon_closed.png" style="height: 10px"/>`;
  }
}
function showDiv(tag, id) {
  console.log(tag + id + "_info");
  var divElement = document.getElementById(tag + id + "_info");
  console.log(divElement);
  var buttonElement = document.getElementById(tag + id + "_btn");

  if (divElement.style.display === "none") {
    console.log("div is closed -> now opens");
    buttonElement.innerHTML = `<img src="${parentUrl}/Art/icon_opened.png" style="height: 10px"/>`;
    divElement.style.display = "block";
  } else {
    console.log("div is open -> now closes");
    divElement.style.display = "none";
    buttonElement.innerHTML = `<img src="${parentUrl}/Art/icon_closed.png" style="height: 10px"/>`;
  }
}

function Resize(slider) {
  console.log("Resize");
  const resizeNumber = {
    1: 0.4,
    2: 0.55,
    3: 0.7,
    4: 0.85,
    5: 1,
    6: 1.2,
    7: 1.4,
    8: 1.6,
    9: 2,
    10: 2.2,
  };
  console.log(slider);
  let resizeValue = resizeNumber[slider];
  console.log("art height:" + artHeight);
  console.log("art width:" + artWidth);
  console.log("height:" + profileArt.height);
  console.log("width:" + profileArt.width);
  console.log(resizeValue);

  profileArt.style.height = artHeight * resizeValue + "px";
  profileArt.style.width = artWidth * resizeValue + "px";
  console.log("height:" + profileArt.height);
  console.log("width:" + profileArt.width);
  profileArt.src = profileArt.src;
}
