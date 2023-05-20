let BASE_URL = `https://restcountries.com/v2/all`;
let cards = document.querySelector(".row");
let search = document.querySelector(".search");
let select = document.querySelector("#select");

window.addEventListener("load", async function () {
  let res = await fetch(BASE_URL);
  let data = await res.json();
  console.log(data);
  cardList(data);
});
function cardList(arr) {
  cards.innerHTML = "";
  arr.forEach(
    (el) =>
      (cards.innerHTML += `
    <div class="col  mt-3 col-sm-6 col-md-4 col-lg-3">
    <div class="card p-2" >
      <a href="./details.html?name=${el.name}"><img height="180px" width="100%" src="${el.flags.svg}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">${el.name}</h4>
        <p class="card-text m-0"><b>Population:${el.population}</b></p>
        <p class="card-text m-0"><b>Region:${el.region}</b></p>
        <p class="card-text m-0"><b>Capital:${el.capital}</b></p>
      </div>
    </div>
  </div>
    `)
  );
}

search.addEventListener("input", function (e) {
  axios(BASE_URL).then((res) => {
    let filteredCountries = res.data.filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    cardList(filteredCountries);
  });
});
select.addEventListener("change", function (e) {
  axios(BASE_URL).then((res) => {
    let filterCountries = res.data.filter((element) => {
      return element.region
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    cardList(filterCountries);
  });
});

function darkLightMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
