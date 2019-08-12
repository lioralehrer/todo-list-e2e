import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import TasksList from "../TasksList/TasksList"
import TaskForm from "../TaskForm/TaskForm"
import "./Container.css"
class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            doneTasks: []
        };
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleRemoveFromDoneList =this.handleRemoveFromDoneList.bind(this);
        this.handleRedo= this.handleRedo.bind(this);
        this.handleByPriority = this.handleByPriority.bind(this);
    }
    handleNewTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }
    handleDone(taskid) {
        // move the task from the tasks list and put it in done list
        let tasks = Object.assign([], this.state.tasks);
        let doneTask = tasks.splice(taskid, 1);
        this.setState({
            doneTasks: [...this.state.doneTasks, doneTask[0]],
            tasks: tasks,
            isStar:false,
            byPriority : false
        })
    }
    handleByPriority(){
        // take the array and show it by priority:
        let tasks= Object.assign([], this.state.tasks);
        tasks.sort((a,b) => (parseInt(a.priority) < parseInt(b.priority)) ? 1 : ((parseInt(b.priority) < parseInt(a.priority)) ? -1 : 0));
        this.setState({
           tasks:tasks 
        })
    }
    handleRemove(taskid) {
        let tasks = Object.assign([], this.state.tasks);
        tasks.splice(taskid, 1);
        this.setState({
            tasks: tasks
        })
    }
    handleRemoveFromDoneList(taskid) {
        let doneTasks = [...this.state.doneTasks];
        doneTasks.splice(taskid, 1);
        this.setState({
            doneTasks: doneTasks
        })
    }
    handleRedo(taskid){
        let doneTasks = [...this.state.doneTasks];
        let tasks = doneTasks.splice(taskid, 1);
        this.setState({
            tasks: [...this.state.tasks,tasks[0]],
            doneTasks: doneTasks
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <TaskForm handleNewTask={this.handleNewTask} handlePriority={this.handleByPriority} />
                <div className="row">
                    <div className="col-md-6 col-xs-6 list">
                        <h3>Todo</h3>
                        <TasksList tasks={this.state.tasks} handleDone={this.handleDone} handleRemove={this.handleRemove} hideredo="hide-redo" />
                    </div>

                    <div className="col-md-6 col-xs-6 list">
                        <h3>Done</h3>
                        <TasksList tasks={this.state.doneTasks} hidedone="hide-done" handleRemove={this.handleRemoveFromDoneList} handleRedo={this.handleRedo} />
                    </div>

                </div>

                <Footer />
            </div >
        )

    }
}

export default Container;