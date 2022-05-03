    const sunCardTypes = document.querySelectorAll(".csTypes");
    const classType = document.querySelectorAll(".classTypes");
    const captureElement = document.querySelector("#capture");
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

    }
    function selectClass_Warlock(){

    }

    let sunType;
  
    function draw2canvas(){
        html2canvas(captureElement, {
            scale: 3,
            // width: 533,
            // height: 748,
            // dpi: 500,
        }).then(canvas => {
            document.body.appendChild(canvas)
        });
    }

    var loadFile = function(event) {
        var image = document.getElementById('cardArtBg');
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    function generateCard()
    {
        //Replace all instances of keywords with a image.     
        const sunRuleText = document.querySelector("#csRule").value;   
        const csCost =  document.getElementById("csCost").value;    
        const csRange = document.getElementById("csRangeText").value;
        if(document.getElementById("csRangeTypeMelee").checked == true){
            document.getElementById("rangeArt_Sun").src = "Art/meleeRange.png"
        }
        if(document.getElementById("csRangeTypeRanged").checked == true){
            document.getElementById("rangeArt_Sun").src = "Art/bowRange.png"
        }
        if(document.getElementById("csRangeTypeMagic").checked == true){
            document.getElementById("rangeArt_Sun").src = "Art/magicRange.png"
        }

        const mapObj = 
        {
            '{ac}': "<img src='Art/Symbol_AC.png' height = '20px' width = '15px' margin= '0%'/>",
            '{b}': "<img src='Art/BaseDmg.png' height = '22' width = '17' />"
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{b}/gi, function(matched){
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
        document.getElementById("spiritText").innerHTML = csCost;
        console.log(document.querySelector("#csType1").checked);
        document.getElementById("CardGen_Title").innerHTML = sunTitle;
        document.getElementById("CardGen_Types").innerHTML = sunType;
        document.getElementById("CardGen_Rules").innerHTML = sunRuleReplaced;
        document.getElementById("rangeText_Sun").innerHTML = "+" + csRange;
        document.getElementById("flavourText_sun").innerHTML = document.getElementById("csFlavor").value;
        
        var selectedSubclass = classDropdown.options[classDropdown.selectedIndex].value;      
        var selectedTier = tierDropdown.options[tierDropdown.selectedIndex].value;
        document.getElementById("CardGen_Class").innerHTML = baseClass + " - " + selectedSubclass + " " + selectedTier; 
    }
