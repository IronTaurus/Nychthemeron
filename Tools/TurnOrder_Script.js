var queue = 0;
var initativeOrder = [];
var creatureList = document.getElementById("initiativeOrder");

class initativeSlot {
    constructor(creature, initiative) {
      this.Creature = creature;
      this.Initiative = initiative;
    }
  }

function showCreature(id){
    var creatureElement = document.getElementById(id + "_info");
    var buttonElement = document.getElementById(id + "_btn");
    console.log(id + "_text");

    if (creatureElement.style.display === "none") {
        buttonElement.textContent = "-"
        creatureElement.style.display = "block";
    } else {
        creatureElement.style.display = "none";
        buttonElement.textContent = "+"
    }
}

function orderList(){
    console.log(initativeOrder)
    console.log(initativeOrder.length)
    initativeOrder.sort((a, b) => {
        return b.Initiative - a.Initiative;
    });
    console.log(initativeOrder.length)
    console.log(initativeOrder)
    creatureList.replaceChildren([]);
    initativeOrder.forEach(element => {
        creatureList.appendChild(element.Creature);
    });
}

function clearDeadList(){
    var deadList = document.getElementById("DeadList");
    deadList.innerHTML = '';
}

function AddToDead(name){
    var deadList = document.getElementById("DeadList");
    var deadElement = document.createElement("li");
    deadElement.setAttribute('class', 'deadCreature');
    deadElement.innerHTML = name;
    deadList.appendChild(deadElement);
}

function createCreature(id, noCreatures){

    const newSlot = new initativeSlot;

    const elementNr = id;
    var creature = document.createElement('div');
    creature.setAttribute('class', 'creatures');
    creature.setAttribute('id',  'creature_' + elementNr);
    var title = document.createElement('div');
    title.setAttribute('class', 'c_title');
    var btn = document.createElement('button');
    btn.setAttribute('class', 'c_button');
    btn.setAttribute('id', elementNr + '_btn');
    btn.innerHTML = '-';
    btn.onclick = function(){
        showCreature(elementNr);
      return false;
    };
    var txt = document.createElement('input');
    txt.setAttribute("type", "text");
    txt.setAttribute('class', 'c_name');
    txt.setAttribute('id', elementNr + '_name');
    txt.value = id;  

    var initative = document.createElement('div');
    initative.setAttribute('class', 'initiative');
    var InitTitle = document.createElement('h3');
    InitTitle.setAttribute("type", "text");
    InitTitle.setAttribute('class', 'title');
    hpNode = document.createTextNode("Initative: ");
    InitTitle.appendChild(hpNode);
    var initTxt = document.createElement('input');
    initTxt.setAttribute("type", "text");
    initTxt.setAttribute('id', elementNr + '_init');
    initTxt.setAttribute('class', 'txt');
    initTxt.value = 0;
    initTxt.onchange = function(){
        newSlot.Initiative = this.value;
        console.log(newSlot.Initiative)
      return false;
    };
    initative.appendChild(InitTitle);
    initative.appendChild(initTxt);

    var btnRemove = document.createElement('button');
    btnRemove.setAttribute('class', 'c_button');
    btnRemove.setAttribute('id', 'btn_remove');
    btnRemove.innerHTML = 'X';
    btnRemove.onclick = function(){
        var removableElement = document.getElementById("creature_" + elementNr);
        AddToDead(txt.value);
        console.log(removableElement)
        const targetIndex = initativeOrder.indexOf(newSlot);
        console.log(initativeOrder);
        console.log(targetIndex + " " + initativeOrder[targetIndex]);
        initativeOrder.splice(targetIndex, 1);
        creatureList.removeChild(removableElement);
        // queue--;
      return false;
    };
    title.appendChild(btn);
    title.appendChild(txt);
    title.appendChild(initative);
    title.appendChild(btnRemove)

    var c_info = document.createElement('div');
    c_info.setAttribute('id', elementNr + "_info");
    c_info.setAttribute('class', "info");

    for (let index = 1; index <= noCreatures; index++) {
        var baseStats = document.createElement('div');
        baseStats.setAttribute('class', 'c_Div');
        var hpTitle = document.createElement('h3');
        hpTitle.setAttribute("type", "text");
        hpTitle.setAttribute('class', 'title');
        hpNode = document.createTextNode("Hp: ");
        hpTitle.appendChild(hpNode);
        var hpTxt = document.createElement('input');
        hpTxt.setAttribute("type", "text");
        hpTxt.setAttribute('class', 'txt');
        baseStats.appendChild(hpTitle);
        baseStats.appendChild(hpTxt);
    
        var spTitle = document.createElement('h3');
        spTitle.setAttribute("type", "text");
        spTitle.setAttribute('class', 'title');
        spNode = document.createTextNode("Sp: ");
        spTitle.appendChild(spNode);
        var spTxt = document.createElement('input');
        spTxt.setAttribute("type", "text");
        spTxt.setAttribute('class', 'txt');
        baseStats.appendChild(spTitle);
        baseStats.appendChild(spTxt);
        c_info.appendChild(baseStats);
    }


    var conditions = document.createElement('input');
    conditions.setAttribute("type", "text");
    conditions.setAttribute('id', 'con_txt');

    creature.appendChild(title);
    c_info.appendChild(conditions);
    creature.appendChild(c_info);

    newSlot.Creature = creature;
    newSlot.Initiative = initTxt.value;
    return newSlot;
}

function addCreature(){
    queue++;
    const elementNr = queue;
    var nrCreatures = document.getElementById("creatureNumbers").value
    console.log(nrCreatures)
    var orderELement = createCreature("c_" + elementNr, nrCreatures);
    initativeOrder.push(orderELement);
    creatureList.appendChild(orderELement.Creature);

   
}