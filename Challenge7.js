var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        if (typeof name !== "string" || !name.trim()) {
            throw new Error("Task name should be a string.");
        }
        this.tasks.push({
            id: this.currentId++,
            name: name,
            status: "Pending...",
        });
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (!task) {
            throw new Error("Task with ID ".concat(id, " is not found."));
        }
        task.status = "Completed successfully";
    };
    TaskManager.prototype.displayTasks = function () {
        if (!this.tasks.length) {
            console.log("No tasks are available.");
            return;
        }
        console.log("Task List:");
        this.tasks.forEach(function (task) {
            console.log("- [".concat(task.id, "] ").concat(task.name, ": ").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.addTask("Deploy the project");
taskManager.completeTask(3);
taskManager.displayTasks();
