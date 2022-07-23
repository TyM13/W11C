let select_Json = Cookies.get(`Pokemon`);
let selection_Data = JSON.parse(select_Json);

document.body.insertAdjacentHTML(`beforeend`,

    `<section>
    <h1>${selection_Data[`name`]}</h1>
    <img src="${selection_Data[`image_url`]}" >
    <p>${selection_Data[`health`]}</p>
    <button>${selection_Data[`attacks`]}</button>

  
    </section>`);





