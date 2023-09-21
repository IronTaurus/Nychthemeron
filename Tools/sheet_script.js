
var profileArt = document.getElementById("ProfileArt");
const artHeight = profileArt.height;
const artWidth = profileArt.width;
const characterSheet = document.querySelector("#CharacterSheet");
var listBG = [];
var listCharacter = [];
var fNr = 0;

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

function downloadFile_OnClick(){
    const characterName = document.getElementById("p_Name").value.replace(/\s+/g, '');
    const className = document.getElementById("p_Class").value.replace(/\s+/g, '');
    const fileName =  characterName + "_" + className;
    var jsonCharacter = StringifyCharacter();
    downloadFile(jsonCharacter, fileName + ".txt", 'text/plain');
}


function downloadFile(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function LoadFile(event) {
    var image = document.getElementById('ProfileArt');
    //Local file
    // image.src = URL.createObjectURL(event.target.files[0]);
    //online url
    image.src = document.getElementById("imageUrl").value;
};

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
  }

function resizeTextAreas(list, id){
    console.log("Enter resize mode..." + list)
    console.log(list)
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        auto_grow(document.getElementById(id + (index+1) + '_text'));
        console.log("Autogrow: " + id + (index+1) + '_text')
    }
}
function showBackground(){
    console.log("Button: pressed")
    var bgElement = document.getElementById("BackgroundSheet");
    var chElement = document.getElementById("CharacterSheet");
    var btnElement = document.getElementById("backgroundBtn");

    if (bgElement.style.display === "none") {
        console.log("BG: none")
        btnElement.textContent = "Character";
        bgElement.style.display = "flex";
        chElement.style.display = "none";
        resizeTextAreas(listBG, 'i');
    } 
    else {
        console.log("BG: flex")
        btnElement.textContent = "Background"
        bgElement.style.display = "none";
        chElement.style.display = "flex";
        resizeTextAreas(listCharacter, 'f');
    }
}
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
    const elementNr = fNr;
    var featureList = document.getElementById("info_Features");
    var feature = document.createElement('div');
    feature.setAttribute('class', 'feature');
    feature.setAttribute('id',  'feature' + elementNr);
    var title = document.createElement('div');
    title.setAttribute('id', 'f_title');

    var txtArea = document.createElement('textarea');
    var t = document.createTextNode("Write here...");
    txtArea.appendChild(t);
    txtArea.setAttribute('id', 'f' + elementNr + '_text');
    txtArea.setAttribute('class', 'f_txtArea');
    txtArea.oninput= function(){
        auto_grow(this);
    }
    var btn = document.createElement('button');
    btn.setAttribute('class', 'f_button');
    btn.setAttribute('id', 'f' + elementNr + '_btn');
    btn.innerHTML = '-';
    btn.onclick = function(){
        showText(elementNr);
      return false;
    };
    var btnRemove = document.createElement('button');
    btnRemove.setAttribute('class', 'f_button');
    btnRemove.setAttribute('id', 'btn_remove');
    btnRemove.innerHTML = 'X';
    btnRemove.onclick = function(){
        var removableElement = document.getElementById("feature"+elementNr);
        featureList.removeChild(removableElement);
        fNr--;
      return false;
    };
    var txt = document.createElement('input');
    txt.setAttribute("type", "text");
    txt.setAttribute('class', 'f_name');
    txt.setAttribute('id', 'f' + elementNr + '_name');
    txt.value = "Title";        
    title.appendChild(btn);
    title.appendChild(txt);
    title.appendChild(btnRemove);
    feature.appendChild(title);
    feature.appendChild(txtArea);
    featureList.appendChild(feature);
}

function LoadCharacterInfo(character){
    console.log("Entering: Person info..");
    document.getElementById("p_Name").value = character.infoPerson.name;
    document.getElementById("p_Race").value = character.infoPerson.race;
    document.getElementById("p_Class").value = character.infoPerson.class;
    document.getElementById("p_Deity").value = character.infoPerson.deity;
    document.getElementById("p_Level").value = character.infoPerson.level;
    document.getElementById("p_FP").value = character.infoPerson.fp;

    console.log("Entering: Temp Attributes..");
    document.getElementById("a_BodyTemp").value = character.infoAttributeTemp.body;
    document.getElementById("a_AgilityTemp").value = character.infoAttributeTemp.agility;
    document.getElementById("a_MindTemp").value = character.infoAttributeTemp.mind;
    document.getElementById("a_MysticTemp").value = character.infoAttributeTemp.mystic;
    document.getElementById("a_PresenceTemp").value = character.infoAttributeTemp.presence;

    console.log("Entering: Base Attributes..");
    document.getElementById("a_BodyBase").value = character.infoAttributeBase.body;
    document.getElementById("a_AgilityBase").value = character.infoAttributeBase.agility;
    document.getElementById("a_MindBase").value = character.infoAttributeBase.mind;
    document.getElementById("a_MysticBase").value = character.infoAttributeBase.mystic;
    document.getElementById("a_PresenceBase").value = character.infoAttributeBase.presence;

    console.log("Entering: Base Stats..");
    document.getElementById("b_HpMax").value = character.infoBase.hpMax;
    document.getElementById("b_HpCurr").value = character.infoBase.hpCurr;
    document.getElementById("b_HpTemp").value = character.infoBase.hpTemp;
    document.getElementById("b_ArmMax").value = character.infoBase.armMax;
    document.getElementById("b_ArmTemp").value = character.infoBase.armTemp;
    document.getElementById("b_SpMax").value = character.infoBase.spMax;
    document.getElementById("b_SpCurr").value = character.infoBase.spCurr;

    console.log("Entering: Equippments..");
    document.getElementById("e_Wep1").value = character.infoWeapon.wep1;
    document.getElementById("e_Wep2").value = character.infoWeapon.wep2;
    document.getElementById("e_Wep3").value = character.infoWeapon.wep3;
    document.getElementById("e_Arm1").value = character.infoArmor.arm1;
    document.getElementById("e_Arm2").value = character.infoArmor.arm2;
    document.getElementById("e_Arm3").value = character.infoArmor.arm3;
    document.getElementById('ProfileArt').src = character.art;

    console.log("Entering: Languages..");
    document.getElementById('language_1').value = character.language.i_language1;
    document.getElementById('language_2').value = character.language.i_language2;
    document.getElementById('language_3').value = character.language.i_language3;
    document.getElementById('language_4').value = character.language.i_language4;

    console.log("Entering: Movement and Initiative..");
    document.getElementById('c_movement').value = character.combat.c_movement;
    document.getElementById('c_initiative').value = character.combat.c_initiative;

    console.log("Entering: Bio information..");
    document.getElementById('bio_Name').value = character.infoBio.bg_Name;
    document.getElementById('bio_Age').value = character.infoBio.bg_Age;
    document.getElementById('bio_Race1').value = character.infoBio.bg_Race1;
    document.getElementById('bio_Race2').value = character.infoBio.bg_Race2;
    document.getElementById('bio_Heritage').value = character.infoBio.bg_Heritage;
    document.getElementById('bio_Origin').value = character.infoBio.bg_Origin;
    document.getElementById('bio_Nation').value = character.infoBio.bg_Nation;

    console.log("Entering: Bio notes and background..");
    document.getElementById('bio_Notes').value = character.infoNotes;
    document.getElementById('bio_Background').value = character.infoBackground;
    console.log("Entering: Interest list..");
    listBG = character.infoInterest;
    loadInterests(character.infoInterest);

    console.log("Entering: Feature list..");
    var featureList = document.getElementById("info_Features");
    featureList.replaceChildren([]);
    fNr = 0;
    character.infoFeatures.forEach(element => {
        fNr++;
        const elementNr = fNr;
        console.log("element: " + elementNr)
        var feature = document.createElement('div');
        feature.setAttribute('id',  'feature' + elementNr);
        feature.setAttribute('class', 'feature');
        var title = document.createElement('div');
        title.setAttribute('id', 'f' + elementNr + '_title');
        var txt = document.createElement('input');
        txt.value = element.title;
        txt.setAttribute('class', 'f_name');
        txt.setAttribute('id', 'f' + elementNr + '_name');
        var txtArea = document.createElement('textarea');
        var t = document.createTextNode(element.text);
        txtArea.appendChild(t);
        txtArea.setAttribute('id', 'f' + elementNr + '_text');
        txtArea.setAttribute('class', 'f_txtArea');
        txtArea.oninput= function(){
            auto_grow(this);
        }
        var btn = document.createElement('button');
        btn.setAttribute('class', 'f_button');
        btn.setAttribute('id', 'f' + elementNr + '_btn');
        btn.innerHTML = '-';
        btn.onclick = function(){
            showText(elementNr);
            auto_grow(txtArea)
          return false;
        };
        var btnRemove = document.createElement('button');
        btnRemove.setAttribute('class', 'f_button');
        btnRemove.setAttribute('id', 'btn_remove');
        btnRemove.innerHTML = 'X';
        btnRemove.onclick = function(){
            var removableElement = document.getElementById("feature"+elementNr);
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

    const a_bodyTemp = document.getElementById("a_BodyTemp").value;
    const a_agilityTemp = document.getElementById("a_AgilityTemp").value;
    const a_mindTemp = document.getElementById("a_MindTemp").value;
    const a_mysticTemp = document.getElementById("a_MysticTemp").value;
    const a_presenceTemp = document.getElementById("a_PresenceTemp").value;

    const a_bodyBase = document.getElementById("a_BodyBase").value;
    const a_agilityBase = document.getElementById("a_AgilityBase").value;
    const a_mindBase = document.getElementById("a_MindBase").value;
    const a_mysticBase = document.getElementById("a_MysticBase").value;
    const a_presenceBase = document.getElementById("a_PresenceBase").value;

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

    const art = document.getElementById('ProfileArt').src

    const i_language1 = document.getElementById('language_1').value;
    const i_language2 = document.getElementById('language_2').value;
    const i_language3 = document.getElementById('language_3').value;
    const i_language4 = document.getElementById('language_4').value;

    const c_movement = document.getElementById('c_movement').value;
    const c_initiative = document.getElementById('c_initiative').value;

    const bg_Name = document.getElementById("bio_Name").value;
    const bg_Age = document.getElementById("bio_Age").value;
    const bg_Race1 = document.getElementById("bio_Race1").value;
    const bg_Race2 = document.getElementById("bio_Race2").value;
    const bg_Heritage = document.getElementById("bio_Heritage").value;
    const bg_Origin = document.getElementById("bio_Origin").value;
    const bg_Nation = document.getElementById("bio_Nation").value;

    var bg_Interests = getInterests();
    console.log("Interest list:" + bg_Interests);

    var bg_Notes = document.getElementById("bio_Notes").value;
    var bg_Background = document.getElementById("bio_Background").value;
    var features = [];
    console.log("fNr is:" + fNr);
    if(fNr > 0){
        for (let index = 1; index <= fNr; index++) {
            console.log("index is:" + index);
            const feature = {
                title: document.getElementById('f' + index + '_name').value,
                text: document.getElementById('f' + index + '_text').value
            }
            features.push(feature);
        }
        console.log("features are:" + features);
    }
    const bag1 = document.getElementById("info_Bag1").value;
    const bag2 = document.getElementById("info_Bag2").value;

    const updatedCharacter = {
        infoPerson: {name: p_name, race: p_race, class: p_class, deity: p_deity, level: p_level, fp: p_fp},
        infoAttributeBase: {body: a_bodyTemp, agility: a_agilityTemp, mind: a_mindTemp, mystic: a_mysticTemp, presence: a_presenceTemp},
        infoAttributeTemp: {body: a_bodyBase, agility: a_agilityBase, mind: a_mindBase, mystic: a_mysticBase, presence: a_presenceBase},
        infoBase: {hpMax: b_hpMax, hpCurr: b_hpCurr, hpTemp: b_hpTemp, armMax: b_armMax, armTemp: b_armTemp, spMax: b_spMax, spCurr: b_spCurr},
        infoWeapon: {wep1: e_wep1, wep2: e_wep2, wep3: e_wep3},
        infoArmor: {arm1: e_arm1, arm2: e_arm2, arm3: e_arm3},

        infoBag: {bag1, bag2},
        infoFeatures: features,
        art: art,
        language: {i_language1, i_language2, i_language3, i_language4},
        combat: {c_movement, c_initiative},

        infoBio: {bg_Name, bg_Age, bg_Race1, bg_Race2, bg_Heritage, bg_Origin, bg_Nation},
        infoInterest: bg_Interests,
        infoNotes: bg_Notes,
        infoBackground: bg_Background

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