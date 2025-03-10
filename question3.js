// Task list array
let tasks = [];

// Add new task
function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

// View all tasks
function viewTasks() {
    return tasks;
}

// Update a task
function updateTask(id, updatedTask) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
    }
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage
addTask(1, 'Sample Task', 'This is a description');
console.log(viewTasks());
updateTask(1, { name: 'Updated Task' });
console.log(viewTasks());
deleteTask(1);
console.log(viewTasks());
