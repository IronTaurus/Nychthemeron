var iNr = 0;

function showInterest(id) {
  var textElement = document.getElementById("i" + id + "_text");
  var buttonElement = document.getElementById("i" + id + "_btn");
  console.log("i" + id + "_text");

  if (textElement.style.display === "none") {
    buttonElement.textContent = "-";
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
    buttonElement.textContent = "+";
  }
}

function getKeyWords(e) {
  var eTxt = e.innerHTML;
  console.log(eTxt);
  var innerTxt = eTxt.replace("{b}", "<b>");
  var innerTxt = innerTxt.replace("{/b}", "</b>");
  var mapObj = {
    "{b}": "<b>",
    "{b.}": "</b>",
    "{i}": "<i>",
    "{i.}": "</i>",
  };
  let eTxtReplaced = eTxt.replace(
    /{b}|{b.}|{i}|{i.}/gi,
    (matched) => mapObj[matched]
  );
  console.log(eTxtReplaced);
  return eTxtReplaced;
}

function createInterest() {
  iNr++;
  const elementNr = iNr;
  var interestList = document.getElementById("info_Interest");
  var interest = document.createElement("div");
  interest.setAttribute("class", "interest");
  interest.setAttribute("id", "interest" + elementNr);
  var title = document.createElement("div");
  title.setAttribute("id", "i_title");

  var txtContent = document.createElement("div");
  txtContent.setAttribute("contenteditable", true);
  txtContent.setAttribute("id", "i" + elementNr + "_text");
  txtContent.setAttribute("class", "i_txtArea");
  txtContent.innerHTML = "Write here...";
  txtContent.oninput = function () {
    auto_grow(this);
  };
  txtContent.onblur = function () {
    console.log("onclose");
    this.innerHTML = getKeyWords(this);
  };

  var btn = document.createElement("button");
  btn.setAttribute("class", "i_button");
  btn.setAttribute("id", "i" + elementNr + "_btn");
  btn.innerHTML = "-";
  btn.onclick = function () {
    showInterest(elementNr);
    return false;
  };

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("class", "i_button");
  btnRemove.setAttribute("id", "btn_remove");
  btnRemove.innerHTML = "X";
  btnRemove.onclick = function () {
    var removableElement = document.getElementById("interest" + elementNr);
    interestList.removeChild(removableElement);
    iNr--;
    return false;
  };
  var txt = document.createElement("input");
  txt.setAttribute("type", "text");
  txt.setAttribute("class", "i_name");
  txt.setAttribute("id", "i" + elementNr + "_name");
  txt.value = "Title";
  title.appendChild(btn);
  title.appendChild(txt);
  title.appendChild(btnRemove);
  interest.appendChild(title);
  interest.appendChild(txtContent);
  interestList.appendChild(interest);
}

function getInterests() {
  if (iNr > 0) {
    var interests = [];
    for (let index = 1; index <= iNr; index++) {
      const interest = {
        title: document.getElementById("i" + index + "_name").value,
        text: document.getElementById("i" + index + "_text").innerHTML,
      };
      interests.push(interest);
    }
    return interests;
  } else {
    return [];
  }
}

function loadInterests(infoInterests) {
  var txtList = [];
  var interestList = document.getElementById("info_Interest");
  interestList.replaceChildren([]);
  iNr = 0;
  infoInterests?.forEach((element) => {
    iNr++;
    const elementNr = iNr;
    var interest = document.createElement("div");
    interest.setAttribute("class", "interest");
    interest.setAttribute("id", "interest" + elementNr);
    var title = document.createElement("div");
    title.setAttribute("id", "i_title");
    var txt = document.createElement("input");
    txt.setAttribute("type", "text");
    txt.setAttribute("class", "i_name");
    txt.setAttribute("id", "i" + elementNr + "_name");
    txt.value = element.title;

    var txtContent = document.createElement("div");
    txtContent.setAttribute("contenteditable", true);
    txtContent.setAttribute("id", "i" + elementNr + "_text");
    txtContent.setAttribute("class", "i_txtArea");
    txtContent.innerHTML = element.text;
    txtContent.oninput = function () {
      auto_grow(this);
    };
    txtContent.onblur = function () {
      console.log("onclose");
      this.innerHTML = getKeyWords(this);
    };

    var btn = document.createElement("button");
    btn.setAttribute("class", "i_button");
    btn.setAttribute("id", "i" + elementNr + "_btn");
    btn.innerHTML = "-";
    btn.onclick = function () {
      showInterest(elementNr);
      return false;
    };
    var btnRemove = document.createElement("button");
    btnRemove.setAttribute("class", "i_button");
    btnRemove.setAttribute("id", "btn_remove");
    btnRemove.innerHTML = "X";
    btnRemove.onclick = function () {
      var removableElement = document.getElementById("interest" + elementNr);
      interestList.removeChild(removableElement);
      iNr--;
      return false;
    };

    title.appendChild(btn);
    title.appendChild(txt);
    title.appendChild(btnRemove);
    interest.appendChild(title);
    interest.appendChild(txtContent);
    interestList.appendChild(interest);
    txtList.push(txtContent);

    auto_grow(txtContent);
  });
  return txtList;
}
