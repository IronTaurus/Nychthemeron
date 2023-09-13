
var profileArt = document.getElementById("ProfileArt");
const artHeight = profileArt.height;
const artWidth = profileArt.width;
const characterSheet = document.querySelector("#CharacterSheet");
var fNr = 0;

// let character = {
//     infoPerson: {name: "", race: "", class: "", deity: "", level: "", fp: ""},
//     infoAttribute: {body: "", agility: "", mind: "", mystic: "", presence: ""},
//     infoBase: {hpMax: "", hpCurr: "", hpTemp: "", armMax: "", armTemp: "", spMax: "", spCurr: ""},
//     infoWeapon: {wep1: "", wep2: "", wep3: ""},
//     infoArmor: {arm1: "", arm2: "", arm3: ""},
//     infoEquip: "",
//     infoBag: "",
//     infoFeatures: "",
// }

function draw2canvas(){
    console.log("Test draw2canvas complete")
    const characterName = document.getElementById("p_Name").value.replace(/\s+/g, '');
    const className = document.getElementById("p_Class").value.replace(/\s+/g, '');
    const fileName =  characterName + "_" + className;
    html2canvas(characterSheet, {
        scale: 3,
        background :'#FFFFFF',
        useCORS: true,
    }).then(canvas => {
        canvas.id = "h2Canvas";
        document.body.appendChild(canvas);
        download_img(canvas.id, fileName);       
    });


}
function download_img(canvasId, fileName) {
    var link = document.createElement('a');
    link.download = fileName + ".png";
    link.href = document.getElementById(canvasId).toDataURL()
    link.click();
    var canvasElement = document.getElementById(canvasId);
    document.body.removeChild(canvasElement);  
    var jsonCharacter = StringifyCharacter();
    downloadFile(jsonCharacter, fileName + ".txt", 'text/plain');
};


function downloadFile(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function LoadFile(event) {
    var image = document.getElementById('ProfileArt');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function LoadJsonFile(){
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById("jsonFile");
    if (!input) {
      alert("Couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      var newCharacter = JSON.parse(lines); 
      console.log(newCharacter);
      LoadCharacterInfo(newCharacter)
    }
}
function createFeature(){
    fNr++;
    var featureList = document.getElementById("info_Features");
    var feature = document.createElement('div');
    feature.setAttribute('class', 'feature');
    var title = document.createElement('div');
    title.setAttribute('id', 'f_title');

    var txtArea = document.createElement('textarea');
    var t = document.createTextNode("Write here...");
    txtArea.appendChild(t);
    txtArea.setAttribute('id', 'f' + fNr + '_text');
    txtArea.setAttribute('class', 'f_txtArea');
    var btn = document.createElement('button');
    btn.setAttribute('class', 'f_button');
    btn.setAttribute('id', 'f' + fNr + '_btn');
    btn.innerHTML = '+';
    btn.onclick = function(){
        showText(fNr);
      return false;
    };
    var txt = document.createElement('input');
    txt.setAttribute("type", "text");
    txt.setAttribute('class', 'f_name');
    txt.setAttribute('id', 'f_name');
    txt.value = "Title";        
    title.appendChild(btn);
    title.appendChild(txt);
    feature.appendChild(title);
    feature.appendChild(txtArea);
    featureList.appendChild(feature);
}

function LoadCharacterInfo(character){
    document.getElementById("p_Name").value = character.infoPerson.name;
    document.getElementById("p_Race").value = character.infoPerson.race;
    document.getElementById("p_Class").value = character.infoPerson.class;
    document.getElementById("p_Deity").value = character.infoPerson.deity;
    document.getElementById("p_Level").value = character.infoPerson.level;
    document.getElementById("p_FP").value = character.infoPerson.fp;

    document.getElementById("a_Body").value = character.infoAttribute.body;
    document.getElementById("a_Agility").value = character.infoAttribute.agility;
    document.getElementById("a_Mind").value = character.infoAttribute.mind;
    document.getElementById("a_Mystic").value = character.infoAttribute.mystic;
    document.getElementById("a_Presence").value = character.infoAttribute.presence;

    document.getElementById("b_HpMax").value = character.infoBase.hpMax;
    document.getElementById("b_HpCurr").value = character.infoBase.hpCurr;
    document.getElementById("b_HpTemp").value = character.infoBase.hpTemp;
    document.getElementById("b_ArmMax").value = character.infoBase.armMax;
    document.getElementById("b_ArmTemp").value = character.infoBase.armTemp;
    document.getElementById("b_SpMax").value = character.infoBase.spMax;
    document.getElementById("b_SpCurr").value = character.infoBase.spCurr;

    document.getElementById("e_Wep1").value = character.infoWeapon.wep1;
    document.getElementById("e_Wep2").value = character.infoWeapon.wep2;
    document.getElementById("e_Wep3").value = character.infoWeapon.wep3;
    document.getElementById("e_Arm1").value = character.infoArmor.arm1;
    document.getElementById("e_Arm2").value = character.infoArmor.arm2;
    document.getElementById("e_Arm3").value = character.infoArmor.arm3;

    document.getElementById("info_Feats").value = character.infoFeatures;
    character.infoFeatures.forEach(element => {
        fNr++;
        var feature = document.createElement('div');
        feature.setAttribute('class', 'feature');
        var title = document.createElement('div');
        title.setAttribute('id', 'f_title');
        var txt = document.createElement('text');
        txt.setAttribute('class', 'f_name');
        txt.setAttribute('id', 'f_name');
        var btn = document.createElement('button');
        btn.setAttribute('class', 'f_button');
        btn.setAttribute('id', 'f' + fNr + '_btn');
        btn.innerHTML = 'click me';
        btn.onclick = function(){
            showText(fNr);
          return false;
        };
        var txtArea = document.createElement('textarea');
        var t = document.createTextNode("Write here...");
        txtArea.appendChild(t);
        txtArea.setAttribute('id', 'f' + fNr + '_text');
        txtArea.setAttribute('class', 'f_txtArea');

        title.appendChild(txt);
        title.appendChild(btn);
        feature.appendChild(title);
        feature.appendChild(txtArea);
    });
    document.getElementById("info_Bag1").value = character.infoBag.bag1;
    document.getElementById("info_Bag2").value = character.infoBag.bag2;
}

function StringifyCharacter(){

    const p_name = document.getElementById("p_Name").value;
    console.log(p_name);
    const p_race = document.getElementById("p_Race").value;
    const p_class = document.getElementById("p_Class").value;
    const p_deity = document.getElementById("p_Deity").value;
    const p_level = document.getElementById("p_Level").value;
    const p_fp = document.getElementById("p_FP").value;

    const a_body = document.getElementById("a_Body").value;
    const a_agility = document.getElementById("a_Agility").value;
    const a_mind = document.getElementById("a_Mind").value;
    const a_mystic = document.getElementById("a_Mystic").value;
    const a_presence = document.getElementById("a_Presence").value;

    const b_hpMax = document.getElementById("b_HpMax").value;
    const b_hpCurr = document.getElementById("b_HpCurr").value;
    const b_hpTemp = document.getElementById("b_HpTemp").value;
    const b_armMax = document.getElementById("b_ArmMax").value;
    const b_armTemp = document.getElementById("b_ArmTemp").value;
    const b_spMax = document.getElementById("b_SpMax").value;
    const b_spCurr = document.getElementById("b_SpCurr").value;

    const e_wep1 = document.getElementById("e_Wep1").value;
    const e_wep2 = document.getElementById("e_Wep2").value;
    const e_wep3 = document.getElementById("e_Wep3").value;
    const e_arm1 = document.getElementById("e_Arm1").value;
    const e_arm2 = document.getElementById("e_Arm2").value;
    const e_arm3 = document.getElementById("e_Arm3").value;

    // const feats = document.getElementById("info_Feats").value;
    const feats = document.getElementsByClassName("feature");
    const bag1 = document.getElementById("info_Bag1").value;
    const bag2 = document.getElementById("info_Bag2").value;

    const updatedCharacter = {
        infoPerson: {name: p_name, race: p_race, class: p_class, deity: p_deity, level: p_level, fp: p_fp},
        infoAttribute: {body: a_body, agility: a_agility, mind: a_mind, mystic: a_mystic, presence: a_presence},
        infoBase: {hpMax: b_hpMax, hpCurr: b_hpCurr, hpTemp: b_hpTemp, armMax: b_armMax, armTemp: b_armTemp, spMax: b_spMax, spCurr: b_spCurr},
        infoWeapon: {wep1: e_wep1, wep2: e_wep2, wep3: e_wep3},
        infoArmor: {arm1: e_arm1, arm2: e_arm2, arm3: e_arm3},

        infoEquip: "",
        infoBag: {bag1, bag2},
        infoFeatures: feats,
    }
    console.log(updatedCharacter);
    return JSON.stringify(updatedCharacter);
}
function showText(id){
    console.log(id);
var textElement = document.getElementById('f' + id + "_text");
var buttonElement = document.getElementById('f' + id + "_btn");
console.log('f' + id + "_text");

if (textElement.style.display === "none") {
    buttonElement.textContent = "-"
    textElement.style.display = "block";
} else {
    textElement.style.display = "none";
    buttonElement.textContent = "+"
}
}

function Resize(slider){
    console.log("Resize")
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
    }
    console.log(slider);
    let resizeValue = resizeNumber[slider];
    console.log("art height:" + artHeight);
    console.log("art width:" + artWidth);
    console.log("height:" + profileArt.height);
    console.log("width:" + profileArt.width);
    console.log(resizeValue);
    
    profileArt.style.height = (artHeight * resizeValue) + "px";
    profileArt.style.width = (artWidth  * resizeValue) + "px";
    console.log("height:" + profileArt.height);
    console.log("width:" + profileArt.width);
    profileArt.src = profileArt.src;

    
}