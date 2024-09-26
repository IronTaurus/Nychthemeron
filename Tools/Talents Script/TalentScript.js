import { getFeats } from "./TalentList.js";
console.log("TalentScript.js loaded.");
var parentUrl = window.location.origin + "/Nychthemeron";

var attr = document.querySelectorAll("div.attribute");
console.log(JSON.stringify(attr));
document.querySelectorAll("div.attribute").forEach((attribute) => {
  attribute.addEventListener("change", loadFeats);
});

let typeList = [];

function loadFeats(event) {
  const { target } = event;
  if (!typeList.find((f) => f === target.name)) {
    typeList.push(target.name);
    console.log("Pushed target name: " + target.name);
  } else {
    typeList = typeList.filter((f) => f !== target.name);
    console.log("Removed target name: " + target.name);
  }
  console.log(JSON.stringify(typeList));

  createFeatElement(getFeats(typeList, []));
}
function createFeatElement(feats) {
  let featList = document.getElementById("FeatList");
  //Resetting list of elements
  let child = featList.lastElementChild;
  while (child) {
    featList.removeChild(child);
    child = featList.lastElementChild;
  }
  const baseTypes = ["Basic", "Body", "Agility", "Mind", "Mystic", "Presence"];
  baseTypes.forEach((type) => {
    const col = document.createElement("div");
    col.setAttribute("id", `${type}_col`);
    col.setAttribute("class", "featCol");
    featList.appendChild(col);
  });

  //Create a div element for each feat of the chosen attribute.
  Object.values(feats).forEach((f) => {
    var eDiv = document.createElement("div");
    eDiv.setAttribute("class", "featRow");
    var baseDiv = document.createElement("div");
    baseDiv.style.display = "flex";
    var eDropBtn = document.createElement("button");
    eDropBtn.setAttribute("class", "dropDownBtn");
    eDropBtn.setAttribute("id", `${f.Id}_btn`);
    eDropBtn.innerHTML = `<img src="${parentUrl}/Art/icon_closed.png" style="height: 10px"/>`;
    eDropBtn.onclick = function () {
      showDiv(f.Id);
      return false;
    };
    baseDiv.appendChild(eDropBtn);
    var eTitle = document.createElement("h4");
    eTitle.setAttribute("class", "feat-title");
    var titleTxt = document.createElement("text");
    titleTxt.textContent = f.Title;
    eTitle.appendChild(titleTxt);
    baseDiv.appendChild(eTitle);
    var eRequirments = document.createElement("div");
    eRequirments.setAttribute("class", "featRequirments");
    //create a requirement element for each requirement on the feat.
    f.Requirements.forEach((r) => {
      var newRequirement = document.createElement("div");
      var rType = document.createElement("h5");
      rType.setAttribute("class", "featCell");
      rType.innerHTML = r.type;
      rType.style.backgroundColor = r.color;
      let rValue = document.createElement("h5");
      rValue.setAttribute("class", "featCell");
      rValue.innerHTML = r.value;
      rValue.style.backgroundColor = "white";
      newRequirement.appendChild(rType);
      newRequirement.appendChild(rValue);
      eRequirments.appendChild(newRequirement);
    });
    var eReq1 = document.createElement("h5");
    eRequirments.appendChild(eReq1);
    baseDiv.appendChild(eRequirments);
    var costs = document.createElement("h5");
    costs.setAttribute("class", "costText");
    costs.textContent = `TP Cost: ${f.Cost}`;
    baseDiv.appendChild(costs);
    var eDrop = document.createElement("div");
    eDrop.style.display = "none";
    eDrop.setAttribute("id", `${f.Id}_drop`);
    var eDesc = document.createElement("div");
    eDesc.setAttribute("id", `${f.Id}_Description`);
    eDesc.setAttribute("class", `f_description`);
    var descText = document.createElement("text");
    descText.textContent = f.Description;
    eDesc.appendChild(descText);
    eDrop.appendChild(eDesc);
    eDiv.appendChild(baseDiv);
    eDiv.appendChild(eDrop);
    console.log(f.Types[0]);
    typeList.forEach((type) => {
      if (f.Types.includes(type)) {
        const f_col = document.getElementById(`${type}_col`);
        f_col.style.display = "block";
        f_col.appendChild(eDiv);
      }
    });
  });
  // featList.appendChild(f_col);
}

function showDiv(id) {
  var divElement = document.getElementById(id + "_drop");
  console.log(divElement);
  var buttonElement = document.getElementById(id + "_btn");

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
