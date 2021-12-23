const input = document.getElementById("input");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const btnEvil = document.querySelector(".btn-remove-rel");
let guestList = document.getElementById("guest-list");
let guests = ["Me","Cat", "Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"];


function renderGuestList() {
    guestList.innerHTML = "";
    for (let i = 0; i < guests.length; i++) {
      const li =  document.createElement("li");
      li.textContent = guests[i];
      guestList.appendChild(li);
    }
}

renderGuestList();


function addNewGuest() {
    if(input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    guestList.appendChild(li);
    input.value = "";
    }
}


function removeLatestGuest() {
       guestList.removeChild(guestList.lastChild);
}


function removeEvil() {
    let evilIndex = guests.indexOf("Evil Relative");
    
    if(guests[evilIndex] === "Evil Relative") {
        guests.splice(evilIndex, 1);
        renderGuestList();
    }
}


btnAdd.addEventListener("click", addNewGuest);
btnRemove.addEventListener("click", removeLatestGuest);
btnEvil.addEventListener("click", removeEvil);
    

