import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

function  ListElements(props){
    
        return(
                <List>
                    {
                    //map manda como segundo argumento el index del elemento
                    props.todos.map((todo,index)=>{
                        return(
                        <ListItem onClick={()=>{props.markAsCompleted(index)}} key={index} dense button>
                            <Checkbox checked={todo.completed}/>
                            <ListItemText primary={todo.value}/>
                            <ListItemSecondaryAction>
                                <IconButton onClick={()=>{props.deleteToDo(index)}} >
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        );
                    })
                    } 
                </List>
            );
}

export default ListElements;