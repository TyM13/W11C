let select_Json = Cookies.get(`Pokemon`);
let selection_Data = JSON.parse(select_Json);


document.body.insertAdjacentHTML(`beforeend`,

    `<section>
    <h1>${selection_Data[`name`]}</h1>
    <img src="${selection_Data[`image_url`]}" >
    <p>${selection_Data[`health`]}</p>
    <button>${selection_Data[`attacks`]}</button>

  
    </section>`);



let comp_select_Json = Cookies.get(`comp_Pokemon`);
let comp_selection_Data = JSON.parse(comp_select_Json);

document.body.insertAdjacentHTML("beforebegin",

`<section>
<h1>${comp_selection_Data[`name`]}</h1>
<img src="${comp_selection_Data[`image_url`]}" >
<p>${comp_selection_Data[`health`]}</p>


</section>`);
