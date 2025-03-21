var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        if (typeof name !== "string") {
            throw new Error("Task name should be a string");
        }
        var newTask = {
            id: this.currentId++,
            name: name,
            status: "Pending...",
        };
        this.tasks.push(newTask);
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.status = "Completed successfully";
        }
        else {
            throw new Error("Task with ID ".concat(id, " is not found."));
        }
    };
    TaskManager.prototype.displayTasks = function () {
        if (this.tasks.length === 0) {
            console.log("No tasks are available");
            return;
        }
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
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
