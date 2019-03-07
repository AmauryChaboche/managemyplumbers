// $(document).ready(function(){
//   $(".plumber-choices").click(function(){
//     $(this).toggleClass("active");
//   });
// });


const plumbersChoice = () => {
  const plumbers = document.querySelectorAll(".plumber-choice");
  plumbers.forEach((plumber) => {
    plumber.addEventListener("click", (event) => {
      plumbers.forEach((plumber)=>{plumber.classList.remove("active")})
      plumber.classList.add("active");
    });
  });
};

export { plumbersChoice }
