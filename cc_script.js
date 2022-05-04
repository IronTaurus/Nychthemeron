    const sunCardTypes = document.querySelectorAll(".csTypes");
    const moonCardTypes = document.querySelectorAll(".cmTypes");
    const classType = document.querySelectorAll(".classTypes");
    const captureElementSun = document.querySelector("#sunCapture");
    const captureElementMoon = document.querySelector("#moonCapture");
    var classDropdown = document.getElementById("classSubtypes");
    var tierDropdown = document.getElementById("classTierSelect");
    
    function selectClass_Fighter(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}    
        });
        document.querySelectorAll("#fighter").forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });          
    }
    function selectClass_Ranger(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}        
        });
        document.querySelectorAll("#ranger").forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });
    }
    function selectClass_Apprentice(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}        
        });
        document.querySelectorAll("#apprentice").forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });
    }
    function selectClass_Warlock(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}        
        });
        document.querySelectorAll("#warlock").forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });
    }
    function selectClass_Druid(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}        
        });
        document.querySelectorAll("#druid").forEach((element, index) => {
            if (element) {
                var display = element.style.display;        
                if (display == "none") {
                    element.style.display = "block";
                }
            }
        });
    }
    function selectClass_Wizard(){
        const $select = document.querySelector('#classSubtypes');
        $select.value = 'Subtypes'
        document.querySelectorAll(".subType").forEach((element, index) => {
            var display = element.style.display;  
            if(display != "none"){element.style.display = "none";}        
        });
        document.querySelectorAll("#wizard").forEach((element, index) => {
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
        }).then(canvas => {
            document.body.appendChild(canvas)
        });
        html2canvas(captureElementMoon, {
            scale: 3,
        }).then(canvas => {
            document.body.appendChild(canvas)
        });
    }

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
        if(document.getElementById("csRangeTypeMelee").checked == true){
            document.getElementById("rangeArt_sun").src = "Art/meleeRange.png"
        }
        if(document.getElementById("csRangeTypeRanged").checked == true){
            document.getElementById("rangeArt_sun").src = "Art/bowRange.png"
        }
        if(document.getElementById("csRangeTypeMagic").checked == true){
            document.getElementById("rangeArt_sun").src = "Art/magicRange.png"
        }
        if(document.getElementById("cmRangeTypeMelee").checked == true){
            document.getElementById("rangeArt_moon").src = "Art/meleeRange.png"
        }
        if(document.getElementById("cmRangeTypeRanged").checked == true){
            document.getElementById("rangeArt_moon").src = "Art/bowRange.png"
        }
        if(document.getElementById("cmRangeTypeMagic").checked == true){
            document.getElementById("rangeArt_moon").src = "Art/magicRange.png"
        }
        //Replace all instances of keywords with a image.            
        const mapObj = 
        {
            '{ac}': "<img src='Art/Symbol_AC.png' height = '20px' width = '15px' margin= '0%'/>",
            '{b}': "<img src='Art/BaseDmg.png' height = '22' width = '17' />",
            '{and}': "<br><img src='Art/and.png' height='16' width='340'/> <br>",
            '{or}': "<br><img src='Art/or.png' height='16' width='340'/> <br>"
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{b}|{and}|{or}/gi, function(matched){
            return mapObj[matched];});
        let moonRuleReplaced = moonRuleText.replace(/{ac}|{b}|{and}|{or}/gi, function(matched){
            return mapObj[matched];});    

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
        document.getElementById("CardGen_Class_sun").innerHTML = baseClass + " - " + selectedSubclass + " " + selectedTier; 

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
        document.getElementById("CardGen_Class_moon").innerHTML = baseClass + " - " + selectedSubclass + " " + selectedTier; 
    }
