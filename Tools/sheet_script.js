
var profileArt = document.getElementById("ProfileArt");
const artHeight = profileArt.height;
const artWidth = profileArt.width;
const characterSheet = document.querySelector("#CharacterSheet");

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
};

var loadFile = function(event) {
    var image = document.getElementById('cardArtBg_moon');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function SaveJson(){
    const p_name = document.getElementById("p_Name").value;
    const p_race = document.getElementById("p_Race").value;
    const p_class = document.getElementById("p_Class").value;
    const p_deity = document.getElementById("p_Deity").value;
    const p_level = document.getElementById("p_Level").value;
    const p_fp = document.getElementById("p_FP").value;

    const a_body = document.getElementById("a_Body").value;
    const a_agility = document.getElementById("a_Body").value;
    const a_mind = document.getElementById("a_Body").value;
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

    const feats = document.getElementById("info_Feats").value;
    const bag1 = document.getElementById("info_Bag1").value;
    const bag2 = document.getElementById("info_Bag2").value;

    const character = {
        infoPerson: {name: p_name, race: p_race, class: p_class, deity: p_deity, level: p_level, fp: p_fp},
        infoAttribute: {body: a_body, agility: a_agility, mind: a_mind, mystic: a_mystic, presence: a_presence},
        infoBase: {hpMax: b_hpMax, hpCurr: b_hpCurr, hpTemp: b_hpTemp, armMax: b_armMax, armTemp: b_armTemp, spMax: b_spMax, spCurr: b_spCurr},
        infoWeapon: {wep1: e_wep1, wep2: e_wep2, wep3: e_wep3},
        infoArmor: {arm1: e_arm1, arm2: e_arm2, arm3: e_arm3},

        infoEquip: "",
        infoBag: "",
        infoFeatures: "",
    }

    var dictstring = JSON.stringify(character);
    var fs = require('fs');
    fs.writeFile("thing.json", dictstring);
}

function LoadJson(){

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