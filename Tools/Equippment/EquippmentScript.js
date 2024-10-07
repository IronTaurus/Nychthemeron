import { getArmor, getWeapons, getDiscomforts } from "./EquippmentList.js";
console.log("EquippmentScript.js loaded.");
var parentUrl = window.location.origin + "/Nychthemeron";

var eqp = document.querySelectorAll("div.weapon");
console.log(JSON.stringify(eqp));
document.querySelectorAll("div.weapon").forEach((weapon) => {
    weapon.addEventListener("change", loadWeapons);
});

let typeList = [];

function loadWeapons(event){
    const { target } = event;
  if (!typeList.find((e) => e === target.name)) {
    typeList.push(target.name);
    console.log("Pushed target name: " + target.name);
  } else {
    typeList = typeList.filter((w) => w !== target.name);
    console.log("Removed target name: " + target.name);
  }
  console.log(JSON.stringify(typeList));
  const baseTypes = ["Melee", "Ranged", "Magic"];
  createEquippmentElement(getWeapons(typeList, baseTypes, "weapon", []));
}

function createEquippmentElement(types, baseTypes, equipType) {
    let EquippmentList = document.getElementById("EquippmentList");
    //Resetting list of elements
    let child = featList.lastElementChild;
    while (child) {
        EquippmentList.removeChild(child);
      child = EquippmentList.lastElementChild;
    }

    baseTypes.forEach((type) => {
      const col = document.createElement("div");
      col.setAttribute("id", `${type}_col`);
      col.setAttribute("class", "equippmentCol");
      featList.appendChild(col);
    });

     //Create a div element for each feat of the chosen attribute.
  Object.values(types).forEach((e) => {
    var eDiv = document.createElement("div");
    eDiv.setAttribute("class", "equippmentRow");
    var baseDiv = document.createElement("div");
    baseDiv.style.display = "flex";
    var eDropBtn = document.createElement("button");
    eDropBtn.setAttribute("class", "dropDownBtn");
    eDropBtn.setAttribute("id", `${e.Id}_btn`);
    eDropBtn.innerHTML = `<img src="${parentUrl}/Art/icon_closed.png" style="height: 10px"/>`;
    eDropBtn.onclick = function () {
      showDiv(e.Id);
      return false;
    };
    baseDiv.appendChild(eDropBtn);
    var eTitle = document.createElement("h4");
    eTitle.setAttribute("class", "equippment-title");
    var titleTxt = document.createElement("text");
    titleTxt.textContent = e.Title;
    eTitle.appendChild(titleTxt);
    baseDiv.appendChild(eTitle);

    var eClass = document.createElement("text");
    eClass.setAttribute("class", "equippmentText");
    eClass.textContent = e.Class;
    var eInitativeMod = document.createElement("text");
    eInitativeMod.setAttribute("class", "equippmentText");
    eInitativeMod.textContent = e.InitativeModifier;
    var eMovementMod = document.createElement("text");
    eMovementMod.setAttribute("class", "equippmentText");
    eMovementMod.textContent = e.MovementModifier;
    //Add additional elemnts based on what type of equippment it is.
    if(equipType == "weapon"){
        var eDamage = document.createElement("text");
        eDamage.setAttribute("class", "equippmentText");
        eDamage.textContent = e.BaseDamage;
        var eDamageType = document.createElement("text");
        eDamageType.setAttribute("class", "equippmentText");
        eDamageType.textContent = e.DamageType;
        var eRange = document.createElement("text");
        eRange.setAttribute("class", "equippmentText");
        eRange.textContent = e.Range;
        var eReloadPenalty = document.createElement("text");
        eReloadPenalty.setAttribute("class", "equippmentText");
        eReloadPenalty.textContent = e.ReloadPenalty;
        var eSize = document.createElement("text");
        eSize.setAttribute("class", "equippmentText");
        eSize.textContent = e.Size;

        baseDiv.appendChild(titleTxt)
    }
}