let country = new URLSearchParams(window.location.search).get("name");
let detail = document.querySelector(".detail");

window.addEventListener("load", async function () {
  let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = await res.json();
  console.log(data);
  details(data);
});

function details(arr) {
  detail.innerHTML = "";
  arr.forEach((el) => {
    detail.innerHTML = `
    <div class="photo">
    <img  src="${el.flags.svg}" alt="" />
  </div>
  <div class="content">
    <h2>${el.name?.common}</h2>
    <div class="about">
      <div class="left">
        <h5>Native Name:${el.name?.official}</h5>
        <h5>Population:${el.population}</h5>
        <h5>Region:${el.region}</h5>
        <h5>Sub Region:${el.subregion}</h5>
        <h5>Capital:${el.capital}</h5>
      </div>
      <div class="right">
        <h5>Top Level Domain:${el.tld}</h5>
        <h5>Status:${el.status}</h5>
        <h5>Area:${el.area}</h5>
      </div>
    </div>
  </div>
    `;
  });
}
function darkLightMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
 }