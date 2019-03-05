
const findAMatch = () => {
  const changeMatchAsTrue = () => {
    const match = document.querySelector("#new_client_match");
    console.log(match.value)
    match.checked = true;
  }
  const button = document.querySelector("#specialbutton")
  button.addEventListener('click', changeMatchAsTrue);
}

export {findAMatch};
