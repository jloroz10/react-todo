import React from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = (props)=>{
    //destructuring
    const {value,saveTodo,updateValue} = props;

    return(
        <form onSubmit={ e =>{
            e.preventDefault();
            saveTodo();
            }}>
        <TextField id='input' type="text"
                placeholder="Add to-do"
                margin="normal"
                onChange={updateValue}
                value={value}/>
        </form>
    )
}

export default TodoForm;