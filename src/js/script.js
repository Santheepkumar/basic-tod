const form = document.getElementById("todoform");
const input = document.getElementById("todoinput");
const list = document.getElementById("todolist");

form.addEventListener("submit", addToto);

function addToto(e) {
  e.preventDefault();
  const ourtodo = `<li class="text-lg">
    ${input.value} -
    <button
    onclick="removeTodo(this)"
    class="mt-2 border text-sm border-gray-200 bg-yellow-200 px-3 py-1 rounded-full hover:bg-blue-300"
    >
    Delete
    </button>
    </li>`;

  list.insertAdjacentHTML("beforeend", ourtodo);

  input.value = "";
  input.focus();
}

function removeTodo(todo) {
  todo.parentElement.remove();
}
