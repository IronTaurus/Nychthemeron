    const sunCardTypes = document.querySelectorAll(".csTypes");
    const moonCardTypes = document.querySelectorAll(".cmTypes");
    const classType = document.querySelectorAll(".classTypes");
    const captureElementSun = document.querySelector("#sunCapture");
    const captureElementMoon = document.querySelector("#moonCapture");
    var classDropdown = document.getElementById("classSubtypes");
    var tierDropdown = document.getElementById("classTierSelect");
    var baseClass = "";
    var imgPath = "../Art/"

    
    
    function selectClass(selectedClass){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}    
        });
        document.querySelectorAll(selectedClass).forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });          
    }

    console.log(captureElementSun);      

    function draw2canvas(){
        var cTitleSun = document.getElementById("csTitle").value.replace(/\s+/g, '');
        html2canvas(captureElementSun, {
            scale: 3,
            background :'#FFFFFF',
            useCORS: true,
        }).then(canvas => {
            canvas.id = "h2CanvasSun";
            document.body.appendChild(canvas);
            download_img(canvas.id, "Sun", cTitleSun);       
        });
        var cTitleMoon = document.getElementById("cmTitle").value.replace(/\s+/g, '');
        html2canvas(captureElementMoon, {
            scale: 3,
            background :'#FFFFFF',
            useCORS: true,
        }).then(canvas => {
            canvas.id = "h2CanvasMoon";
            document.body.appendChild(canvas);
            download_img(canvas.id, "Moon", cTitleMoon); 
        });
        
    }
        
        function download_img(canvasId, face, title) {
            var link = document.createElement('a');
            link.download = face + "_" +baseClass + "_" + title + ".png";
            link.href = document.getElementById(canvasId).toDataURL()
            link.click();
            var canvasElement = document.getElementById(canvasId);
            document.body.removeChild(canvasElement);  
        };

    var loadSunFile = function(event) {
        var image = document.getElementById('cardArtBg_sun');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    var loadMoonFile = function(event) {
        var image = document.getElementById('cardArtBg_moon');
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    function generateCard()
    {
        const sunRuleText = document.querySelector("#csRule").value;   
        const csCost =  document.getElementById("csCost").value;    
        const csRange = document.getElementById("csRangeText").value;
        const moonRuleText = document.querySelector("#cmRule").value;   
        const cmCost =  document.getElementById("cmCost").value;    
        const cmRange = document.getElementById("cmRangeText").value;
        var rangeTypes = document.querySelectorAll(".RangeTypes")
        rangeTypes.forEach((element, index)=>{
            if(element.checked == true){
                if(element.name == "csRangeType"){
                    // document.getElementById('rangeArt_sun').classList.toggle('hidden', false)
                    if(element.value == "None"){
                        document.getElementById("rangeArt_sun").style.display = "none";
                    }
                    else{
                        document.getElementById("rangeArt_sun").style.display = "block";
                        document.getElementById("rangeArt_sun").src = imgPath + "range" + element.value + ".png"

                    }                   
                }
                if(element.name == "cmRangeType"){
                    if(element.value == "None"){
                        document.getElementById("rangeArt_moon").style.display = "none";
                    }
                    else{
                        document.getElementById("rangeArt_moon").style.display = "block";
                        document.getElementById("rangeArt_moon").src = imgPath + "range" + element.value + ".png"
                    }                 
                }             
            }          
        })
        //Replace all instances of keywords with a image.            
        const mapObj = 
        {
            '{ac}': "<img src='"+ imgPath +"Symbol_AC.png' height = '22px' width = '16px' margin= '0%'/>",
            '{w}': "<img src='"+ imgPath +"BaseDmg.png' height = '22' width = '17' />",
            '{and}': "<img src='"+ imgPath +"and.png' height='16' width='340' style='margin-top: 8px'/> <br>",
            '{or}': "<img src='"+ imgPath +"or.png' height='16' width='340' style='margin-top: 8px'/> <br>",
            '{-}': "<img src='"+ imgPath +"break.png' height='16' width='340'/> <br>",
            '{one}': "<img src='"+ imgPath +"break_first.png' height='16' width='340'/> <br>",
            '{two}': "<img src='"+ imgPath +"break_second.png' height='16' width='340'/> <br>",
            '{three}': "<img src='"+ imgPath +"break_third.png' height='16' width='340'/> <br>",
            '{melody}': "<img src='"+ imgPath +"LingeringMelody.png' height='16' width='340'/> <br>",
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{w}|{and}|{or}|{-}|{one}|{two}|{three}|{melody}/gi, matched => mapObj[matched]);
        let moonRuleReplaced = moonRuleText.replace(/{ac}|{w}|{and}|{or}|{-}|{one}|{two}|{three}|{melody}/gi, matched => mapObj[matched]);

        //Adds the class type to the card.
        
        for (let index = 0 ; index < classType.length; index++) {
            const element = classType[index];
            if (element.checked)
            {
                console.log(element.value);
                baseClass = element.value;         
            }
        }

        //Adds all the checked card types to a single string.
        let sunType;
        const sunCheckedCardTypes = [];
        sunType = "";
        console.log(sunType);
        sunCardTypes.forEach((element)=>{
            if (element.checked)
            {
                console.log(element.value);
                sunCheckedCardTypes.push(element.value);
            }   
        })

        let moonType;
        const moonCheckedCardTypes = [];
        moonType = "";
        console.log(moonType);
        moonCardTypes.forEach((element)=>{
            if (element.checked)
            {
                console.log(element.value);
                moonCheckedCardTypes.push(element.value);
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

        moonCheckedCardTypes.forEach((element, index)=>{
            if(index > 0)
            {        
                moonType += " / " + element;
                console.log(moonType);
            }
            else 
            {
                moonType = element;
                console.log(moonType);
            }
        })

        

        //Rewrites text in Tester
        var firstTime = true;
        const sunTitle = document.querySelector("#csTitle").value;
        document.getElementById("spiritText_sun").innerHTML = csCost;
        console.log(document.querySelector("#csType1").checked);
        var title = document.getElementById("CardGen_Title_sun")
        title.innerHTML = sunTitle;
        var textSize;
        
         if(firstTime){
            textSize = 30;
            firstTime = false;
         }
        title.innerHTML.fontSize = textSize + "px";
        var charLimit = 12;

        console.log("Txt: " +  title.innerHTML.length + " " + charLimit);
            if( title.innerHTML.length > charLimit){
                console.log("Size: " + textSize + " " + charLimit);
                console.log("Txt: " +  title.innerHTML.length);
                document.getElementById("CardGen_Title_sun").style.fontSize = (textSize - 4) +"px";
                textSize = (textSize - 4);
                charLimit = (charLimit +3);
                console.log("Size: " + textSize + " " + charLimit);
            };
        
        document.getElementById("CardGen_Types_sun").innerHTML = sunType;
        document.getElementById("CardGen_Rules_sun").innerHTML = sunRuleReplaced;
        if(csRange == 0){
            var sunRange = ""
        }
        else{
            sunRange = csRange;
        }
        document.getElementById("rangeText_sun").innerHTML = sunRange;
        document.getElementById("flavourText_sun").innerHTML = document.getElementById("csFlavor").value;
        var selectedSubclass = classDropdown.options[classDropdown.selectedIndex].value;      
        var selectedTier = tierDropdown.options[tierDropdown.selectedIndex].value;
        document.getElementById("CardGen_Class_sun").innerHTML = baseClass;
        document.getElementById("CardGen_SubClass_sun").innerHTML = selectedSubclass + " " + selectedTier;

        const moonTitle = document.querySelector("#cmTitle").value;
        document.getElementById("spiritText_moon").innerHTML = cmCost;
        console.log(document.querySelector("#cmType1").checked);
        document.getElementById("CardGen_Title_moon").innerHTML = moonTitle;
        document.getElementById("CardGen_Types_moon").innerHTML = moonType;
        document.getElementById("CardGen_Rules_moon").innerHTML = moonRuleReplaced;
        if(cmRange == 0){
            var moonRange = ""
        }
        else{
            moonRange = cmRange;
        }
        document.getElementById("rangeText_moon").innerHTML = moonRange;
        document.getElementById("flavourText_moon").innerHTML = document.getElementById("cmFlavor").value;
        var selectedSubclass = classDropdown.options[classDropdown.selectedIndex].value;      
        var selectedTier = tierDropdown.options[tierDropdown.selectedIndex].value;
        document.getElementById("CardGen_Class_moon").innerHTML = baseClass; 
        document.getElementById("CardGen_SubClass_moon").innerHTML = selectedSubclass + " " + selectedTier; 
    }
