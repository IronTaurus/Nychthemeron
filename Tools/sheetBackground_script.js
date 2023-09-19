var iNr = 0;

function showInterest(id){
    var textElement = document.getElementById('i' + id + "_text");
    var buttonElement = document.getElementById('i' + id + "_btn");
    console.log('i' + id + "_text");

    if (textElement.style.display === "none") {
        buttonElement.textContent = "-"
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
        buttonElement.textContent = "+"
    }
}

function createInterest(){
    iNr++;
    const elementNr = iNr;
    var interestList = document.getElementById("info_Interest");
    var interest = document.createElement('div');
    interest.setAttribute('class', 'interest');
    interest.setAttribute('id',  'interest' + elementNr);
    var title = document.createElement('div');
    title.setAttribute('id', 'i_title');

    var txtArea = document.createElement('textarea');
    var t = document.createTextNode("Write here...");
    txtArea.appendChild(t);
    txtArea.setAttribute('id', 'i' + elementNr + '_text');
    txtArea.setAttribute('class', 'i_txtArea');
    txtArea.oninput= function(){
        auto_grow(this);
    }
    var btn = document.createElement('button');
    btn.setAttribute('class', 'i_button');
    btn.setAttribute('id', 'i' + elementNr + '_btn');
    btn.innerHTML = '-';
    btn.onclick = function(){
        showInterest(elementNr);
      return false;
    };
    var btnRemove = document.createElement('button');
    btnRemove.setAttribute('class', 'i_button');
    btnRemove.setAttribute('id', 'btn_remove');
    btnRemove.innerHTML = 'X';
    btnRemove.onclick = function(){
        var removableElement = document.getElementById("interest"+elementNr);
        interestList.removeChild(removableElement);
        iNr--;
      return false;
    };
    var txt = document.createElement('input');
    txt.setAttribute("type", "text");
    txt.setAttribute('class', 'i_name');
    txt.setAttribute('id', 'i' + elementNr + '_name');
    txt.value = "Title";        
    title.appendChild(btn);
    title.appendChild(txt);
    title.appendChild(btnRemove);
    interest.appendChild(title);
    interest.appendChild(txtArea);
    interestList.appendChild(interest);
}

function showBackground(){
    var bgElement = document.getElementById("BackgroundSheet");
    var chElement = document.getElementById("CharacterSheet");

    if (bgElement.style.display === "none") {
        bgElement.style.display = "flex";
        chElement.style.display = "none";
    } 
    else {
        bgElement.style.display = "none";
        chElement.style.display = "flex";
    }
}

function getInterests(){
    if(iNr > 0){
        var interests = [];
        for (let index = 1; index <= iNr; index++) {
            const interest = {
                title: document.getElementById('i' + index + '_name').value,
                text: document.getElementById('i' + index + '_text').value
            }
            interests.push(interest);
    
        }
        return interests;
    }
}

function loadInterests(infoInterests){
    var interestList = document.getElementById("info_Interest");
    interestList.replaceChildren([]);
    iNr = 0;
    infoInterests.forEach(element => {
        fNr++;
        const elementNr = iNr;
        var interest = document.createElement('div');
        interest.setAttribute('class', 'interest');
        interest.setAttribute('id',  'interest' + elementNr);
        var title = document.createElement('div');
        title.setAttribute('id', 'i_title');
        var txt = document.createElement('input');
        txt.setAttribute("type", "text");
        txt.setAttribute('class', 'i_name');
        txt.setAttribute('id', 'i' + elementNr + '_name');
        txt.value = element.title;       
    
        var txtArea = document.createElement('textarea');
        var t = document.createTextNode(element.text);
        txtArea.appendChild(t);
        txtArea.setAttribute('id', 'i' + elementNr + '_text');
        txtArea.setAttribute('class', 'i_txtArea');
        txtArea.oninput= function(){
            auto_grow(this);
        }
        var btn = document.createElement('button');
        btn.setAttribute('class', 'i_button');
        btn.setAttribute('id', 'i' + elementNr + '_btn');
        btn.innerHTML = '-';
        btn.onclick = function(){
            showInterest(elementNr);
          return false;
        };
        var btnRemove = document.createElement('button');
        btnRemove.setAttribute('class', 'i_button');
        btnRemove.setAttribute('id', 'btn_remove');
        btnRemove.innerHTML = 'X';
        btnRemove.onclick = function(){
            var removableElement = document.getElementById("interest"+elementNr);
            interestList.removeChild(removableElement);
            iNr--;
          return false;
        };
 
        title.appendChild(btn);
        title.appendChild(txt);
        title.appendChild(btnRemove);
        interest.appendChild(title);
        interest.appendChild(txtArea);
        interestList.appendChild(interest);

        auto_grow(txtArea);
    });
}

