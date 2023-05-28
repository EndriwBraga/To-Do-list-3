const button = document.getElementById('button');
const taskList = document.querySelector('ul');
const input = document.getElementById('input');

button.addEventListener('click', addTask);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const task = input.value.trim().toLowerCase();
    if (task === '') {
        alert('Por favor, insira um valor.');
    } else {
        const tasks = Array.from(taskList.getElementsByTagName('li'));
        const taskExists = tasks.some(existingTask => existingTask.textContent.toLowerCase() === task);

        if (taskExists) {
            alert('Essa tarefa já foi adicionada.');
            input.value = '';
        } else {
            const newTask = document.createElement('li');
            newTask.textContent = input.value;

            taskList.appendChild(newTask);
            input.value = '';
        }
    }
}
