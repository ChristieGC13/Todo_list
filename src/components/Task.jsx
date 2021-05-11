import React from 'react';

const Task = (props) => {

    const {task, index, list, setList} = props;
    
    const deleteTask = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index);
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    const submitHandler = e => {
        e.preventDefault();
        setList([...list]);
    }

    return (
        <div key={index} className="d-flex mt-5">
            <h4 style={task.isComplete? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}:
                {textDecoration: 'none'}}>{task.name}</h4>
            <form className="form-inline" onSubmit={ submitHandler }>
                <input onChange={onChange} type="checkbox" name="task" className="ml-3" checked={task.isComplete} />
                <button className="btn btn-sm btn-danger ml-5" onClick={deleteTask}> Delete</button>
            </form>
        </div>
    );
};


export default Task;