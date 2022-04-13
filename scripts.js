const app = {
    title: 'Todo List',
    tasks: [
        {
            id: 1,
            title: 'hacer de comer',
            active: false
        },
        {
            id: 2,
            title: 'salir a correr',
            active: false
        },
        {
            id: 3,
            title: 'dormir',
            active: false
        }
    ],
    editTask: '',
    get calcTasks() {
        let counter = 0;
        this.tasks.map(task => {
            counter += !task.active ? 1 : 0;
        });

        if (counter <= 0) {
            return "<span>Todas la tareas completadas 😁</span>"
        }

        return `<span>Tareas por realizar: ${counter} de ${this.tasks.length}</span>`;
    },
    addTask() {

        if ((this.$refs.new_task.value).trim() === '') return

        this.tasks.push({
            id: this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1,
            title: this.$refs.new_task.value,
            active: false 
        })

        this.$refs.new_task.value = '';
    },
    toggleEdit() {
        this.showEdit = !this.showEdit;
    },
    cancelEdit() {
        this.closeEdit();
    },
    doTask(key) {
        this.tasks[key].active = !this.tasks[key].active;
    },
    updateTask() {
        this.tasks[this.editTask].title = this.$refs.edit_task.value;
        this.closeEdit();
    },
    deleteTask(key) {
        this.closeEdit()
        this.tasks.splice(key,1);
    },
    closeEdit() {
        this.editTask = '';
    }

};