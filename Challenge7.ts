class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        if (typeof name !== "string") {
            throw new Error("Task name should be a string");
        }
        const newTask = {
            id: this.currentId++,
            name,
            status: "Pending...",
        };
        this.tasks.push(newTask);
    }

    completeTask(id: number): void {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
            task.status = "Completed successfully";
        } else {
            throw new Error(`Task with ID ${id} is not found.`);
        }
    }

    displayTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks are available");
            return;
        }
        this.tasks.forEach((task) => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}
const taskManager = new TaskManager();

taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.addTask("Deploy the project")
taskManager.completeTask(3);
taskManager.displayTasks();