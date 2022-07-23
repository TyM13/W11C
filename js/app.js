function fight_one(details) {
    let pick_chikorita_json = JSON.stringify(pokemon_chikorita)
    Cookies.set(`Pokemon`,pick_chikorita_json )
    Cookies.set(`user_health`,`${pokemon_chikorita[`health`]}` )
    location.href = `fight.html`
}

function fight_two(details) {
    let pick_cyndaquil_json = JSON.stringify(pokemon_cyndaquil)
    Cookies.set(`Pokemon`,pick_cyndaquil_json )
    Cookies.set(`user_health`,`${pokemon_cyndaquil[`health`]}` )
    location.href = `fight.html`
}

function fight_three(details) {
    let pick_totodile_json = JSON.stringify(pokemon_totodile)
    Cookies.set(`Pokemon`,pick_totodile_json )
    Cookies.set(`user_health`,`${pokemon_totodile[`health`]}` )
    location.href = `fight.html`
}

let pokemon_chikorita = 

    {
        name: `Chikorita`,
        image_url: `/chiko_idle.gif`,
        health: 50,
        attacks: `tackle`
    };

    let pokemon_cyndaquil =
    {

        name: `Cyndaquil`,
        image_url: `/cyndaquil.gif`,
        health: 55,
        attacks: `tackle`
    };

    let pokemon_totodile =
    {

        name: `Totadile`,
        image_url: `/totadile.gif`,
        health: 60,
        attacks: `tackle`
    };





let chikorita_click = document.getElementById(`chikorita_button`);
chikorita_click.addEventListener(`click`, fight_one)


let cyndaquil_click = document.getElementById(`cyndaquil_button`);
cyndaquil_click.addEventListener(`click`, fight_two)

let totodile_click = document.getElementById(`totadile_button`);
totodile_click.addEventListener(`click`, fight_three)

