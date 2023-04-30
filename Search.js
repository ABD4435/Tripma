let switchBtn = document.getElementById("switch-btn");
switchBtn.addEventListener("click", () => {

  let source = document.getElementById("from");
  let destination = document.getElementById("to");
  let swap = source.value;
  source = destination.value;
  destination = swap;
});
switchBtn.addEventListener("click", () => {
  switchBtn.style.rotate = "180deg";
});