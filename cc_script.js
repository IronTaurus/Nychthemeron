    const sunCardTypes = document.querySelectorAll(".csTypes");
    const classType = document.querySelectorAll(".classTypes");
    

    
    let sunType;

    function drawCanvas()
    {
        //Replace all instances of keywords with a image.     
        const sunRuleText = document.querySelector("#csRule").value;         
        const mapObj = 
        {
            '{ac}': "<img src='Art/AC_symbol.svg' height = '40px' width = '30px' />",
            '{b}': "<img src='Art/BaseDmg.png' height = '22' width = '17' />"
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{b}/gi, function(matched){
            return mapObj[matched];});

        //Adds the class type to the card.
        for (let index = 0 ; index < classType.length; index++) {
            const element = classType[index];
            if (element.checked)
            {
                console.log(element.value);
                document.getElementById("CardGen_Class").innerHTML = element.value;         
            }
        }

        //Adds all the checked card types to a single string.
        const sunCheckedCardTypes = [];
        sunType = "";
        console.log(sunType);

        sunCardTypes.forEach((element, index)=>{
            if (element.checked)
            {
                console.log(element.value);
                sunCheckedCardTypes.push(element.value);
            }   
        })

        sunCheckedCardTypes.forEach((element, index)=>{
            if(index > 0)
            {        
                sunType += " / " + element;
                console.log(sunType);
            }
            else 
            {
                sunType = element;
                console.log(sunType);
            }
        })

        //Rewrites text in Tester
        const sunTitle = document.querySelector("#csTitle").value;
        const moonTitle = document.querySelector("#cmTitle").value;

        console.log(document.querySelector("#csType1").checked);
        document.getElementById("CardGen_Title").innerHTML = sunTitle;
        document.getElementById("CardGen_Types").innerHTML = sunType;
        document.getElementById("CardGen_Rules").innerHTML = sunRuleReplaced;


        //Making the canvas
        var canvas = document.getElementById('canvasResult');
        var context = canvas.getContext('2d');

        

        //Add images to canvas and draw canvas
        var imageObj1 = new Image();
        imageObj1.src = "Art/Frame_card.png"

        var imageObj2 = new Image();
        imageObj2.src = "Art/ruleTextBG.png"
        imageObj2.onload = function() {         
            context.drawImage(imageObj2, 0, 0, canvas.width, canvas.height);
            context.drawImage(imageObj1, 0, 0,canvas.width, canvas.height);
        }
        
            // get png data url
        var pngUrl = canvas.toDataURL();
    }
