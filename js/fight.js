let select_Json = Cookies.get(`Pokemon`);
let selection_Data = JSON.parse(select_Json);
let user_health = Cookies.get(`user_health`)
let comp_health = Cookies.get(`comp_health`)


document.body.insertAdjacentHTML(`beforeend`,

    `<section>
    <h1>${selection_Data[`name`]}</h1>
    <img src="${selection_Data[`image_url`]}" >
    <p id="current_user_hp">${user_health}</p>
    <button id="tackle_attack">${selection_Data[`attacks`]}</button>
  
    </section>`);



let comp_select_Json = Cookies.get(`comp_Pokemon`);
let comp_selection_Data = JSON.parse(comp_select_Json);

document.body.insertAdjacentHTML("beforebegin",

`<section>
<h1>${comp_selection_Data[`name`]}</h1>
<img src="${comp_selection_Data[`image_url`]}" >
<p id="current_comp_hp">${comp_health}</p>
</section>`);



let comp_hp = document.getElementById(`current_comp_hp`);
let user_hp = document.getElementById(`current_user_hp`);


function pokemon_fight (details) {
comp_health = comp_health -10
Cookies.set(`comp_health`, comp_health)
comp_hp[`innerHTML`] = (`comp_health`, comp_health)
 user_health = user_health -5
Cookies.set(`user_health`, user_health)
user_hp[`innerHTML`] = (`user_health`, user_health) 


if (comp_health <= 0) {
  return document.body.insertAdjacentHTML("afterend",`<h1>You Win</h1>`);
     }else if(user_health <= 0) {
        document.body.insertAdjacentHTML("afterend",`<h1>You Fainted</h1>`);
    }   
}

let tackle_attk = document.getElementById(`tackle_attack`);
tackle_attk.addEventListener(`click`, pokemon_fight)