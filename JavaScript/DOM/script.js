document.getElementById("change-color").addEventListener("click", function () {
  let change = document.getElementById("change-color");
  change.classList.add("highlight");
});

document.getElementById("element").addEventListener("click", function () {
  let shift = document.getElementById("submit");
  shift.textContent = "submit";
});

document.getElementById("items").addEventListener("click", function () {
  let newChild = document.createElement("li");
  newChild.textContent = "eggs";
  document.getElementById("cart").appendChild(newChild);
});
document.getElementById("itemsRemove").addEventListener("click", function () {
  let cart = document.getElementById("cart");
  cart.lastElementChild.remove();
});

document.getElementById("tea").addEventListener("click",function(event){
 if(event.target && event.target.matches("teaItem")){
  alert(event.target.textContent)
 }
})