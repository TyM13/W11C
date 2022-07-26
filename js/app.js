function fight_one(details) {
    let pick_chikorita_json = JSON.stringify(pokemon_chikorita)     // creates variable and stores pokemon_chikorita (object) in it using json.stringify
    Cookies.set(`Pokemon`,pick_chikorita_json )                     // sets a cookie name as pokemon and value as pick_chikorita_json
    Cookies.set(`user_health`,`${pokemon_chikorita[`health`]}` )    //sets a cookie name as user_health and goes into the object pokemon_chikorita  and sets the value as the key health
    location.href = `fight.html`                                    // brings you to fight page
}

function fight_two(details) {
    let pick_cyndaquil_json = JSON.stringify(pokemon_cyndaquil)      // creates variable and stores pokemon_cyndaquil (object) in it using json.stringify
    Cookies.set(`Pokemon`,pick_cyndaquil_json )                      // sets a cookie name as pokemon and value as pick_cyndaquil_json
    Cookies.set(`user_health`,`${pokemon_cyndaquil[`health`]}` )     //sets a cookie name as user_health and goes into the object pokemon_cyndaquil health and sets the value as health
    location.href = `fight.html`                                     // brings you to fight page
}

function fight_three(details) {
    let pick_totodile_json = JSON.stringify(pokemon_totodile)        // creates variable and stores pokemon_totodile (object) in it using json.stringify
    Cookies.set(`Pokemon`,pick_totodile_json )                       // sets a cookie name as pokemon and value as pick_totodile_json
    Cookies.set(`user_health`,`${pokemon_totodile[`health`]}` )      //sets a cookie name as user_health and goes into the object pokemon_totodile health and sets the value as health
    location.href = `fight.html`                                     // brings you to fight page
}


let pokemon_chikorita =                                              // created variable called pokemon_chikorita that's an object, stores keys

    {
        name: `Chikorita`,
        image_url: `/chiko_idle.gif`,
        health: 50,
        attacks: `tackle`
    };

    let pokemon_cyndaquil =                                         // created variable called pokemon_cyndaquil that's an object, stores keys
    {

        name: `Cyndaquil`,
        image_url: `/cyndaquil.gif`,
        health: 55,
        attacks: `tackle`
    };

    let pokemon_totodile =                                          // created variable called pokemon_totodile that's an object, stores keys
    {

        name: `Totadile`,
        image_url: `/totadile.gif`,
        health: 60,
        attacks: `tackle`
    };





let chikorita_click = document.getElementById(`chikorita_button`);  // gets the id and stores it as the variable chikorita_button
chikorita_click.addEventListener(`click`, fight_one)                // when the variable chikorita_click is clicked it will start the function fight_one


let cyndaquil_click = document.getElementById(`cyndaquil_button`);  // gets the id and stores it as the variable cyndaquil_button
cyndaquil_click.addEventListener(`click`, fight_two)                // when the variable cyndaquil_click is clicked it will start the function fight_two

let totodile_click = document.getElementById(`totadile_button`);    // gets the id and stores it as the variable totadile_button
totodile_click.addEventListener(`click`, fight_three)               // when the variable totodile_click is clicked it will start the function fight_three


let comp_cyndaquil_json = JSON.stringify(pokemon_cyndaquil)         // creates variable (comp_cyndaquil_json) and stores comp_cyndaquil_json (object) in it using json.stringify 
Cookies.set(`comp_Pokemon`,comp_cyndaquil_json )                    // sets a cookie name as comp_Pokemon and value as comp_cyndaquil_json
Cookies.set(`comp_health`,`${pokemon_cyndaquil[`health`]}` )        //sets a cookie name as comp_health and goes into the object pokemon_cyndaquil and sets the value as the key health