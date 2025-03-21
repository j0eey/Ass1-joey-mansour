class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        if (typeof name !== "string" || !name.trim()) {
            throw new Error("Task name should be a string.");
        }

        this.tasks.push({
            id: this.currentId++,
            name,
            status: "Pending...",
        });
    }

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error(`Task with ID ${id} is not found.`);
        }
        task.status = "Completed successfully";
    }

    displayTasks(): void {
        if (!this.tasks.length) {
            console.log("No tasks are available.");
            return;
        }
        
        console.log("Task List:");
        this.tasks.forEach(task => {
            console.log(`- [${task.id}] ${task.name}: ${task.status}`);
        });
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.addTask("Deploy the project");

taskManager.completeTask(3);
taskManager.displayTasks();
