const createElement = ({ tag, id, className, textContent }) => {
  const element=document.createElement(tag);
  element.id=id;
  element.className=className;
  element.textContent=textContent;
  return element;
}
const addBtn= document.querySelector("#add");
const todos=document.querySelector("#todos");

const removeTodo = event => {
  todos.removeChild(event.target.parentElement);//удаляние элемента из списка элемента li
}

const addTodo = event => {
  const todoName = event.target.previousElementSibling.value;//берет информацию из поля для ввода, которое является предыдушим родственным элементом
  const removeBtn = createElement({// создание кнопки удаления с помощью createElement
    tag: "button",
    id: "remove",
    className: "button",
    textContent: " X ",
  });
  removeBtn.addEventListener("click", removeTodo);//добавление слушателя для кнопки, который при клике будет вызывать функцию removetodo
  const todo = createElement({// создание элемента в списке
    tag: "li",
    className: "todo",
  });
  const todoText = createElement({//создание элемента с классом span и добавление вводимого пользователем текста
    tag: "span",
    className: "todo__text",
    textContent: todoName,
  });

  //добавление поля с текстом и кнопки удаления
  todo.appendChild(todoText);
  todo.appendChild(removeBtn);
  todos.appendChild(todo);
}

// обработка события клика по кнопку добавления дела
addBtn.addEventListener("click", addTodo);
