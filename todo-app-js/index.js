const input = document.getElementById("input");
const inputAdd = document.getElementById("input_add");
const todoItems = document.getElementById("todo_items");
const doneItems = document.getElementById("done_items");

inputAdd.addEventListener("click", () => {
  const inputText = input.value;
  if (inputText === "") return;
  input.value = null;

  const todoItem = document.createElement("li");
  todoItem.innerText = inputText;
  todoItems.appendChild(todoItem);

  const todoComplete = document.createElement("button");
  todoComplete.innerText = "Complete";
  todoItem.appendChild(todoComplete);
  todoComplete.addEventListener("click", () => {
    const completedLi = todoComplete.parentElement;
    todoItems.removeChild(completedLi);
    const doneItem = document.createElement("li");
    doneItem.innerText = completedLi.firstChild.textContent;
    doneItem.classList.add("done_item");
    doneItems.appendChild(doneItem);

    const doneBack = document.createElement("button");
    doneBack.innerText = "back";
    doneItem.appendChild(doneBack);
    doneBack.addEventListener("click", () => {
      const backedLi = doneBack.parentElement;
      doneItems.removeChild(backedLi);
      const todoItem = document.createElement("li");
      todoItem.innerText = backedLi.firstChild.textContent;
      todoItem.appendChild(todoComplete);
      todoItem.appendChild(todoDelete);
      todoItems.appendChild(todoItem);
    });
  });

  const todoDelete = document.createElement("button");
  todoDelete.innerText = "Delete";
  todoItem.appendChild(todoDelete);
  todoDelete.addEventListener("click", () => {
    const deletedLi = todoDelete.parentElement;
    todoItems.removeChild(deletedLi);
  });
});

// innerText, textContent, ...の使い分け？
// elementnode : node?
