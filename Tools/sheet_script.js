
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