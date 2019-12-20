class List {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.completed = [];
  }

  addTask(title, description) {
    const task = new Task(title, description);
    this.tasks.push(task);
    return `Task has been added to the list! You now have ${this.tasks.length} task(s).`;
  }

  completeTask(title) {
    let taskTitle = this.tasks.find(el => title === el.title);
    if(taskTitle) {
      let complete = this.tasks.splice(this.tasks.indexOf(taskTitle), 1);
      this.completed.push(complete);
      return `Task has been completed! Congrats!`;
    }
    return `You don't have that task in your list!`;
  }

  uncompleteTask(title) {
    let taskTitle = this.completed.find(el => title === el.title);
    if(taskTitle) {
      let tasked = this.completed.splice(this.completed.indexOf(taskTitle), 1);
      this.tasks.push(tasked);
      return `Task moved back to tasks! Make sure you get it done!`;
    }
  }

  removeTask(array, title) {
    let taskTitle = this.array.find(el => title === el.title);
    if(taskTitle) {
      this.array.splice(this.array.indexOf(taskTitle));
      return `Task deleted!`;
    }

    return `You don't have that task in your list!`;
  }
}

class Task {
  constructor(title, description) {
    this.title = title;
    this.description= description;
  }
}