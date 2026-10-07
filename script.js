const bulb = document.getElementById("bulb");
const on = document.getElementById("on");
const of = document.getElementById("off");

let theBulb = true;

if (theBulb === true) {
    console.log("open")
} else{
    console.log("close")
}

on.addEventListener('click', function() {
    if (theBulb === true){
        bulb.src="pic_bulbon.gif"
        theBulb = false
    } else {
        bulb.src="pic_bulboff.gif"
        theBulb = true
    }
})

of.addEventListener('click', function() {
    if (theBulb === false){
        bulb.src="pic_bulboff.gif"
        theBulb = true 
    }else {
        bulb.src="pic_bulboff.gif"
        theBulb = false
    }
})
        

//     } else {
//         padlock.innerText = "🔒"
//         unlockedBtn.innerText = "Unlocked";
//         isLocked = true;
        
//     }
// })




