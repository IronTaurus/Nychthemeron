import { getRaces } from "./RacialContents.js";
LoadRaces();


function viewElement(scrollTo) {
    console.log(scrollTo);
    document.getElementById(scrollTo).scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

function LoadRaces(){
    console.log("Loading Races...")
    let mainContainer = document.getElementById("testContainer");
    const list = getRaces()
    console.log(`Completed Loading: ${JSON.stringify(list)}`);
    let elementNr = 0;
    list.forEach(race => {
        let newContainer = document.createElement("div");
        newContainer.setAttribute("id", `raceTitel_r${elementNr}`);
        newContainer.setAttribute("class", "raceContainer");
        let titel = document.createElement("text");
        titel.setAttribute("class", "raceTitel");
        titel.textContent = race.Titel;
        let background = document.createElement("p");
        background.setAttribute("class", "raceBackgroundText");
        background.textContent = race.Background;
        let startAttributeContainer = document.createElement("div");
        startAttributeContainer.setAttribute("class", "attributeContainer");
        race.Attributes.forEach(attribute => {
            let startAttribute = document.createElement("text");
            startAttribute.setAttribute("class", "startAttribute")
            startAttribute.style.backgroundColor = attribute.Color;
            startAttribute.textContent = `${attribute.Type}: ${attribute.Value}`;
            startAttributeContainer.appendChild(startAttribute);
        });
        let startFeatsContainer = document.createElement("div");
        const startFeatsText = document.createElement("text");
        startFeatsText.setAttribute("class", "titelText");
        startFeatsText.textContent = "Choose one of the following:"
        startFeatsContainer.appendChild(startFeatsText);
        race.Feats.forEach(feat => {
            let startFeat = document.createElement("text");
            startFeat.textContent = feat.Titel;
            startFeatsContainer.appendChild(startFeat);
        });

        newContainer.appendChild(titel);
        newContainer.appendChild(background);
        newContainer.appendChild(startAttributeContainer);
        newContainer.appendChild(startFeatsContainer);

        mainContainer.appendChild(newContainer);
    });
}