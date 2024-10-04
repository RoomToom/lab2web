const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const todoText = prompt("Enter TODO text:");

  if (!todoText) return;

  // Створюємо елемент TODO
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  // Створюємо чекбокс
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);

  // Тут створюється текст
  const text = document.createElement('span');
  text.className = classNames.TODO_TEXT;
  text.textContent = todoText;

  // Тут створив кнопку видалення
  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(todoItem);
    updateItemCount();
    updateUncheckedCount();
  });

  // Зявляються елементи в елементі 
  todoItem.appendChild(checkbox);
  todoItem.appendChild(text);
  todoItem.appendChild(deleteButton);

  // Додаємо нове AOI TODO до списку
  list.appendChild(todoItem);

  // Оновлюємо чекбоксии
  updateItemCount();
  updateUncheckedCount();
}

function updateItemCount() {
  const items = list.getElementsByTagName('li').length;
  itemCountSpan.textContent = items;
}

function updateUncheckedCount() {
  const uncheckedItems = list.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  uncheckedCountSpan.textContent = uncheckedItems;
}
