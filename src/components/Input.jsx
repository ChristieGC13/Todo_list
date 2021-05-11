import React from 'react';


const Input = (props) => {

    const {list, setList} = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
        task = "";
    };

    const submitHandler = e => {
        e.preventDefault();
        setList([...list]);
    }

    return (
        <div>
            <form className="form-inline" onSubmit={ submitHandler }>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" name="text" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={onClick}> Add New Task</button>
            </form>
        </div>
    );
};


export default Input;