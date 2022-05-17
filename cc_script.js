    const sunCardTypes = document.querySelectorAll(".csTypes");
    const moonCardTypes = document.querySelectorAll(".cmTypes");
    const classType = document.querySelectorAll(".classTypes");
    const captureElementSun = document.querySelector("#sunCapture");
    const captureElementMoon = document.querySelector("#moonCapture");
    var classDropdown = document.getElementById("classSubtypes");
    var tierDropdown = document.getElementById("classTierSelect");
    
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
        html2canvas(captureElementSun, {
            scale: 3,
            background :'#FFFFFF',
            useCORS: true,
        }).then(canvas => {
            canvas.id = "h2canvas";
            document.body.appendChild(canvas);

        });
    }
        // html2canvas(captureElementMoon, {
        //     scale: 3,
        // }).then(canvas => {
        //     var image = canvas.toDataURL("image/jpg");
        //     el.href = image;
        //     // document.body.appendChild(canvas)
        // });
        //}
    download_img = function (el) {
        console.log(h2canvas);
        var image = document.getElementById("h2canvas").toDataURL("image/jpg");
        el.href = image;
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
                        document.getElementById("rangeArt_sun").src = "Art/range" + element.value + ".png"
                    }                   
                }
                if(element.name == "cmRangeType"){
                    if(element.value == "None"){
                        document.getElementById("rangeArt_moon").style.display = "none";
                    }
                    else{
                        document.getElementById("rangeArt_moon").style.display = "block";
                        document.getElementById("rangeArt_moon").src = "Art/range" + element.value + ".png"
                    }                 
                }             
            }          
        })
        //Replace all instances of keywords with a image.            
        const mapObj = 
        {
            '{ac}': "<img src='Art/Symbol_AC.png' height = '20px' width = '15px' margin= '0%'/>",
            '{w}': "<img src='Art/BaseDmg.png' height = '22' width = '17' />",
            '{and}': "<br><img src='Art/and.png' height='16' width='340' style='margin-top: 8px'/> <br>",
            '{or}': "<br><img src='Art/or.png' height='16' width='340'/> <br>",
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{w}|{and}|{or}/gi, matched => mapObj[matched]);
        let moonRuleReplaced = moonRuleText.replace(/{ac}|{w}|{and}|{or}/gi, matched => mapObj[matched]);

        //Adds the class type to the card.
        var baseClass = "";
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
        const sunTitle = document.querySelector("#csTitle").value;
        document.getElementById("spiritText_sun").innerHTML = csCost;
        console.log(document.querySelector("#csType1").checked);
        document.getElementById("CardGen_Title_sun").innerHTML = sunTitle;
        document.getElementById("CardGen_Types_sun").innerHTML = sunType;
        document.getElementById("CardGen_Rules_sun").innerHTML = sunRuleReplaced;
        if(csRange > 0){
            var sunRange = "+" + csRange;
        }
        else{var sunRange = ""}
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
        if(cmRange > 0){
            var moonRange = "+" + cmRange;
        }
        else{var moonRange = ""}
        document.getElementById("rangeText_moon").innerHTML = moonRange;
        document.getElementById("flavourText_moon").innerHTML = document.getElementById("cmFlavor").value;
        var selectedSubclass = classDropdown.options[classDropdown.selectedIndex].value;      
        var selectedTier = tierDropdown.options[tierDropdown.selectedIndex].value;
        document.getElementById("CardGen_Class_moon").innerHTML = baseClass; 
        document.getElementById("CardGen_SubClass_moon").innerHTML = selectedSubclass + " " + selectedTier; 
    }
