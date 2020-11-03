let blue = document.querySelector('.blue');
let pink = document.querySelector(".pink");
let yellow = document.querySelector(".yellow");
let gray = document.querySelector(".gray")
let star = document.querySelector(".fa-star");



let dm = [
  document.querySelector(".header"),
  document.querySelector("body"),
  document.querySelector(".content"),
];




  blue.addEventListener("click", function () {
    // let dm = [
    //   document.querySelector(".header"),
    //   document.querySelector("body"),
    //   document.querySelector(".content"),
    // ];
    for (let i = 0; i < dm.length; i++) {
      dm[i].style.backgroundColor = "#0392BF";
      dm[i].style.color = "#B3D4E0";
    }
  });



pink.addEventListener("click", function () {

    for (let i = 0; i < dm.length; i++) {
      dm[i].style.backgroundColor = "#ED48BA";
      dm[i].style.color = "#03f0fc";
    }
 
});



yellow.addEventListener("click", function () {

  for (let i = 0; i < dm.length; i++) {
    dm[i].style.backgroundColor = "#FBEC06";
    dm[i].style.color = "purple";
  }
    
  }
);


gray.addEventListener("click", function () {

  for (let i = 0; i < dm.length; i++) {
    dm[i].style.backgroundColor = "#B3D4E0";
    dm[i].style.color = "#0392BF";
  }
});