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






let pokemon_selection =[

{
    name: `Chikorita`,
    image_url: `/chiko_idle.gif`,
    health: `50`,
    attacks:`tackle`
},

{

    name: `Cyndaquil`,
    image_url: `/cyndaquil.gif`,
    health: `50`,
    attacks:`tackle` 
},

{

    name: `Totadile`,
    image_url: `/totadile.gif`,
    health: `50`,
    attacks:`tackle`
}
]

let pokemon_selection_Json = JSON.stringify(pokemon_selection);
Cookies.set(`user_selection`, pokemon_selection_Json);
