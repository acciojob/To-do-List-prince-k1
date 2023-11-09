//your code here
let input = document.getElementById('newTodoInput');
let btn = document.getElementById('addTodoBtn');
let list = document.getElementById('todoList');

btn.addEventListener('click', () => {
	let val = input.value;
	let create = document.createElement('li');
	if(val != ''){
		create.innerText = val;
		list.appendChild(create);
	}
	input.value = "";
})
