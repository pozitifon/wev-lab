let searchBtn = document.getElementById("search-btn");
let civilizationInput = document.getElementById("civilization-input");
searchBtn.addEventListener("click", () => {
    let civilizationAPI = `https://api.punkapi.com/v2/beers/random`;
    fetch(civilizationAPI)
        .then((response) => response.json())
        .then((data) => {
            out.innerHTML =
        `<img src="${data[0].image_url}">
        <div class="wrapper">
            <div class="info">
                <h4>Название:</h4>
                <span>${data[0].name}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="info">
                <h4>Описание:</h4>
              <span>${data[0].description}</span>
            </div>
        </div>` ;
    })
});