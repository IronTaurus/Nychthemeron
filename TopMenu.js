
    var mDiv = document.createElement('div');
    mDiv.setAttribute('class', 'Grid-container-top');
    document.getElementById("fixed-banner").appendChild(mDiv);
    //Religion Button
    mButton_Religion = document.createElement('button');
    mButton_Religion.setAttribute('id', 'Religion');
    mButton_Religion.setAttribute('class', 'top-button');
    mButton_Religion.onclick = function () { window.location.href = '../Etharia_WikiReligion.html' }
    mButton_Religion.textContent = "Religion";
    mDiv.appendChild(mButton_Religion);
    //History Button
    mButton_History = document.createElement('button');
    mButton_History.setAttribute('id', 'History');
    mButton_History.setAttribute('class', 'top-button');
    mButton_History.onclick = function () { window.location.href = '../Etharia_WikiHistory.html' }
    mButton_History.textContent = "History";
    mDiv.appendChild(mButton_History);
    //Myths Button
    mButton_Myths = document.createElement('button');
    mButton_Myths.setAttribute('id', 'Myths');
    mButton_Myths.setAttribute('class', 'top-button');
    mButton_Myths.onclick = function () { window.location.href = '../Etharia_Wiki/Myths.html' }
    mButton_Myths.textContent = "Myths";
    mDiv.appendChild(mButton_Myths);
    //Home Button
    mButton_Home = document.createElement('a');
    mButton_Home.setAttribute('id', 'Home');
    mButton_Home.onclick = function () { window.location.href = '../Etharia_Wikiindex.html' }
    mDiv.appendChild(mButton_Home);
    mHomeArt = document.createElement('img');
    mHomeArt.setAttribute('src', '../Etharia_Wiki/Art/Home.png');
    mHomeArt.setAttribute('height', 100)
    mHomeArt.setAttribute('width', 100);
    mButton_Home.appendChild(mHomeArt);
    //Races
    mButton_Races = document.createElement('button');
    mButton_Races.setAttribute('id', 'Races');
    mButton_Races.setAttribute('class', 'top-button');
    mButton_Races.onclick = function () { window.location.href = '../Etharia_WikiRaces.html' }
    mButton_Races.textContent = "Races";
    mDiv.appendChild(mButton_Races);
    //Game
    mButton_Game = document.createElement('button');
    mButton_Game.setAttribute('id', 'Game');
    mButton_Game.setAttribute('class', 'top-button');
    mButton_Game.onclick = function () { window.location.href = '../Etharia_WikiGame.html' }
    mButton_Game.textContent = "Game";
    mDiv.appendChild(mButton_Game);
    //Tools
    mButton_Tools = document.createElement('button');
    mButton_Tools.setAttribute('id', 'Tools');
    mButton_Tools.setAttribute('class', 'top-button');
    mButton_Tools.onclick = function () { window.location.href = '../Etharia_WikiTools.html' }
    mButton_Tools.textContent = "Tools";
    mDiv.appendChild(mButton_Tools);
