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
    showTask(key) {
        this.editTask = key;
    },
    closeEdit() {
        this.editTask = '';
    },
    addTask() {

        if (this.$refs.new_task.value.trim() === '') return;

        this.tasks.push({
            id: this.tasks.length + 1,
            title: this.$refs.new_task.value,
            active: false
        });

        this.$refs.new_task.value = '';
    }
};