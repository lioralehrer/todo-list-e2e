import React from "react";
import "./Task.css"

class Task extends React.Component {
    constructor() {
        super();
        this.sendIsDone = this.sendIsDone.bind(this);
        this.sendIsRemoved = this.sendIsRemoved.bind(this);
        this.sendRedo = this.sendRedo.bind(this);
      
    }
    sendIsDone() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleDone(taskid);
    }

    sendIsRemoved() {
        this.props.handleRemove(this.props.taskid);
    }
    sendRedo() {
        var taskid = parseInt(this.props.taskid);
        this.props.handleRedo(taskid);
    }

    render() {
        return (
            <li  taskid={this.props.taskid}  >
                <p>
                <h3>{`  task: ${this.props.title}`} </h3>
                {`description: ${this.props.description}`}</p><p>{`priority:  ${this.props.priority}`}
                </p>
                <button className={this.props.hideDone}  onClick={this.sendIsDone}><span className="glyphicon glyphicon-ok"></span>Done</button>
                <button onClick={this.sendIsRemoved}  ><span className="glyphicon glyphicon-trash"></span></button>
                <button className={this.props.hideRedo}  onClick={this.sendRedo} >Redo</button>
            </li>
        )
    }
}
export default Task;