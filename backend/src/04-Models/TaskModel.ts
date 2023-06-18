class TaskModel{
    public taskId :number
    public description :string
    public dateCreated :string
    public customerId :number
    public created :boolean

    public constructor(task :TaskModel){
        this.taskId = task.taskId
        this.description = task.description
        this.dateCreated = task.dateCreated
        this.customerId = task.customerId
        this.created = task.created

    }

}

export default TaskModel