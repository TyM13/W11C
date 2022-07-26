let select_Json = Cookies.get(`Pokemon`);                                   // gets the cookies from Pokemon and puts it in the variable select_Json
let selection_Data = JSON.parse(select_Json);                               // converts the string select_Json into an object and puts it as the variable selection_Data
let user_health = Cookies.get(`user_health`)                                // gets the cookies from user_health and puts it in the variable user_health
let comp_health = Cookies.get(`comp_health`)                                // gets the cookies from comp_health and puts it in the variable comp_health


document.body.insertAdjacentHTML(`beforeend`,                               //targets the document body and inserts the text, takes the variable selection_Data goes and gets the key to display

    `<section id="comp_section">
    <h1>${selection_Data[`name`]}</h1>                                      
    <img class="pokemon_imgs"src="${selection_Data[`image_url`]}" >
    <p id="current_user_hp">${user_health}</p>
    <button id="tackle_attack">${selection_Data[`attacks`]}</button>
  
    </section>`);



let comp_select_Json = Cookies.get(`comp_Pokemon`);                         // gets the cookie comp_Pokemon and stores it as the variable comp_select_Json
let comp_selection_Data = JSON.parse(comp_select_Json);                     // converts the string comp_select_Json into an object and puts it as the variable comp_selection_Data

document.body.insertAdjacentHTML("beforeend",                               //targets the document body and inserts the text, takes the variable comp_selection_Data goes and gets the key to display

`<section>
<h1>${comp_selection_Data[`name`]}</h1>
<img class="pokemon_imgs" src="${comp_selection_Data[`image_url`]}" >
<p id="current_comp_hp">${comp_health}</p>
</section>`);



let comp_hp = document.getElementById(`current_comp_hp`);                   //gets the id current_comp_hp and stores it as the variable comp_hp
let user_hp = document.getElementById(`current_user_hp`);                   //gets the id current_user_hp and stores it as the variable user_hp


function pokemon_fight (details) {                                          
comp_health = comp_health -10                                               // minuses 10 from the variable comp_health
Cookies.set(`comp_health`, comp_health)                                     // sets the cookie name to comp_health and the value to the new comp_health
comp_hp[`innerHTML`] = (`comp_health`, comp_health)                         // changes the p tag to reflect the current comp health value when an attack is clicked
 user_health = user_health -5                                               // minuses 5 from the variable user_health
Cookies.set(`user_health`, user_health)                                     // sets the cookie name to user_health and the value to the new user_health
user_hp[`innerHTML`] = (`user_health`, user_health)                         // changes the p tag to reflect the current user_health value when an attack is clicked

let comp_section = document.getElementById(`comp_section`)                  // gets the id comp_section and stores it as the variable comp_section

if (comp_health <= 0) {                                                     // conditional that if the comps hp is less than or = to 0
    tackle_attk[`style`][`display`] = `none`                                // hide the attack button 
    comp_section.insertAdjacentHTML("beforeend",`<h1>You Win</h1>`);        // and display the h1 tag you win
 return comp_hp[`innerHTML`] = (``)                                         // hides the comps hp so you dont see any negative numbers when u defeat it

   
     }else if(user_health <= 0) {                                                               // conditional that if the user_health is less than or = to 0
        tackle_attk[`style`][`display`] = `none`                                                // hide the attack button 
        comp_section.insertAdjacentHTML("beforeend",`<h1 class="win_lose">You Fainted</h1>`);   // and display the h1 tag you fainted
     return  user_hp[`innerHTML`] = (``)                                                        // hides the user_hp so you dont see any negative numbers when u lose

        
    }   
}

let tackle_attk = document.getElementById(`tackle_attack`);                 // gets the id tackle_attack and sets it as the variable tackle_attk
tackle_attk.addEventListener(`click`, pokemon_fight)                        // when tackle_attack is clicked it will call the function pokemon fight