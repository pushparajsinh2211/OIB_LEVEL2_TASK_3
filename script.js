const addBtn = document.querySelector(".addBtn");
var input = document.querySelector(".new_task_input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("editBtn");

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("removeBtn");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);

    editBtn.addEventListener("click", () => {
      this.edit(input);
      if (!input.disabled) {
        editBtn.innerHTML = "Done";
      } else {
        editBtn.innerHTML = "Edit";
      }
    });

    removeBtn.addEventListener("click", () => {
      this.remove(itemBox);
    });
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  } else {
    alert("Please Enter your task!");
  }
}

addBtn.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
