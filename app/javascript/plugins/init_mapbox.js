let addressInput = document.getElementById("new_client_address");
let addressSearch = document.getElementById("address-search");
let addressList;

const chooseAddress = () => {
  console.log(addressList);
  addressList.forEach(item => item.addEventListener("click", choose));
}

const choose = (event) => {
  console.log(event.currentTarget);
  addressInput.value = "";
  // addressInput.value = "hello";
  addressInput.value = event.currentTarget.innerText;
  addressSearch.innerHTML = "";
}

const getAddress = () => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${addressInput.value}.json?access_token=pk.eyJ1IjoiaGVsbG9qZWFubmUiLCJhIjoiY2pydWdjaW1qMDdpbzQzdHN0d3RmZ3NmbCJ9.WDQ36rRUNAn-4WviS51TYQ&autocomplete=true&country=fr`)
  .then(response => response.json())
  .then((arg) => {
    addressSearch.innerHTML = "";
    arg.features.forEach((feature) => {
      // console.log(feature.place_name)
      addressSearch.insertAdjacentHTML('beforeend', `<li>${feature.place_name}</li>`);
    })
    addressList = addressSearch.querySelectorAll('li');
    chooseAddress();
  });
};

const initMapbox = () => {
  // console.log("hello");
  addressInput.addEventListener("keyup", getAddress);
}




export {initMapbox};
export {chooseAddress};
