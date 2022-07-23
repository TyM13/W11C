function fight_one(details){
    if (Cookies.set(`Pokemon`,`Chikorita` )) {
        location.href = `fight.html`   
    }
}


let chikorita = document.getElementById(`chikorita_button`);
chikorita.addEventListener(`click`, fight_one)


function fight_two (details) {
    if (Cookies.set(`Pokemon`, `Cyndaquil` )) {
        location.href = `fight.html` 
    }
}


let cyndaquil = document.getElementById(`cyndaquil_button`);
cyndaquil.addEventListener(`click`, fight_two)



function fight_three (details) {
    if (Cookies.set(`Pokemon`, `Totadile` )) {
        location.href = `fight.html` 
    }
}


let totadile = document.getElementById(`totadile_button`);
totadile.addEventListener(`click`, fight_three)