// - Variables - //

const FurryInput = document.querySelector(".furryinput");
// const Button1 = document.querySelector(".magenta");
// const Button2 = document.querySelector(".gray");

// - Functions - //

function Change(element) {
  if ((element.class = "magenta")) {
    FurryInput.style.color = "blue";
    FurryInput.textContent = "OwO";

  } else if ((element.class = "gray")) {
    FurryInput.style.color = "black";
    FurryInput.textContent = "Furried!";
  }
}

function Enter(element) {
  element.style.color = "black";
}

function Leave(element) {
  element.style.color = "white";
}
