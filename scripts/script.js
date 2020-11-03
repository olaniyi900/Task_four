let blue = document.querySelector('.blue'); // selecting div to change color to blue
let pink = document.querySelector(".pink"); // selecting div to change color to pink
let yellow = document.querySelector(".yellow"); // selecting div to change color to yellow
let gray = document.querySelector(".gray") // selecting div to change color to grey
let star = document.querySelector(".fa-star");


// selecting header and body 
let dm = [
  document.querySelector(".header"),
  document.querySelector("body"),
  document.querySelector(".content"),
];



// eventlistener to change background color to blue
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


// eventlistener to change background color to pink
pink.addEventListener("click", function () {

    for (let i = 0; i < dm.length; i++) {
      dm[i].style.backgroundColor = "#ED48BA";
      dm[i].style.color = "#03f0fc";
    }
 
});


// eventlistener to change background color to yellow
yellow.addEventListener("click", function () {

  for (let i = 0; i < dm.length; i++) {
    dm[i].style.backgroundColor = "#FBEC06";
    dm[i].style.color = "purple";
  }
    
  }
);

// eventlistener to change background color to grey
gray.addEventListener("click", function () {

  for (let i = 0; i < dm.length; i++) {
    dm[i].style.backgroundColor = "#B3D4E0";
    dm[i].style.color = "#0392BF";
  }
});