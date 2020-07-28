const unorderedList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let inputVal = input.value;
  input.value = '';
  
  const item = document.createElement('li');
  const itemSpan = document.createElement('span');
  const itemButton = document.createElement('button');

  item.appendChild(itemSpan);
  item.textContent = inputVal;
  item.appendChild(itemButton);
  itemButton.textContent = "Delete";
  unorderedList.appendChild(item);

  itemButton.onclick = function(e) {
  unorderedList.removeChild(item);
}

input.focus();
}