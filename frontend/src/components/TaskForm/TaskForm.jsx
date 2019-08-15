import React from "react";

class TasksForm extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitTask = this.handleSubmitTask.bind(this);
        this.handleSetPriority = this.handleSetPriority.bind(this);
        this.state = (
            {
                id: "",
                task: "",
                description: "",
                priority: 1,
                date: ""
                
            }
        )
    }
    handleInputChange(e) {
        let inputValue = e.target.value;
        let stateKey = e.target.getAttribute("data-bind");
        this.setState({
            [stateKey]: inputValue,
        })
    }
    handleSubmitTask(e) {
        this.props.handleNewTask(Object.assign({}, this.state));
    }
    handleSetPriority(){
        this.props.handlePriority();
    }
    render() {
        return (
            <div >
                <span className="glyphicon glyphicon-list"></span>
                <input className="task-input " data-bind="task" onChange={this.handleInputChange} type="text" placeholder="task:" />
                <span className="glyphicon glyphicon-list"></span>
                <input className="task-input " data-bind="description" onChange={this.handleInputChange} type="text" placeholder="discription:" />
                <label for="priority">Select list:</label>
                <select className="priority" data-bind="priority" onChange={this.handleInputChange} id="priority">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button onClick={this.handleSubmitTask} className="btn btn-success">Submit task</button>
                <button onClick={this.handleSetPriority}>Sort Tasks By Priority</button>
                <button>Sort Tasks by Date</button>
            </div>
        )
    }
}
export default TasksForm;