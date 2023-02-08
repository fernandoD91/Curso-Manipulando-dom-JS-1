const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    const taskName = input.value;
    input.value = "";
    const ul = document.querySelector('[data-list]')
    const li = document.createElement('li');
    li.classList.add('card')
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task"> ${taskName}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    li.innerHTML = content;
    ul.appendChild(li);
}
btn.addEventListener('click', createTask);