
    //Function to add a task
    function addTask() {
        let taskInput = document.getElementById('taskInput');
        let taskList = document.getElementById('taskList');

        let taskText = taskInput.value.trim()

        if ( taskText ==='' ) {
            alert('Please enter a task.');
            return;
        };

        // Add task to the list
        let taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add('mb-2');

        // Add item to the task list:
        taskList.appendChild(taskItem);

        // Clear input line after adding a task
        taskInput.value = '';

        // Add a button to mark the task completed
        let completeButton = document.createElement("button");
        completeButton.textContent = "✓"
        completeButton.classList.add('bg-green-500','text-white', 'py-0', 'px-1', 'rounded','mr-2', 'hover:bg-green-600','float-right' );
        completeButton.onclick = function () { taskItem.classList.toggle('completed') };

        // Add a button to mark the task completed
        let removeButton = document.createElement("button");
        removeButton.textContent = "×"
        removeButton.classList.add('bg-red-500','text-white', 'py-0', 'px-1', 'rounded','mr-2', 'hover:bg-red-600','float-right' );
        removeButton.onclick = function () { taskList.removeChild(taskItem) };

        // Append buttons to the task line
        taskItem.appendChild(completeButton);
        taskItem.appendChild(removeButton);

    };

