 
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


//showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{ 
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click",()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*+";


//function to generate password 
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    let i =1;
    while (i<=inputSlider.value){
    genPassword +=allChars.charAt(Math.floor( Math.random() * allChars.length) );
    i++;
    }

     return genPassword;

}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = "check"
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
                    copyIcon.title = "";
        },3000)
    }
})