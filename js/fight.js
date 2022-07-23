// let selection = Cookies.get(`Pokemon`)
// if (selection === `Chikorita`) {
//     let fight_header = document.getElementById(`fight_header`);
//     fight_header.insertAdjacentHTML(`beforeend`, `<section>
//     <h1></h1>

//     </section>`)

// }


let pokemon_select_Json = Cookies.get(`user_selection`);
if (pokemon_select_Json === undefined) {
    console.log(`error`)
}
let selection_Data = JSON.parse(pokemon_select_Json);
document.body.insertAdjacentHTML(`beforeend`,

    `<section>
    <h1>${selection_Data[`name`]}</h1>
    <img src="${selection_Data[`image_url`]}" >
    <p>${selection_Data[`health`]}</p>
  
    </section>`);