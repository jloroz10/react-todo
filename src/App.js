import React from 'react';

import ListElements from './components/ListElements.js';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

//se usan funciones en vez de clases cuando no se necesita usar el state
//solo se debe retornar una cosa

/**?
 *  TWO TYPES OF COMPONENTS
 * 1. Stateful components:
 *  - Class
 *  - State
 *  - Lifecycle methods
 *  - 
 * 
 * 2. Stateless Components (Functional Componets)
 *  - Functions
 *  - No state
 *  - No Lifecycle methods
 */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value:"",
      todos:[]
    }
  }
  updateValue = e =>{
    
    this.setState({
        value:e.target.value
    })
  }

  saveTodo = () =>{
    
    if(this.state.value){
      this.setState({
                        //con parentesis estamos generando un arreglo de objetos
        todos:[...this.state.todos,{value:this.state.value, completed:false}],
        value:''
      })
      console.log(this.state);
    }
  }
  deleteTodo = (index)=>{
    console.log("click" + index);
    this.setState({
      todos:this.state.todos.filter((_,i)=> i !== index)
    });
  }

  markCompleted = (index) =>{
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed; 
    this.setState({ todos });
    
  }
  render(){

    return (
        // con la prop component le decimos como queremos que se comporte
        //gutterBotom agrega un margen abajo

        //React.Fragment hace que no salga un div vacio en el dom
       
        <React.Fragment>

            <Typography align="center" variant="h2" gutterBottom>
              To-Do App
            </Typography>
        
            <Grid container justify="center">
              <Grid item>
                <form onSubmit={ e =>{
                        e.preventDefault();
                        this.saveTodo();
                  }
                }>
                <TextField type="text"
                          placeholder="Add to-do"
                          margin="normal"
                          onChange={this.updateValue}
                          value={this.state.value}/>
                </form>
                
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item md={8}>
                  <ListElements markAsCompleted={this.markCompleted} deleteToDo={this.deleteTodo} todos={this.state.todos}/>
              </Grid>
            </Grid>

        </React.Fragment>
    );
  }//render
}

export default App;
