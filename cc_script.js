    const sunCardTypes = document.querySelectorAll(".csTypes");
    const classType = document.querySelectorAll(".classTypes");
    const captureElement = document.querySelector("#sunCapture");
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
    var hiddenElement = document.createElement('a');
    let sunType;
    console.log(captureElement);
    function draw2canvas(){
        html2canvas(captureElement, {
            scale: 3,
        }).then(canvas => {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, 'my_image.jpg');
              });
            // document.body.appendChild(canvas)
            // var dataURL = canvas.toDataURL('image/jpeg', );
            // console.log(dataURL);
            // hiddenElement.href = dataURL;
            // hiddenElement.target = '_blank';
            // hiddenElement.download = this.state.settings.exportFilename +'.png' || 'export.csv';
            // hiddenElement.click();
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
            '{b}': "<img src='Art/BaseDmg.png' height = '22' width = '17' />",
            '{and}': "<br><img src='Art/and.png' height='16' width='340'/> <br>",
            '{or}': "<br><img src='Art/or.png' height='16' width='340'/> <br>"
        };
        let sunRuleReplaced = sunRuleText.replace(/{ac}|{b}|{and}|{or}/gi, function(matched){
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
        if(csRange > 0){
            var sunRange = "+" + csRange;
        }
        else{var sunRange = ""}
        document.getElementById("rangeText_Sun").innerHTML = sunRange;
        document.getElementById("flavourText_sun").innerHTML = document.getElementById("csFlavor").value;
        
        var selectedSubclass = classDropdown.options[classDropdown.selectedIndex].value;      
        var selectedTier = tierDropdown.options[tierDropdown.selectedIndex].value;
        document.getElementById("CardGen_Class").innerHTML = baseClass + " - " + selectedSubclass + " " + selectedTier; 
    }
