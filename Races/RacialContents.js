console.log("RacialContents.js loaded...");
export function getRaces() {

    const Races = [
    //#region Elves

    //HighElf
    {
        Titel: "High Elf",
        Background: "...",
        Attributes: [{Type: "Mind", Value: 1, Color: "blue"}, {Type: "Presence", Value: 2, Color: "yellow"}],
        Feats: [
            {Titel: "Knowledge: Culture I", Description: ""}, 
            {Titel: "Knowledge: History I", Description: ""}, 
            {Titel: "Insight I", Description: ""}, 
            {Titel: "Silver Tongue I", Description: ""}, 
            {Titel: "Snake’s Tongue I", Description: ""}, 
        ]
    },

    //WoodElf
    {
        Titel: "Wood Elf",
        Background: "...",
        Attributes: [{Type: "Agility", Value: 2, Color: "green"}, {Type: "Mind", Value: 1, Color: "blue"}],
        Feats: [
            {Titel: "Stealth I", Description: ""}, 
            {Titel: "Quick Reaction I", Description: ""}, 
            {Titel: "Light Footed I", Description: ""}, 
            {Titel: "Sharp Sight I", Description: ""}, 
            {Titel: "Knowledge: Medicine I", Description: ""}, 
        ]
    }

    //#endregion Elves

    ]
return Races;
}
