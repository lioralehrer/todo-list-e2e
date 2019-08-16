import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import TasksList from "../TasksList/TasksList"
import TaskForm from "../TaskForm/TaskForm"
import "./Container.css"
import * as api from "../../utils/todoApi";
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
        this.handleRedo = this.handleRedo.bind(this);
        this.handleByPriority = this.handleByPriority.bind(this);
        this.getAllTasks = this.getAllTasks.bind(this);
    }
    getAllTasks() {
        api.getTasks(
            oldTasks => {
                var tasks = []
                var doneTasks = []
                for (var i = 0; i < oldTasks.all.length; i++) {
                    if (oldTasks.all[i].state === "TODO") {
                        tasks.push(oldTasks.all[i])
                    }
                    else {
                        doneTasks.push(oldTasks.all[i])
                    }
                }
                this.setState({
                    tasks: tasks,
                    doneTasks: doneTasks
                })
            },
            error => {
                console.log(error);
            });

    }
    componentDidMount() {
        this.getAllTasks()
    }
    handleNewTask(task) {
        api.createTask(task,
            newTask => {
                this.setState({
                    tasks: [...this.state.tasks, newTask]
                });
            },
            error => { console.log(error); }

        )

    }


    handleDone(taskid) {
        api.doneTask(taskid,
            donetask => {
                this.getAllTasks();
            },
            error => { console.log(error); }

        );

    }
    handleRedo(taskid) {
        api.redoTask(taskid,
            redoTask => {
                this.getAllTasks();
            },
            error => { console.log(error); }
        );
    }

    handleByPriority() {
        let tasks = Object.assign([], this.state.tasks);
        tasks.sort((a, b) => (parseInt(a.priority) < parseInt(b.priority)) ? 1 : ((parseInt(b.priority) < parseInt(a.priority)) ? -1 : 0));
        this.setState({
            tasks: tasks
        })
    }
    handleRemove(taskid) {
        api.removeTask(taskid,
            editedtasks => {
                this.getAllTasks()
            },
            error => { console.log(error); }

        );
    }


    render() {
        return (
            <div className="container">
                <Header />
                <TaskForm handleNewTask={this.handleNewTask} handlePriority={this.handleByPriority} />
                <div className="board-canvas">
                    <div className="row board">
                        <div className="col-md-6 col-xs-6 list">
                            <h3>Todo</h3>
                            <TasksList tasks={this.state.tasks} handleDone={this.handleDone} handleRemove={this.handleRemove} hideredo="hide-redo" />
                        </div>

                        <div className="col-md-6 col-xs-6 list">
                            <h3>Done</h3>
                            <TasksList tasks={this.state.doneTasks} hidedone="hide-done" handleRemove={this.handleRemove} handleRedo={this.handleRedo} />
                        </div>

                    </div>
                </div>

                <Footer />
            </div >
        )

    }
}

export default Container;