const addressInput = document.getElementById("client_address");
let addressSearch = document.getElementById("address-search");

const getAddress = () => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${addressInput.value}.json?access_token=pk.eyJ1IjoiaGVsbG9qZWFubmUiLCJhIjoiY2pydWdjaW1qMDdpbzQzdHN0d3RmZ3NmbCJ9.WDQ36rRUNAn-4WviS51TYQ`)
  .then(response => response.json())
  .then((arg) => {
    addressSearch.innerHTML = "";
   arg.features.forEach((feature) => {
    console.log(feature.place_name)
    addressSearch.insertAdjacentHTML('beforeend', `<li>${feature.place_name}</li>`);
    })
  });
};

const initMapbox = () => {
  console.log("hello");

  addressInput.addEventListener("keyup", getAddress);
}


export {initMapbox};
